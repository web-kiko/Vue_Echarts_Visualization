<template>
	<div class="container" :class="curTheme">
		<menubar @showSettingDialog="settingshow = true"></menubar>
	
		<router-view></router-view>
	
		<settingdialog v-if="settingshow" @saved="refreshConfig" @hideSetting="hideSetting"></settingdialog>
	</div>
</template>
<script setup>
	import {
		ref,
		onMounted,
		onBeforeUnmount,
		reactive
	} from 'vue'
	import {
		onBeforeRouteUpdate,
		useRouter,
		useRoute
	} from 'vue-router'
	
	import "./css/dark_theme.css"
	import "./css/default.css"
	
	import settingdialog from "./components/setting.vue"
	import menubar from "./components/menubar.vue"
	
	import config from './js/config.js'
	import utils from './js/utils.js'
	import api from './js/api.js'
	
	/**
	 * 配置相关信息
	 */
	let configs = config.getConfig();
	let curTheme = "dark";
	let turntime = 60 * 1000;
	configs.forEach((item, index, arr) => {
		//更新界面主题
		if (item.key == 'theme') {
			curTheme = item.value
		}
		//更细切换周期
		if (item.key == 'turntime') {
			turntime = item.value * 1
		}
	});
	const settingshow = ref(false);
	const hideSetting = (e) => {
		settingshow.value = false;
	}
	
	//刷新配置
	const refreshConfig = (e) => {
		//简单期间，直接刷新界面
		window.location.reload();
	}
	
	onMounted(() => {});
	onBeforeUnmount(() => {});
</script>

<style>

</style>
