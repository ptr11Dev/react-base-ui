import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), dts({ rollupTypes: true })],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "react-base-ui",
      fileName: (format) => `react-base-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      treeshake: true,
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
