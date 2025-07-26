import { parse } from '@vue/compiler-sfc'
import { parse as babelParse } from '@babel/parser'
import type { NodePath } from '@babel/traverse'
import _traverse from '@babel/traverse'
import type { Identifier, Node, ObjectProperty as BabelObjectProperty, ObjectProperty } from '@babel/types'

// Type guard to check if a node is an ObjectProperty with an Identifier key
const isObjectPropertyWithIdentifier = (
  node: Node | null | undefined
): node is BabelObjectProperty & {
  key: Identifier
  value: Node
} => {
  return Boolean(
    node && node.type === 'ObjectProperty' && 'key' in node && node.key?.type === 'Identifier' && 'value' in node
  )
}

const traverse = (_traverse as { default?: typeof _traverse }).default || _traverse

export async function extractPropsFromVueFile(fileContent: string): Promise<
  Record<
    string,
    {
      type: string | string[]
      required?: boolean
      default?: unknown
      validator?: (value: unknown) => boolean
    }
  >
> {
  const { descriptor } = parse(fileContent)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const props: Record<string, any> = {}

  const scriptContent = descriptor.script?.content || ''

  // Process Options API & defineComponent
  if (scriptContent) {
    const ast = babelParse(scriptContent, {
      sourceType: 'module',
      plugins: ['typescript'],
    })

    traverse(ast, {
      ObjectProperty(path: NodePath<ObjectProperty>) {
        if (path.node.key.type === 'Identifier' && path.node.key.name === 'props') {
          const value = path.node.value
          if (value.type === 'ObjectExpression') {
            value.properties.forEach((prop) => {
              if (isObjectPropertyWithIdentifier(prop)) {
                const propName = prop.key.name
                if (prop.value.type === 'ObjectExpression') {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  const propConfig: any = {}

                  // Process each property in the prop configuration
                  prop.value.properties.forEach((propConfigItem) => {
                    if (isObjectPropertyWithIdentifier(propConfigItem)) {
                      const key = propConfigItem.key.name

                      // Handle different property types
                      if (key === 'type') {
                        if (propConfigItem.value.type === 'ArrayExpression') {
                          propConfig.type = propConfigItem.value.elements
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            .filter((el): el is any => el?.type === 'Identifier')
                            .map((el) => el.name)
                        } else if (propConfigItem.value.type === 'Identifier') {
                          propConfig.type = propConfigItem.value.name
                        }
                      }
                      // Handle default values
                      else if (key === 'default') {
                        if (propConfigItem.value.type === 'StringLiteral') {
                          propConfig.default = propConfigItem.value.value
                        } else if (propConfigItem.value.type === 'NumericLiteral') {
                          propConfig.default = propConfigItem.value.value
                        } else if (propConfigItem.value.type === 'BooleanLiteral') {
                          propConfig.default = propConfigItem.value.value
                        } else if (propConfigItem.value.type === 'ArrayExpression') {
                          propConfig.default = '[]'
                        } else if (propConfigItem.value.type === 'ObjectExpression') {
                          propConfig.default = '{}'
                        } else if (propConfigItem.value.type === 'NullLiteral') {
                          propConfig.default = null
                        }
                      }
                      // Handle required
                      else if (key === 'required') {
                        propConfig.required =
                          propConfigItem.value.type === 'BooleanLiteral' ? propConfigItem.value.value : false
                      }
                      // Handle validator
                      else if (key === 'validator') {
                        if (
                          propConfigItem.value.type === 'ArrowFunctionExpression' ||
                          propConfigItem.value.type === 'FunctionExpression'
                        ) {
                          const functionText = scriptContent.slice(
                            propConfigItem.value.start || 0,
                            propConfigItem.value.end || 0
                          )

                          // Try to extract array values from includes() or indexOf() checks
                          const arrayPattern = /\[(['"])([^\]]+?)\1\]/g
                          const arrayMatches = functionText.match(arrayPattern)

                          if (arrayMatches && arrayMatches.length > 0) {
                            // Extract values from the first array found
                            const arrayValues = arrayMatches[0]
                              .replace(/\[\]'"\s/g, '')
                              .split(',')
                              .filter(Boolean)

                            if (arrayValues.length > 0) {
                              propConfig.validator = arrayValues
                            } else {
                              propConfig.validator = 'Function'
                            }
                          } else {
                            // Fallback to regex patterns if no array found
                            const regexPatterns: string[] = []

                            // Match literal regex patterns like /[a-z]+/
                            const literalRegex = /\/((?:\\\/|[^/\n])+)\//g
                            let match
                            while ((match = literalRegex.exec(functionText)) !== null) {
                              regexPatterns.push(match[1])
                            }

                            // Match RegExp constructor patterns like new RegExp('[a-z]+')
                            const constructorRegex = /new\s+RegExp\(['"`]([^'"`]+)['"`]\)/g
                            while ((match = constructorRegex.exec(functionText)) !== null) {
                              regexPatterns.push(match[1])
                            }

                            propConfig.validator = regexPatterns.length > 0 ? regexPatterns : 'Function'
                          }
                        }
                      }
                    }
                  })

                  props[propName] = propConfig
                }
              }
            })
          }
        }
      },
    })
  }

  return props
}
