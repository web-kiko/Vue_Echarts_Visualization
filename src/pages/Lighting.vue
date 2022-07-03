<template>
	<el-row :gutter="10" style="margin: 0;padding: 0;margin-top: 1vh;">
		<el-col :span="16">
			<!-- 照明设备位置统计 -->
			<chartpanel title="" style="height: 60vh;">
				<div style="position: absolute;top:1vh;width:100%;height: 60vh;">
					<div id="mapchart" ref="mapchart" style="position: relative;height: 60vh;"></div>
					<div class="chart_title" style="position: absolute;left:0;top:0;width:100%;text-align: center;">
					照明设备位置统计</div>
				</div>
			</chartpanel>
		</el-col>
		<el-col :span="8">
			<!-- 照明设备总体情况 -->
			<chartpanel title="照明设备总体情况" style="height: 30vh;">
				<div class="flex" style="margin-top: 3vh;">
					<div class="flex_item">
						<!-- 总资产 -->
						<div class="assetsinfo_item flex">
							<div class="icon text_color_10">
								<el-icon>
									<Sunny />
								</el-icon>
							</div>
							<div class="flex_item content">
								<div class="name">
									<span>设备数</span>
								</div>
								<div class="value">
									<span class="text_color_10">{{assetinfo.value1}}</span>
									<span class="unit">（个）</span>
								</div>
							</div>
						</div>
					</div>
					<div class="flex_item">
						<!-- 总利润 -->
						<div class="assetsinfo_item flex">
							<div class="icon text_color_13">
								<el-icon>
									<Sunny />
								</el-icon>
							</div>
							<div class="flex_item content">
								<div class="name">
									<span>路灯数</span>
								</div>
								<div class="value">
									<span class="text_color_13">{{assetinfo.value2}}</span>
									<span class="unit">（个）</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="flex" style="margin-top: 3vh;">
					<div class="flex_item">
						<!-- 总税收 -->
						<div class="assetsinfo_item flex">
							<div class="icon text_color_11">
								<el-icon>
									<Sunny />
								</el-icon>
							</div>
							<div class="flex_item content">
								<div class="name">
									<span>总能耗</span>
								</div>
								<div class="value">
									<span class="text_color_11">{{assetinfo.value3}}</span>
									<span class="unit">（kW·h）</span>
								</div>
							</div>
						</div>
					</div>
					<div class="flex_item">
						<!-- 总收入 -->
						<div class="assetsinfo_item flex">
							<div class="icon text_color_16">
								<el-icon>
									<Sunny />
								</el-icon>
							</div>
							<div class="flex_item content">
								<div class="name">
									<span>总时长</span>
								</div>
								<div class="value">
									<span class="text_color_16">{{assetinfo.value4}}</span>
									<span class="unit">（小时）</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</chartpanel>
			<!-- 照明设备类型统计 -->
			<chartpanel title="照明设备类型统计" style="height: 30vh;">
				<v-chart ref="typechart" style="min-height: 26vh;" :option="typechartoption"></v-chart>
			</chartpanel>
		</el-col>
	</el-row>
	<el-row :gutter="10" style="margin: 0;padding: 0;margin-top: 1vh;">
		<el-col :span="8">
			<!-- 照明设备实时统计 -->
			<chartpanel title="照明设备实时统计" style="height: 30vh;">
				<v-chart ref="curchart" style="min-height: 26vh;" :option="curchartoption"></v-chart>
			</chartpanel>
		</el-col>
		<el-col :span="8">
			<!-- 照明设备时长排行 -->
			<chartpanel title="照明设备时长走势" style="height: 30vh;">
				<v-chart ref="timechart" style="min-height: 26vh;" :option="timechartoption"></v-chart>
			</chartpanel>
		</el-col>
		<el-col :span="8">
			<!-- 照明设备能耗统计 -->
			<chartpanel title="照明设备能耗走势" style="height: 30vh;">
				<v-chart ref="energychart" style="min-height: 26vh;" :option="energychartoption"></v-chart>
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
	
	let mapchart = null;
	
	//照明设备基础情况概览
	let assetinfo = reactive({
		value1: (utils.random(1000) * 1).toFixed(2),
		value2: (utils.random(1000) * 1).toFixed(2),
		value3: (utils.random(1000) * 1).toFixed(2),
		value4: (utils.random(1000) * 1).toFixed(2)
	});
	
	//设备类型统计
	let typechart = ref();
	let typechartoption = reactive({});
	let typechartcategory = reactive(['声控灯','夜灯','地面夜灯','路灯','楼道灯']);
	let typechartvalues = reactive([]);
	
	//实时状况
	let curchart = ref();
	let curchartoption = reactive({});
	let curchartcategory = reactive(['开启','关闭','故障','告警']);
	let curchartvalues = reactive([]);
	
	//时长
	let timechart = ref();
	let timechartoption = reactive({});
	let timechartcategory = reactive([]);
	let timechartvalues = reactive([]);
	
	//能耗
	let energychart = ref();
	let energychartoption = reactive({});
	let energychartcategory = reactive([]);
	let energychartvalues = reactive([]);
	
	//初始化图标
	const initCharts = () => {
		mapchart = chartutils.initLightingMapChart('mapchart');
		
		typechartcategory.forEach((itme,index)=>{
			typechartvalues[index] = utils.random(1000);
		});
		chartutils.initPieFullChart(typechartoption,typechartcategory,typechartvalues);
		
		curchartcategory.forEach((itme,index)=>{
			curchartvalues[index] = utils.random(1000);
		});
		chartutils.initBarChart(curchartoption,curchartcategory,curchartvalues,'#0bfdab');
		
		let date = new Date();
		date.setDate(date.getDate()-15);
		for (let i = new Date(date.getTime()); i.getTime() < new Date().getTime(); i.setDate(i.getDate()+1)) {
			timechartcategory.push(i.format('MM-dd'));
			timechartvalues.push(utils.random(1000));
		}
		chartutils.initLineChart(timechartoption, timechartcategory, timechartvalues, '#00FAC1');
		
		date = new Date();
		date.setDate(date.getDate()-15);
		for (let i = new Date(date.getTime()); i.getTime() < new Date().getTime(); i.setDate(i.getDate()+1)) {
			energychartcategory.push(i.format('MM-dd'));
			energychartvalues.push(utils.random(1000));
		}
		chartutils.initLineChart(energychartoption, energychartcategory, energychartvalues, '#ff5353');
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
			assetinfo.value1 = (utils.random(1000) * 1).toFixed(2);
			assetinfo.value2 = (utils.random(1000) * 1).toFixed(2);
			assetinfo.value3 = (utils.random(1000) * 1).toFixed(2);
			assetinfo.value4 = (utils.random(1000) * 1).toFixed(2);
			
			typechartoption.series[0].data.forEach((item,index)=>{
				item.value = utils.random(1000);
			});
			
			curchartvalues.forEach((item,index)=>{
				curchartvalues[index] = utils.random(1000);
			})
			
			timechartvalues.forEach((item,index)=>{
				timechartvalues[index] = utils.random(1000);
			})
			
			energychartvalues.forEach((item,index)=>{
				energychartvalues[index] = utils.random(1000);
			})
		}, refreshtime);
	}
	
	//挂
	onMounted(() => {
		initCharts();
		startRefreshChart();
	
		//图表尺寸自适应
		window.onresize = () => {
			//地图
			mapchart && mapchart.resize();
			typechart && typechart.value.resize();
			curchart && curchart.value.resize();
			timechart && timechart.value.resize();
			energychart && energychart.value.resize();
		}
	});
	onBeforeUnmount(() => {
		timer && clearInterval(timer);
	});
</script>

<style scoped="scoped">
	.assetsinfo_item {
		width: 100%;
		margin: 0 auto;
	}
	
	.assetsinfo_item .icon {
		width: 25%;
		text-align: center;
		font-size: 3rem;
		color: #fff;
		background: #ffffff22;
		padding-top: 2vh;
		border-radius: 0.125rem;
		height: 6vh;
	}
	
	.assetsinfo_item .content {
		padding-left: 1vh;
	}
	
	.assetsinfo_item .name {
		text-align: center;
		font-size: 1.6rem;
	}
	
	.assetsinfo_item .value {
		text-align: center;
		font-size: 2.6rem;
	}
	
	.assetsinfo_item .unit {
		text-align: center;
		font-size: 1.4rem;
	}
</style>
