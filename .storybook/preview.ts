import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: 'white', value: '#fff' },
        { name: 'light', value: '#ddd' },
        { name: 'dark', value: '#222' },
        { name: 'black', value: '#000' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
