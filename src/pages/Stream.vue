<template>
	<el-row :gutter="10" style="margin: 0;padding: 0;margin-top: 1vh;">
		<el-col :span="8">
			<!-- 实时人流量 -->
			<chartpanel title="实时人流量" style="height: 30vh;">
				<v-chart ref="curchart" style="min-height: 26vh;" :option="curchartoption"></v-chart>
			</chartpanel>
			<!-- 人员类型分布 -->
			<chartpanel title="人员类型分布" style="height: 30vh;margin-top: 1vh;">
				<v-chart ref="typechart" style="min-height: 26vh;" :option="typechartoption"></v-chart>
			</chartpanel>
			<!-- 人流走势统计 -->
			<chartpanel title="人流走势统计" style="height: 30vh;margin-top: 1vh;">
				<v-chart ref="datechart" style="min-height: 26vh;" :option="datechartoption"></v-chart>
			</chartpanel>
		</el-col>
		<el-col :span="16">
			<!-- 出入口监控摄像头 -->
			<chartpanel title="" style="height: 92.5vh;	">
				<div style="position: absolute;top:1vh;width:99%;height: 91.5vh;">
					<div style="position: relative;height: 91.5vh;width: 99.5%">
						<div class="flex" >
							<div class="flex_item">
								<div class="device_item">
									<img src="@/assets/11.jpeg" style="width: 100%;height:100%;border-radius: 3px;">
									<div class="info">
										<div class="icon"><el-icon><VideoCamera /></el-icon></div>
										<div class="name">东门摄像头</div>
									</div>
								</div>
							</div>
							<div style="width:1vh;height:1vh"></div>
							<div class="flex_item">
								<div class="device_item">
									<img src="@/assets/22.webp" style="width: 100%;height:100%;border-radius: 3px;">
									<div class="info">
										<div class="icon"><el-icon><VideoCamera /></el-icon></div>
										<div class="name">西门摄像头</div>
									</div>
								</div>
							</div>
							<div style="width:1vh;height:1vh"></div>
						</div>
							<div style="width:1vh;height:1vh"></div>
						<div class="flex" >
							<div class="flex_item">
								<div class="device_item">
									<img src="@/assets/4.jpeg" style="width: 100%;height:100%;border-radius: 3px;">
									<div class="info">
										<div class="icon"><el-icon><VideoCamera /></el-icon></div>
										<div class="name">南门摄像头</div>
									</div>
								</div>
							</div>
							<div style="width:1vh;height:1vh"></div>
							<div class="flex_item">
								<div class="device_item">
									<img src="@/assets/3.jpeg" style="width: 100%;height:100%;border-radius: 3px;">
									<div class="info">
										<div class="icon"><el-icon><VideoCamera /></el-icon></div>
										<div class="name">北门摄像头</div>
									</div>
								</div>
							</div>
							<div style="width:1vh;height:1vh"></div>
						</div>
					</div>
					<div class="chart_title" style="position: absolute;left:0;top:0;width:100%;text-align: center;">
					监控实时图像</div>
				</div>
			</chartpanel>
		</el-col>
	</el-row>
</template>

<script setup>
	import {
		ref,
		reactive,
		onMounted,
		onBeforeUnmount,
		computed
	} from 'vue'
	
	import VChart, {
		THEME_KEY
	} from "vue-echarts";
	
	import {
		Vue3SeamlessScroll
	} from "vue3-seamless-scroll";
	
	import config from '@/js/config.js'
	import utils from '@/js/utils.js'
	import chartutils from '@/js/chartutils.js'
	
	import * as echarts from 'echarts';
	import 'echarts-extension-amap';
	import 'echarts-wordcloud';
	import 'echarts-liquidfill';
	
	import Swiper from 'swiper';
	import 'swiper/dist/css/swiper.min.css';
	
	import chartpanel from '@/components/chartpanel.vue'
	
	const $echarts = echarts;
	
	// 实时人流量
	let curchart = ref();
	let curchartoption = reactive({});
	let curcharttimes = reactive([]);
	let curchartvalues = reactive([]);
	
	// 人员类型分布
	let typechart = ref();
	let typechartoption = reactive({});
	let typechartcategory = reactive(['园区人员','来访人员','物业人员','市政人员','可疑人员']);
	let typechartvalues = reactive([]);
	
	// 人流走势统计
	let datechart = ref();
	let datechartoption = reactive({});
	let datecharttimes = reactive([]);
	let datechartvalues = reactive([]);
	
	//初始化图标
	const initCharts = () => {
		let date = new Date();
		date.setHours(date.getHours()-8);
		for (let i = new Date(date.getTime()); i.getTime() < new Date().getTime(); i.setMinutes(i.getMinutes()+5)) {
			curcharttimes.push(i.format('hh:mm'));
			curchartvalues.push(utils.random(1000));
		}
		chartutils.initLineChart(curchartoption, curcharttimes, curchartvalues, '#0bfdab');
		
		typechartcategory.forEach((item,index)=>{
			typechartvalues.push(utils.random(1000));
		})
		chartutils.initBarChart(typechartoption, typechartcategory, typechartvalues, '#00CAFF');
		
		date = new Date();
		date.setDate(date.getDate()-7);
		for (let i = new Date(date.getTime()); i.getTime() < new Date().getTime(); i.setDate(i.getDate()+1)) {
			datecharttimes.push(i.format('MM-dd'));
			datechartvalues.push(utils.random(1000));
		}
		chartutils.initLineChart(datechartoption, datecharttimes, datechartvalues, '#ff5353');
	}
	
	let timer = null;
	const startRefreshChart = () => {
		timer && clearInterval(timer);
	
		//获取刷新周期，TODO 配置变动时，此处需自动更新
		let refreshtime = 60 * 1000;
		config.getConfig().forEach(function(item, index) {
			if (item.key == 'refreshtime') {
				refreshtime = item.value;
			}
		});
	
		timer = setInterval(function() {
			curchartvalues.forEach((item,index)=>{
				curchartvalues[index] = utils.random(1000);
			})
			typechartvalues.forEach((item,index)=>{
				typechartvalues[index] = utils.random(1000);
			})
			datechartvalues.forEach((item,index)=>{
				datechartvalues[index] = utils.random(1000);
			})
		}, refreshtime);
	}
	
	//挂
	onMounted(() => {
		initCharts();
		startRefreshChart();
	
		//图表尺寸自适应
		window.onresize = () => {
			curchart && curchart.value.resize();
			typechart && typechart.value.resize();
			datechart && datechart.value.resize();
		}
	});
	onBeforeUnmount(() => {
		timer && clearInterval(timer);
	});
</script>

<style scoped="scoped">
	.device_item{
		width:100%;
		overflow: hidden;
		height: 45vh;
		position: relative;
		box-shadow: 0 0 0.5vh #11111122;
	}
	.device_item .info{
		position: absolute;
		left: 0;
		top:0;
		width:100%;
		height: 100%;
		background: #00000033;
		text-align: center;
		cursor: pointer;
		color: #fff;
		font-size:2rem;
	}
	.device_item .info .icon{
		margin-top: 30%;
		font-size:5rem;
	}
	.device_item .info:hover{
		background: #00FAC144;
	}
</style>
