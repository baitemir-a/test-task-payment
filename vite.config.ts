import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  server: {
    host: '0.0.0.0',
    port: 8080, // Убедитесь, что порт совпадает с портом, указанным в Caddyfile
  },
})

