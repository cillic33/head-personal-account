import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@utils": "/src/utils",
      "@layouts": "/src/layouts",
      "@pages": "/src/pages",
      "@images": "/src/images",
      "@typing": "/src/typing",
      "@hooks": "/src/hooks",
    }
  }
})
