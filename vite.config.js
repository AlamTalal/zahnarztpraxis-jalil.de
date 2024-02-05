import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/svg": path.resolve(__dirname, "./src/components/svg"),
      "@/custom": path.resolve(__dirname, "./src/components/custom"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/containers": path.resolve(__dirname, "./src/containers"),
      "@/hooks": path.resolve(__dirname, "./src/utils/hooks"),
      "@/utils": path.resolve(__dirname, "./src/utils"),
      "@/": path.resolve(__dirname, "./src"),
    },
  },
});
