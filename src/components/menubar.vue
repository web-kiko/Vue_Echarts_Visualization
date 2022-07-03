<template>
	<div class="flex title">
		<div style="width:30vw" class="flex_item flex">
			<div class="header">智慧园区可视化平台</div>
			<div class="menus flex_item flex">
				<div class="menus_div flex">
					<div class="flex_item" v-for="(item,index) in menus">
						<div v-if="item.isShow"
							:class="['menu_item',curpage,(curpage==item.sid)?'menu_item_selected':'']"
							@click="turnPage(item.path)">
							<span>{{item.name}}</span>
						</div>
					</div>
				</div>
				<div class="flex_item"></div>
			</div>
		</div>
		<div class="flex">
			<div class="time_div">
				<div class="time ">
					<div class="date_text">{{date}}</div>
				</div>
			</div>
			<div class="split_line_h"></div>
			<div class="weather_div">
				<div class="weather flex">
					<div class="icon flex_item" style="padding-top: 0.4vh;">
						<el-icon>
							<lightning />
						</el-icon>
					</div>
					
				</div>
			</div>
			<div class="split_line_h"></div>
			<div class="flex" style="width: 10vw;">
				<div class="time_div flex_item flex">

					<div class="tools  flex flex_item" style="">
						<div class="flex_item">
							<div class="tool_item" @click="screen">
								<div>
									<el-icon>
										<full-screen />
									</el-icon>
								</div>
								<div>{{screenText}}</div>
							</div>
						</div>
			<div class="split_line_h"></div>
						<div class="flex_item">
							<div class="tool_item" @click="showSettingDialog">
								<div>
									<el-icon>
										<setting />
									</el-icon>
								</div>
								<div>配置</div>
							</div>
						</div>
			<div class="split_line_h"></div>
						<div class="flex_item">
							<div class="tool_item" @click="exit">
								<div>
									<el-icon>
										<switch-button />
									</el-icon>
								</div>
								<div>退出</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import {
		ref,
		onMounted,
		onBeforeUnmount,
		reactive,
		defineEmits
	} from 'vue'
	import {
		onBeforeRouteUpdate,
		useRouter,
		useRoute
	} from 'vue-router'

	import config from '../js/config.js'
	import utils from '../js/utils.js'
	import api from '../js/api.js'

	const emit = defineEmits(['showSettingDialog']);

	const menus = reactive([{
			sid: 'Index',
			name: '综合监控',
			path: '/Index',
			isShow: true
		},
		{
			sid: 'Assets',
			name: '资产监控',
			path: '/Assets',
			isShow: true
		},
		{
			sid: 'Security',
			name: '安防监控',
			path: '/Security',
			isShow: true
		},
		{
			sid: 'Stream',
			name: '人流监控',
			path: '/Stream',
			isShow: true
		},
		{
			sid: 'Lighting',
			name: '照明监控',
			path: '/Lighting',
			isShow: true
		},
		{
			sid: 'Car',
			name: '停车监控',
			path: '/Car',
			isShow: true
		},
		{
			sid: 'Energy',
			name: '能耗监控',
			path: '/Energy',
			isShow: true
		},
		{
			sid: 'Space',
			name: '空间环境',
			path: '/Space',
			isShow: true
		},
		{
			sid: 'Basics',
			name: '基础设施',
			path: '/Basics',
			isShow: true
		}
	]);

	const showSettingDialog = () => {
		emit('showSettingDialog', {})
	}

	//全屏
	let screenText = ref("全屏");
	const isfullscreen = ref(false);
	const screen = () => {
		if (isfullscreen.value) {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			}
			screenText.value = '全屏';
		} else {
			var element = document.documentElement;
			if (element.requestFullscreen) {
				element.requestFullscreen();
			} else if (element.msRequestFullscreen) {
				element.msRequestFullscreen();
			} else if (element.mozRequestFullScreen) {
				element.mozRequestFullScreen();
			} else if (element.webkitRequestFullscreen) {
				element.webkitRequestFullscreen();
			}
			screenText.value = '恢复';
		}
		isfullscreen.value = !isfullscreen.value;
	}

	//退出
	const exit = () => {
		utils.showconfirm('确定要退出吗？');
	}

	const router = useRouter()
	const route = useRoute()

	const curpage = ref("index");
	const turnPage = (path) => {
		router.push(path);
	}
	router.beforeResolve(async to => {
		curpage.value = to.name;
	})

	//定时器
	let time = ref(new Date().format('hh:mm:ss'));
	let date = ref(new Date().format('yyyy年MM月dd日 ') + new Date().getweektext());
	const timer = setInterval(function() {
		time.value = new Date().format('hh:mm:ss');
		date.value = (new Date().format('yyyy年MM月dd日 ') + new Date().getweektext());
	}, 1000);

	onMounted(() => {});
	onBeforeUnmount(() => {
		if (timer) {
			clearInterval(timer);
		}
	});
</script>

<style>
</style>
