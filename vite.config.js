// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // Opciones de configuración de Vite
  server: {
    watch: {
      usePolling: true
    }
  }
});
