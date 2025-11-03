import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import tsconfigPaths from "vite-tsconfig-paths";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  build: {
    outDir: "../",
  },
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      styles: resolve(__dirname, "src/styles"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
            @use "styles/variables.scss" as *;
            @use "styles/breakpoints.scss" as *;
            @use "styles/animations.scss" as *;
          `,
      },
    },
  }
});
