import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// React + TypeScript 학습에 필요한 최소 Vite 설정.
export default defineConfig({
  plugins: [react()],
});
