import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "127.0.0.1",
    port: 5713,
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        // svgr options
      },
    }),
  ],
});
