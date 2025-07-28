import fs from 'fs/promises'
import path from 'path'
import fg from 'fast-glob'
import chokidar from 'chokidar'
import { extractPropsFromVueFile } from './extract-props'

const componentsDir = path.resolve(process.cwd(), 'src/components')
const storiesDir = path.resolve(process.cwd(), 'src/stories')

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
  const titlePath = relativePath.replace(/\\/g, '/').replace(/\.vue$/, '')
  // Read and parse Vue component
  const fileContent = await fs.readFile(componentPath, 'utf-8')
  const propsData = await extractPropsFromVueFile(fileContent)
  let isFunction = false
  const argTypes = Object.entries(propsData).reduce(
    (acc, [key, value]) => {
      const { type, validator } = value
      const argType: Record<string, any> = {}

      if (validator?.length) {
        argType.control = {
          type: 'select',
          options: validator,
        }
      } else if (type === 'Boolean') {
        argType.control = {
          type: 'boolean',
        }
      } else if (type === 'String') {
        argType.control = {
          type: 'text',
        }
      }

      if (type === 'Function') {
        isFunction = true
      }

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

  const content = `
import type { Meta, StoryObj } from '@storybook/vue3-vite';
${isFunction ? `import { fn } from 'storybook/test';` : ''}
import ${componentName} from '${importPath}'

const meta = {
  title: 'Auto/${titlePath}',
  component: ${componentName},
  tags: ['autodocs'],
  argTypes: ${JSON.stringify(argTypes)},
  args: ${JSON.stringify(args)},
} satisfies Meta<typeof ${componentName}>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    label: 'Button',
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    label: 'Button',
    size: 'small',
  },
};
  `.trim()

  await fs.mkdir(path.dirname(storyPath), { recursive: true })
  await fs.writeFile(storyPath, content, 'utf-8')
  console.log(`✅ Generated: ${storyPath}`)
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
