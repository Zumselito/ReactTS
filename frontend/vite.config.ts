import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 3000,
    host: '0.0.0.0',
    open: false,
    hmr: {
      clientPort: 3000
    },
    watch: {
      usePolling: true, // Wichtig für Netzlaufwerke/Container
    }
  }
})
