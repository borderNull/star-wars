/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(() => {
  const config = {
    plugins: [react()],
    base: "/star-wars/",
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "src/setupTest.ts",
    },
  };

  return config;
});
