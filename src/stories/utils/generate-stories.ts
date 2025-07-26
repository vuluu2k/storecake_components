import fs from 'fs'
import path from 'path'
import fg from 'fast-glob'
import chokidar from 'chokidar'

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

function genStoryFile(componentPath: string) {
  console.log('componentPath', componentPath)
  if (!componentPath.endsWith('.vue')) return

  const relativePath = path.relative(componentsDir, componentPath)
  const componentName = path.basename(componentPath, '.vue')
  const storyPath = path.join(storiesDir, relativePath).replace(/\.vue$/, '.stories.ts')

  const importPath = normalizeImportPath(storyPath, componentPath)
  const titlePath = relativePath.replace(/\\/g, '/').replace(/\.vue$/, '')

  const content = `
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import ${componentName} from '${importPath}'

const meta = {
  title: 'Auto/${titlePath}',
  component: ${componentName},
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {
    
  }
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

  fs.mkdirSync(path.dirname(storyPath), { recursive: true })
  fs.writeFileSync(storyPath, content)
  console.log(`✅ Generated: ${storyPath}`)
}

async function generateAllStories() {
  console.log('in here', componentsDir)
  const vueFiles = await fg('**/*.vue', { cwd: componentsDir, absolute: true })
  console.log('first', vueFiles)
  vueFiles.forEach(genStoryFile)
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

  console.log('in here')

  watcher.on('add', genStoryFile)
  watcher.on('change', genStoryFile)
}

const isWatch = process.argv.includes('--watch')

if (isWatch) {
  console.log('in here')
  watchMode()
} else {
  console.log('out here')
  generateAllStories()
}
