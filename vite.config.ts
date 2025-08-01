import { defineConfig } from 'vite'

export default defineConfig({
  base: '',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html'
    }
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    open: true
  }
})
