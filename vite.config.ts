import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/style/setting/var.scss";
          @import "./src/style/tools/_sassMagic.scss";
        `
      },
      postcss: {
				plugins: [
					require('postcss-plugin-px2rem')({
						rootValue: 37.5,
						exclude: /(node_module)/,
						minPixelValue: 3
					})
				]
			},
    }
  }
})
