/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/",
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "src/setupTest.ts",
    },
  };

  if (command !== "serve") {
    config.base = "/star-wars";
  }

  return config;
});
