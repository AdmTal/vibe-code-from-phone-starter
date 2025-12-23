import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

const isOffline = process.env.BUILD_OFFLINE === 'true'

export default defineConfig({
  root: 'src/www',
  build: {
    outDir: isOffline ? '../../dist-offline' : '../../dist',
    emptyOutDir: true,
    assetsInlineLimit: isOffline ? 100000000 : 4096, // Inline everything in offline mode
  },
  plugins: isOffline ? [viteSingleFile()] : [],
})
