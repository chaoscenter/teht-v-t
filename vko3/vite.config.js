import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/tehtavat/vko3/', // Polku repositorysi kansioon GitHub Pagesissä
});
