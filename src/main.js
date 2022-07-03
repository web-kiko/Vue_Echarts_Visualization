import { createApp } from 'vue'

// 引入网络请求
import axios from 'axios';

// 引入echarts
import * as echarts from 'echarts'

// 引入elementui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElIcons from '@element-plus/icons-vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import App from './App.vue'
import Assets from './pages/Assets.vue'
import Index from './pages/Index.vue'
import Lighting from './pages/Lighting.vue'
import Security from './pages/Security.vue'
import Basics from './pages/Basics.vue'
import Stream from './pages/Stream.vue'
import Car from './pages/Car.vue'
import Energy from './pages/Energy.vue'
import Space from './pages/Space.vue'

//定义路由相关代码
import {
	createRouter,
	createWebHashHistory
} from "vue-router";

const routes = [{
		path: '/',
		redirect: "/Index"
	},
	{
		name: 'Index',
		path: '/Index',
		component: Index
	},
	{
		name: 'Assets',
		path: '/Assets',
		component: Assets
	},
	{
		name: 'Lighting',
		path: '/Lighting',
		component: Lighting
	},
	{
		name: 'Security',
		path: '/Security',
		component: Security
	},
	{
		name: 'Basics',
		path: '/Basics',
		component: Basics
	},
	{
		name: 'Stream',
		path: '/Stream',
		component: Stream
	},
	{
		name: 'Car',
		path: '/Car',
		component: Car
	},
	{
		name: 'Energy',
		path: '/Energy',
		component: Energy
	},
	{
		name: 'Space',
		path: '/Space',
		component: Space
	}
]
const router = createRouter({
	// 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
	history: createWebHashHistory(),
	routes, // `routes: routes` 的缩写
})

const app = createApp(App);

// vue3 给原型上挂载属性
app.config.globalProperties.$echarts = echarts;

//引入element的图标
for (const name in ElIcons) {
	app.component(name, ElIcons[name])
}
app.use(router);
app.use(ElementPlus, {
  locale: zhCn,
});

app.mount('#app')
