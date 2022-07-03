<template>
	<el-row :gutter="10" style="margin: 0;padding: 0;margin-top: 1vh;">
		<el-col :span="16">
			<!-- 天气信息 -->
			<chartpanel title="园区天气信息" style="height: 61.3vh;">
					<div style="margin-top: 1vh;">
					<div style="width:100%">
						<!-- 当前实时天气状况 -->
						<div class="curweater ">
							<div class=" flex infopanel">
								<div class="weater_icon text_color_13 ">
									<div><el-icon><Sunny /></el-icon></div>
									<div style="font-size: 1.8rem;">晴天</div>
								</div>
 								<div class="split_line_h" style="margin-right: 5vh;height:15vh"></div>
								<div class="desc flex_item">
									<div class="feild">温度：<span class="value text_color_14">23℃-35℃</span></div>
									<div class="feild">风向：<span class="value text_color_15">东南风</span></div>
									<div class="feild">风速：<span class="value text_color_10">1km/小时</span></div>
									<div class="feild">PM2.5：<span class="value text_color_11">20ug/m³</span></div>
									<div class="feild">空气质量：<span class="value text_color_13">较差</span></div>
								</div>
								<div class="address">
									<span class="from">数据来源：中国天气网</span>
									<span class="from">数据更新时间：</span>
									<span class="from">{{waterinfo.date}}</span>
								</div>
							</div>
						</div>
					</div>
					<div style="margin-top: 5vh;">
						<div class="flex">
							<div class="flex_item">
								<!-- 当前周的天气预报情况 -->
								<div class="wateritem">
									<div class="date">05-21 <span class="datevalue">星期一</span></div>
									<div class="flex">
										<div class="icon text_color_14">
											<div><el-icon><Pouring /></el-icon></div>
											<div class="info">中雨</div>
										</div>
										<div class="flex_item desc">
											<div class="feild">温度：<span class="value text_color_14">23℃-35℃</span></div>
											<div class="feild">风向：<span class="value text_color_15">东南风</span></div>
											<div class="feild">风速：<span class="value text_color_10">1km/小时</span></div>
											<div class="feild">PM2.5：<span class="value text_color_11">20ug/m³</span></div>
											<div class="feild">空气质量：<span class="value text_color_13">较差</span></div>
										</div>
									</div>
								</div>
							</div>
							<div class="split_line_h"></div>
							<div class="flex_item">
								<!-- 当前周的天气预报情况 -->
								<div class="wateritem">
									<div class="date">05-22 <span class="datevalue">星期二</span></div>
									<div class="flex">
										<div class="icon text_color_13">
											<div><el-icon><Sunny /></el-icon></div>
											<div class="info">晴天</div>
										</div>
										<div class="flex_item desc">
											<div class="feild">温度：<span class="value text_color_14">23℃-35℃</span></div>
											<div class="feild">风向：<span class="value text_color_15">东南风</span></div>
											<div class="feild">风速：<span class="value text_color_10">1km/小时</span></div>
											<div class="feild">PM2.5：<span class="value text_color_11">20ug/m³</span></div>
											<div class="feild">空气质量：<span class="value text_color_13">较差</span></div>
										</div>
									</div>
								</div>
							</div>
							<div class="split_line_h"></div>
							<div class="flex_item">
								<!-- 当前周的天气预报情况 -->
								<div class="wateritem">
									<div class="date">05-23 <span class="datevalue">星期三</span></div>
									<div class="flex">
										<div class="icon text_color_14">
											<div><el-icon><Pouring /></el-icon></div>
											<div class="info">下雨</div>
										</div>
										<div class="flex_item desc">
											<div class="feild">温度：<span class="value text_color_14">23℃-35℃</span></div>
											<div class="feild">风向：<span class="value text_color_15">东南风</span></div>
											<div class="feild">风速：<span class="value text_color_10">1km/小时</span></div>
											<div class="feild">PM2.5：<span class="value text_color_11">20ug/m³</span></div>
											<div class="feild">空气质量：<span class="value text_color_13">较差</span></div>
										</div>
									</div>
								</div>
							</div>
							<div class="split_line_h"></div>
							<div class="flex_item">
								<!-- 当前周的天气预报情况 -->
								<div class="wateritem">
									<div class="date">05-24 <span class="datevalue">星期四</span></div>
									<div class="flex">
										<div class="icon text_color_13">
											<div><el-icon><Sunny /></el-icon></div>
											<div class="info">晴天</div>
										</div>
										<div class="flex_item desc">
											<div class="feild">温度：<span class="value text_color_14">23℃-35℃</span></div>
											<div class="feild">风向：<span class="value text_color_15">东南风</span></div>
											<div class="feild">风速：<span class="value text_color_10">1km/小时</span></div>
											<div class="feild">PM2.5：<span class="value text_color_11">20ug/m³</span></div>
											<div class="feild">空气质量：<span class="value text_color_13">较差</span></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</chartpanel>
		</el-col>
		<el-col :span="8">
			<!-- 当前环境状况 -->
			<chartpanel title="当前环境状况" style="height: 30vh;margin-top: 1vh;">
				<!-- PM2.5 -->
				<!-- 噪音 -->
				<!-- 风速 -->
				<div class="table_">
					<div class="tr flex">
						<div class="th flex_item">检测点</div>
						<div class="th flex_item">温度（℃）</div>
						<div class="th flex_item">湿度（%）</div>
						<div class="th flex_item">PM2.5（ug/m³）</div>
						<div class="th flex_item">噪音（dB）</div>
						<div class="th flex_item">分速（m/s）</div>
					</div>
					<div class="tr flex" v-for="(item, index) in huanjingdatas" :key="index">
						<div class="td flex_item"><span class="value value1">{{item.name}}</span></div>
						<div class="td flex_item "><span class="value text_color_10">{{item.temp}}</span></div>
						<div class="td flex_item "><span class="value text_color_11">{{item.shidu}}</span></div>
						<div class="td flex_item "><span class="value text_color_12">{{item.pm}}</span></div>
						<div class="td flex_item "><span class="value text_color_13">{{item.zaoying}}</span></div>
						<div class="td flex_item "><span class="value text_color_14">{{item.fensu}}</span></div>
					</div>
				</div>
			</chartpanel>
			<!-- PM2.5走势 -->
			<chartpanel title="PM2.5统计" style="height: 30vh;">
				<v-chart ref="pmchart" style="min-height: 26vh;" :option="pmchartoption"></v-chart>
			</chartpanel>
		</el-col>
	</el-row>
	<el-row :gutter="10" style="margin: 0;padding: 0;margin-top: 1vh;">
		<el-col :span="8">
			<!-- 温度信息 -->
			<chartpanel title="温度信息" style="height: 30vh;">
				<v-chart ref="temperchart" style="min-height: 26vh;" :option="temperchartoption"></v-chart>
			</chartpanel>
		</el-col>
		<el-col :span="8">
			<!-- 湿度信息 -->
			<chartpanel title="湿度信息" style="height: 30vh;">
				<v-chart ref="shiduchart" style="min-height: 26vh;" :option="shiduchartoption"></v-chart>
			</chartpanel>
		</el-col>
		<el-col :span="8">
			<!-- 光照情况 -->
			<chartpanel title="光照情况" style="height: 30vh;">
				<v-chart ref="lintingchart" style="min-height: 26vh;" :option="lintingchartoption"></v-chart>
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
	
	//天气信息
	let waterinfo = reactive({
		date:new Date().format('yyyy-MM-dd hh:mm')
	})
	
	//环境质量监控
	let huanjingdatas = reactive([{
		name: '检测点1',
		temp: utils.random(100),
		shidu: utils.random(100),
		pm: utils.random(100),
		zaoying: utils.random(100),
		fensu: utils.random(100)
	}, {
		name: '检测点2',
		temp: utils.random(100),
		shidu: utils.random(100),
		pm: utils.random(100),
		zaoying: utils.random(100),
		fensu: utils.random(100)
	}, {
		name: '检测点3',
		temp: utils.random(100),
		shidu: utils.random(100),
		pm: utils.random(100),
		zaoying: utils.random(100),
		fensu: utils.random(100)
	}, {
		name: '检测点4',
		temp: utils.random(100),
		shidu: utils.random(100),
		pm: utils.random(100),
		zaoying: utils.random(100),
		fensu: utils.random(100)
	}, {
		name: '检测点5',
		temp: utils.random(100),
		shidu: utils.random(100),
		pm: utils.random(100),
		zaoying: utils.random(100),
		fensu: utils.random(100)
	}, {
		name: '检测点6',
		temp: utils.random(100),
		shidu: utils.random(100),
		pm: utils.random(100),
		zaoying: utils.random(100),
		fensu: utils.random(100)
	}, {
		name: '检测点7',
		temp: utils.random(100),
		shidu: utils.random(100),
		pm: utils.random(100),
		zaoying: utils.random(100),
		fensu: utils.random(100)
	}]);
	
	//PM2.5数据统计
	let pmchart = ref();
	let pmchartoption = reactive({});
	let pmcharttime = reactive([]);
	let pmchartvalues = reactive([]);
	
	//温度走势
	let temperchart = ref();
	let temperchartoption = reactive({});
	let tempercharttime = reactive([]);
	let temperchartvalues = reactive([]);
	
	//湿度走势
	let shiduchart = ref();
	let shiduchartoption = reactive({});
	let shiducharttime = reactive([]);
	let shiduchartvalues = reactive([]);
	
	//光照走势
	let lintingchart = ref();
	let lintingchartoption = reactive({});
	let lintingcharttime = reactive([]);
	let lintingchartvalues = reactive([]);
		
	//初始化图标
	const initCharts = () => {
		let date = new Date();
		date.setHours(date.getHours()-12)
		for (let i = new Date(date.getTime()); i.getTime() < new Date().getTime(); i.setHours(i.getHours()+1)) {
			pmcharttime.push(i.format('MM-dd'));
			pmchartvalues.push(utils.random(50));
		}
		chartutils.initBarChart(pmchartoption, pmcharttime, pmchartvalues, '#00FAC1');
		
		 date = new Date();
		date.setHours(date.getHours()-12)
		for (let i = new Date(date.getTime()); i.getTime() < new Date().getTime(); i.setHours(i.getHours()+1)) {
			tempercharttime.push(i.format('MM-dd'));
			temperchartvalues.push(utils.random(1000));
		}
		chartutils.initLineChart(temperchartoption, tempercharttime, temperchartvalues, '#FDE056');
		
		date = new Date();
		date.setHours(date.getHours()-12)
		for (let i = new Date(date.getTime()); i.getTime() < new Date().getTime(); i.setHours(i.getHours()+1)) {
			shiducharttime.push(i.format('MM-dd'));
			shiduchartvalues.push(utils.random(1000));
		}
		chartutils.initLineChart(shiduchartoption, shiducharttime, shiduchartvalues, '#00FAC1');
		
		date = new Date();
		date.setHours(date.getHours()-12)
		for (let i = new Date(date.getTime()); i.getTime() < new Date().getTime(); i.setHours(i.getHours()+1)) {
			lintingcharttime.push(i.format('MM-dd'));
			lintingchartvalues.push(utils.random(1000));
		}
		chartutils.initLineChart(lintingchartoption, lintingcharttime, lintingchartvalues, '#ff5353');
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
			pmchartvalues.forEach((item,index)=>{
				pmchartvalues[index] = utils.random(1000);
			})
			temperchartvalues.forEach((item,index)=>{
				temperchartvalues[index] = utils.random(1000);
			})
			shiduchartvalues.forEach((item,index)=>{
				shiduchartvalues[index] = utils.random(1000);
			})
			lintingchartvalues.forEach((item,index)=>{
				lintingchartvalues[index] = utils.random(1000);
			})
		}, refreshtime);
	}
	
	//挂
	onMounted(() => {
		initCharts();
		startRefreshChart();
	
		//图表尺寸自适应
		window.onresize = () => {
			pmchart && pmchart.value.resize();
			temperchart && temperchart.value.resize();
			shiduchart && shiduchart.value.resize();
			lintingchart && lintingchart.value.resize();
		}
	});
	onBeforeUnmount(() => {
		timer && clearInterval(timer);
	});
	
</script>

<style scoped="scoped">
	.curweater{
		width: 80%;
		margin:0 auto;
	}
	.curweater .address{
		font-size: 2rem;
		line-height: 4vh;
		text-align: right;
		margin-top: 11.5vh;
	}
	.curweater .from{
		font-size: 1.4rem;
		line-height: 4vh;
		margin-left: 1vh;
		color: #666;
	}
	.curweater .weater_icon{
		width: 20%;
		text-align: center;
		font-size:8rem;
	}
	.curweater .infopanel{
		width: 80%;
		margin:0 auto;
	}
	.curweater .feild{
		font-size: 1.6rem;
		line-height: 3vh;
		color:#ddd
	}
	.curweater .feild .value{
		font-size: 1.6rem;
		line-height: 3vh;
		padding-left: 1vh;
	}
	
	.wateritem{
		width: 90%;
		margin:0 auto;
	}
	.wateritem .date{
		font-size: 2.4rem;
		line-height: 4vh;
		color: #eee;
		text-align: center;
	}	
	.wateritem .date .datevalue{
		font-size: 2rem;
		padding-left: 1vh;
	}
	.wateritem .icon{
		width: 30%;
		text-align: center;
		font-size:5rem;
		margin-top: 3vh;
	}	
	.wateritem .icon .info{
		font-size:1.8rem;
	}
	.wateritem .feild{
		font-size: 1.6rem;
		line-height: 3vh;
	}
	.split_line_h{
		height: 20vh;
	}
	
	
</style>
