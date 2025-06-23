import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true, // 개발 소스맵
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },

  // 빌드 설정
  build: {
    outDir: 'dist',   // 빌드 출력 디렉토리
    assetsDir: 'assets', // 빌드 출력 디렉토
    rollupOptions: {
      output: {
        // js 파일 구조
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',

        // css 파일 구조
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split(".");
          const ext = info[info.length - 1];
          
          // 폰트 파일
          if (/\.(woff|woff2|eot|ttf|otf)$/.test(assetInfo.name)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          // CSS 파일
          if (/\.(css)$/.test(assetInfo.name)) {
            return `assets/css/[name]-[hash][extname]`;
          }
          // 이미지 파일
          if (/\.(png|jpe?g|gif|svg|webp)$/.test(assetInfo.name)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          // 기타 파일
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
  },

  // 미리보기 서버
  preview: {
    port: 5173,
    open: true,
  },

  // 개발 서버
  server: {
    port: 5174,
    host: true,
    open: true,
  },
})
