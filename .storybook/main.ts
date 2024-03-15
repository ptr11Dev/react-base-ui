import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    /* Used to create links to navigate between stories */
    '@storybook/addon-links',
    /* All the pre-configured addons like: Actions, Backgrounds, Controls, Docs, Viewport, Toolbars, Measure, Outline */
    '@storybook/addon-essentials',
    /* Used to provide components with an external source of state and actions - for example for testing */
    '@storybook/addon-interactions',
    /* TODO - not working for storybook 8 - Used to embed Figma in Design panel
      parameters: {
        design: {
          type: 'figma',
          url: 'url-to-figma-file',
        },
      },  
    */
    // '@storybook/addon-designs',
    /* Used for visual testing */
    '@chromatic-com/storybook',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
}
export default config
