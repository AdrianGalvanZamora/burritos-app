import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: Lo que está entre comillas debe ser EXACTAMENTE el nombre de tu repositorio en GitHub
  // Si tu repositorio se llama "burritos-app", déjalo así.
  base: '/burritos-app/', 
})