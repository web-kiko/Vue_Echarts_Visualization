/*
 * @Descripttion: 
 * @version: 
 * @Author: Leojias
 * @Date: 2022-06-20 06:07:04
 * @LastEditors: Leojias
 * @LastEditTime: 2022-07-03 09:24:42
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')
import { resolve } from 'path' // 主要用于alias文件路径别名

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': resolve(__dirname, '.', 'src'),
		},
	},
  plugins: [vue()]
})
