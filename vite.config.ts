import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './src/main.ts',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    open: true
  }
})