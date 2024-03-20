/* All named colors are those to change */

import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming'
import { API_PreparedIndexEntry, API_StatusObject } from '@storybook/types'

addons.setConfig({
  sidebar: {
    filters: {
      patterns: (
        item: API_PreparedIndexEntry & {
          status: Record<string, API_StatusObject | null>
        },
      ): boolean => {
        return !(item.tags ?? []).includes('hideInSidebar')
      },
    },
  },
  theme: create({
    base: 'dark',
    brandTitle: 'react-base-ui',
    fontBase: '"Inter", sans-serif',
    fontCode: 'monospace',

    colorPrimary: '#61DAFB',
    colorSecondary: '#00D8FF',

    appBg: '#282c34',
    appContentBg: '#333740',
    appPreviewBg: '#fff',
    appBorderColor: '#20232A',
    appBorderRadius: 4,

    textColor: '#ABB2BF',
    textInverseColor: '#282c34',
    textMutedColor: '#636d83',

    barTextColor: '#61DAFB',
    barSelectedColor: '#61DAFB',
    barBg: '#333740',

    inputBg: '#21252B',
    inputBorder: '#1B1F23',
    inputTextColor: '#ABB2BF',
    inputBorderRadius: 2,

    gridCellSize: 12,

    barHoverColor: '#5C6370',
    booleanBg: '#21252B',
    booleanSelectedBg: '#61DAFB',
    buttonBg: '#20232A',
    buttonBorder: '#61DAFB',
  }),
})
