import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    build: {
      emptyOutDir: true,
      outDir: 'build',
      assetsDir: 'AuroDemo/assets',
      // unique 'non-root' path for this app to run in a sub directory path "http://eye-4design.com/AuroDemo/". Used so I can run other apps on this same domain
      // assetsDir value is used to dynamically build the url to assets folder path in my production environment, which is unique
      // This provides accurate url referencing to resources to run the app on my custom domain/url sub directory path
      publicDir: true,
    },
    plugins: [react(), eslint()],
    base: "./", // sets relative url path - when set the necessary "." in front of the "/" for "src" path is retained in production vite builds when it's converted to "assets". This ensures production build assets url "assetDir" is valid.
  };
});