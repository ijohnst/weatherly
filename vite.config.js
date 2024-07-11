import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import customConfig from '../vite.config.common';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  ...customConfig
})
