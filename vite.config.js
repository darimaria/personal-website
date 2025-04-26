import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { createRequire } from "node:module";
import tailwindcss from '@tailwindcss/vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

const require = createRequire(import.meta.url);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    nodePolyfills()
  ],
});
