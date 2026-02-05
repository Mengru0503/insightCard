import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/insightCard/", // <- GitHub repo 名稱
  plugins: [react()],
});