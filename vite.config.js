import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import copy from "rollup-plugin-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [
        { src: "_redirects", dest: "dist" },
        // Add more targets if needed
      ],
      hook: "writeBundle", // Run after bundle is written
    }),
  ],
});
