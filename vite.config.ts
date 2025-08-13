import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    // Image optimization plugin - CRITICAL for performance
    ViteImageOptimizer({
      // Aggressive optimization for web
      png: {
        quality: 80,
        palette: true,
      },
      jpeg: {
        quality: 75,
        progressive: true,
      },
      jpg: {
        quality: 75,
        progressive: true,
      },
      webp: {
        quality: 80,
        lossless: false,
      },
      avif: {
        quality: 70,
        lossless: false,
      },
      // Process all images including public folder
      includePublic: true,
      // Exclude empty/problematic files
      exclude: /logo\.png$/,
      // Cache optimized images
      cache: true,
      // Log optimization stats
      logStats: true,
    }),
    // Gzip compression for production
    mode === 'production' && viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    // Brotli compression for production
    mode === 'production' && viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Build optimizations
  build: {
    rollupOptions: {
      output: {
        // Split chunks for better caching
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor';
            }
            if (id.includes('@radix-ui') || id.includes('lucide-react')) {
              return 'ui';
            }
            return 'vendor';
          }
        },
      },
    },
    // Enable compression
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
}));
