import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src/www',
  build: {
    outDir: '../../dist',
    emptyOutDir: true
  }
})
