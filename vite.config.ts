import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import removeConsole from 'vite-plugin-remove-console'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    react(),
    dts({ rollupTypes: true }),
    removeConsole({}),
    visualizer({ open: true, filename: 'bundle-analysis.html' }),
  ],
  esbuild: {
    legalComments: 'none',
    drop: ['console'],
    treeShaking: true,
    pure: ['console.log'],
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
  },
  build: {
    minify: 'esbuild',
    lib: {
      entry: 'src/index.ts',
      name: 'react-base-ui',
      fileName: (format) => `react-base-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'styled-components'],
      treeshake: true,
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
          'styled-components': 'styled',
        },
      },
    },
  },
})
