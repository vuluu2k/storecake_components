import fs from 'fs/promises'
import path from 'path'
import fg from 'fast-glob'
import chokidar from 'chokidar'
import prettier from 'prettier'
import { extractPropsFromVueFile } from './extract-props'

const componentsDir = path.resolve(process.cwd(), 'src/components')
const storiesDir = path.resolve(process.cwd(), 'src/stories')

const GENERAL = ['Button']

const LAYOUT = ['Divider']

const NAVIGATION = ['Dropdown', 'Menu', 'Pagination', 'Tab', 'Tabs', 'Sidebar']

const DATA_ENTRY = [
  'AutoComplete',
  'Checkbox',
  'Radio',
  'Select',
  'SelectOption',
  'Input',
  'InputMoney',
  'InputWeight',
  'InputSearch',
  'InputPhoneCountry',
  'Switch',
  'TextArea',
  'CheckboxGroup',
  'RadioGroup',
  'DatePicker',
  'RangePicker',
]

const DATA_DISPLAY = [
  'Badge',
  'Tags',
  'Tooltip',
  'Popover',
  'Avatar',
  'Image',
  'Segment',
  'Segmented',
  'Status',
  'Table',
  'Empty',
]

const FEEDBACK = ['MessageAlert', 'Modal', 'ModalConfirm', 'Alert', 'Progress', 'LogoSpinning']

const TITLE_BAR = {
  General: GENERAL,
  Layout: LAYOUT,
  Navigation: NAVIGATION,
  'Data Entry': DATA_ENTRY,
  'Data Display': DATA_DISPLAY,
  Feedback: FEEDBACK,
}

function normalizeImportPath(from: string, to: string) {
  let rel = path.relative(path.dirname(from), to).replace(/\\/g, '/')
  if (!rel.startsWith('.')) {
    rel = './' + rel
  }
  // Handle parent directory references (../../)
  if (rel.startsWith('..')) {
    return rel
  }
  return rel
}

async function genStoryFile(componentPath: string) {
  console.log('componentPath', componentPath)
  if (!componentPath.endsWith('.vue')) return

  const relativePath = path.relative(componentsDir, componentPath)
  const componentName = path.basename(componentPath, '.vue')
  const storyPath = path.join(storiesDir, relativePath).replace(/\.vue$/, '.stories.ts')
  const importPath = normalizeImportPath(storyPath, componentPath)
  // Read and parse Vue component
  const fileContent = await fs.readFile(componentPath, 'utf-8')
  const propsData = await extractPropsFromVueFile(fileContent)
  let isFunction = false
  let types: any[] = [],
    sizes: any[] = []

  const keyArgs = Object.keys(propsData)

  const argTypes = Object.entries(propsData).reduce(
    (acc, [key, value]) => {
      const { type, validator = [] } = value
      const argType: Record<string, any> = getControl(type, validator as any[])

      argType.description = getDescription(key, componentName)

      if (type === 'Function') {
        isFunction = true
      }

      if (key == 'type') types = validator as any[]
      if (key == 'size') sizes = validator as any[]

      acc[key] = argType
      return acc
    },
    {} as Record<string, any>
  )

  const args = Object.entries(propsData).reduce(
    (acc, [key, value]) => {
      const { default: defaultValue } = value

      acc[key] = defaultValue
      return acc
    },
    {} as Record<string, any>
  )

  const argsAdd: Record<string, any> = {}

  const argDefault = { ...args }

  if (componentName == 'Button') argsAdd.label = 'Click me!'

  if (componentName == 'Input') argsAdd.label = 'Username'

  if (componentName == 'Badge') argsAdd.count = 1

  if (componentName == 'Tooltip') argsAdd.title = 'Storecake top 1 vietnam'

  if (keyArgs.includes('options'))
    argsAdd.options = [
      {
        key: '1',
        value: 'Option 1',
      },
      {
        key: '2',
        value: 'Option 2',
      },
      {
        key: '3',
        value: 'Option 3',
      },
    ]

  const defaultStory = `export const Default: Story = {
    args: ${JSON.stringify({ ...argDefault, ...argsAdd })},
  };`

  const typeStories = types.map((type) => {
    return `export const ${type.charAt(0).toUpperCase() + type.slice(1)}: Story = {
      args: {
        type: '${type}',
        ${Object.keys(argsAdd)
          .map((key) => `${key}: ${JSON.stringify(argsAdd[key])}`)
          .join(',')}
      },
    };`
  })

  const sizeStories = sizes.map((size) => {
    return `export const ${size.charAt(0).toUpperCase() + size.slice(1)}: Story = {
      args: {
        size: '${size}',
        ${Object.keys(argsAdd)
          .map((key) => `${key}: ${JSON.stringify(argsAdd[key])}`)
          .join(',')}
      },
    };`
  })

  const content = `
    import type { Meta, StoryObj } from '@storybook/vue3-vite';
    ${isFunction ? `import { fn } from 'storybook/test';` : ''}
    import ${componentName} from '${importPath}'

    const meta = {
      title: '${getTitle(componentName)}',
      component: ${componentName},
      tags: ['autodocs'],
      argTypes: ${JSON.stringify(argTypes)},
      args: ${JSON.stringify(args)},
    } satisfies Meta<typeof ${componentName}>;

    export default meta;

    type Story = StoryObj<typeof meta>;

    ${defaultStory}
    ${typeStories.join('\n')}
    ${sizeStories.join('\n')}
  `.trim()

  await fs.mkdir(path.dirname(storyPath), { recursive: true })

  try {
    // Format the content using Prettier API
    const formattedContent = await prettier.format(content, {
      filepath: storyPath,
      parser: 'typescript',
    })

    // Write the formatted content to file
    await fs.writeFile(storyPath, formattedContent, 'utf-8')
    console.log(`✅ Generated and formatted: ${storyPath}`)
  } catch (error) {
    // If Prettier fails, write the unformatted content as fallback
    await fs.writeFile(storyPath, content, 'utf-8')
    console.error(`❌ Error formatting ${storyPath}:`, error)
    console.log(`✅ Generated (unformatted): ${storyPath}`)
  }
}

function getTitle(componentName: string): string {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [key, _] = Object.entries(TITLE_BAR).find(([_, value]) => value.includes(componentName)) || ['Other', []]
  return `${key}/${componentName}`
}

function getControl(type: string | string[], validator?: any[]): Record<string, any> {
  if (validator?.length) {
    return { control: 'select', options: validator }
  }

  if (Array.isArray(type)) {
    if (type.includes('Number')) return getControl('Number')
    return getControl(type[0])
  }

  if (type === 'Boolean') {
    return { control: 'boolean' }
  }

  if (type === 'String') {
    return { control: 'text' }
  }

  if (type === 'Number') {
    return { control: 'number' }
  }

  if (type === 'Array') {
    return { control: 'array' }
  }

  return { control: 'text' }
}

function getDescription(key: string, componentName: string): string {
  switch (key) {
    case 'label':
      return `Label of the ${componentName}`
    case 'loading':
      return `Loading state of the ${componentName}`
    case 'type':
      return `Type of the ${componentName}`
    case 'size':
      return `Size of the ${componentName}`
    case 'danger':
      return `Danger state of the ${componentName}`
    case 'ghost':
      return `Ghost state of the ${componentName}`
    case 'disabled':
      return `Disabled state of the ${componentName}`
    case 'classes':
      return `Classes of the ${componentName}`
    case 'sValue':
      return `Select a property of option is Value`
    case 'sKey':
      return `Select a property of option is Key`
    default:
      return `Property ${key} of the ${componentName}`
  }
}

async function generateAllStories() {
  const vueFiles = await fg('**/*.vue', { cwd: componentsDir, absolute: true })
  await Promise.all(vueFiles.map(genStoryFile))
  console.log(`🧾 Generated ${vueFiles.length} stories.`)
}

async function watchMode() {
  console.log('👀 Watching for .vue file changes...')
  const watcher = chokidar.watch(componentsDir, {
    persistent: true,
    ignoreInitial: false,
    awaitWriteFinish: true,
    depth: 5,
  })

  watcher.on('add', genStoryFile)
  watcher.on('change', genStoryFile)
}

const isWatch = process.argv.includes('--watch')

if (isWatch) {
  watchMode()
} else {
  generateAllStories()
}
