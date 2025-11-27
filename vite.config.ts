// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     exclude: ['lucide-react'],
//     include: ['react', 'react-dom', 'framer-motion'],
//     esbuildOptions: {
//       target: 'es2020',
//     },
//   },
//   build: {
//     // Aggressive minification
//     minify: 'terser',
//     terserOptions: {
//       compress: {
//         drop_console: true,
//         drop_debugger: true,
//         passes: 2,
//       },
//       mangle: true,
//       format: { comments: false },
//     },
//     // Code splitting for better caching
//     rollupOptions: {
//       output: {
//         manualChunks: (id) => {
//           if (id.includes('node_modules/react')) return 'vendor-react';
//           if (id.includes('node_modules/framer-motion')) return 'animations';
//           if (id.includes('node_modules/react-hook-form')) return 'form';
//           if (id.includes('node_modules')) return 'vendor';
//         },
//       },
//     },
//     // Optimize for faster loading
//     cssCodeSplit: true,
//     // Inline assets smaller than 4KB
//     assetsInlineLimit: 4096,
//     // Chunk size warnings
//     chunkSizeWarningLimit: 500,
//     // Disable source maps for production
//     sourcemap: false,
//     // Reduce output noise
//     reportCompressedSize: false,
//   },
// });
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',   // <<------ IMPORTANT
})
