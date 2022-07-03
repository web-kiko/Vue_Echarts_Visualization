<template>
	<el-row :gutter="10" style="margin: 0;padding: 0;margin-top: 1vh;">
		<el-col :span="24">
			<!-- 园区能耗总览 -->
			<chartpanel title="" style="height: 10vh;">
				<!-- 本月用电 -->
				<!-- 今日用电 -->
				<!-- 昨日用电 -->
				<!-- 用电环比 -->
				<!-- 今日用水 -->
				<!-- 用水环比 -->
				<div class="flex">
					<div class="flex_item">
						<div class="item flex">
							<div class="icon ">
								<el-icon><Sunny /></el-icon>
							</div>
							<div class="flex_item">
								<div class="value text_color_10">{{baseinfo.value1}}<span class="unit">kw·h</span></div>
								<div class="name">本月用电</div>
							</div>
						</div>
					</div>
					<div class="split_line_h"></div>
					<div class="flex_item">
						<div class="item flex">
							<div class="icon">
								<el-icon><Sunny /></el-icon>
							</div>
							<div class="flex_item">
								<div class="value text_color_11">{{baseinfo.value2}}<span class="unit">kw·h</span></div>
								<div class="name">今日用电</div>
							</div>
						</div>
					</div>
					<div class="split_line_h"></div>
					<div class="flex_item">
						<div class="item flex">
							<div class="icon">
								<el-icon><Sunny /></el-icon>
							</div>
							<div class="flex_item">
								<div class="value text_color_12">{{baseinfo.value3}}<span class="unit">kw·h</span></div>
								<div class="name">昨日用电</div>
							</div>
						</div>
					</div>
					<div class="split_line_h"></div>
					<div class="flex_item">
						<div class="item flex">
							<div class="icon">
								<el-icon><Sunny /></el-icon>
							</div>
							<div class="flex_item">
								<div class="value text_color_13">{{baseinfo.value4}}<span class="unit">上升</span></div>
								<div class="name">用电环比</div>
							</div>
						</div>
					</div>
					<div class="split_line_h"></div>
					<div class="flex_item">
						<div class="item flex">
							<div class="icon">
								<el-icon><Pouring /></el-icon>
							</div>
							<div class="flex_item">
								<div class="value text_color_14">{{baseinfo.value5}}<span class="unit">吨</span></div>
								<div class="name">今日用水</div>
							</div>
						</div>
					</div>
					<div class="split_line_h"></div>
					<div class="flex_item">
						<div class="item flex">
							<div class="icon">
								<el-icon><Pouring /></el-icon>
							</div>
							<div class="flex_item">
								<div class="value text_color_14">{{baseinfo.value6}}<span class="unit">下降</span></div>
								<div class="name">用水环比</div>
							</div>
						</div>
					</div>
				</div> 
			</chartpanel>
		</el-col>
	</el-row>
	<el-row :gutter="10" style="margin: 0;padding: 0;margin-top: 1vh;">
		<el-col :span="8">
			<!-- 今日用电概况 -->
			<chartpanel title="今日用电概况" style="height: 40vh;">
				<!-- 总用电量 -->
				<!-- 总用水量 -->
				<v-chart ref="todayallchart" style="min-height: 34vh;" :option="todayallchartoption"></v-chart>
			</chartpanel>
		</el-col>
		<el-col :span="8">
			<!-- 今日用电动态 -->
			<chartpanel title="今日用电动态" style="height: 40vh;">
				<v-chart ref="todaychart" style="min-height: 34vh;" :option="todaychartoption"></v-chart>
			</chartpanel>
		</el-col>
		<el-col :span="8">
			<!-- 今日分区能耗 -->
			<chartpanel title="今日分区能耗" style="height: 40vh;">
				<div class="flex" style="margin-top: 5vh;">
					<div class="flex_item">
						<div class="area_item ">
							<div class="value text_color_16">{{areainfo.value1}}<span class='unit'>kw·h</span></div>
							<div class="name">A栋</div>
						</div>
					</div>
					<div class="split_line_h"></div>
					<div class="flex_item">
						<div class="area_item">
							<div class="value text_color_15">{{areainfo.value2}}<span class='unit'>kw·h</span></div>
							<div class="name">B栋</div>
						</div>
					</div>
					<div class="split_line_h"></div>
					<div class="flex_item">
						<div class="area_item">
							<div class="value text_color_14">{{areainfo.value3}}<span class='unit'>kw·h</span></div>
							<div class="name">C栋</div>
						</div>
					</div>
				</div>
				<div class="flex" style="margin-top: 5vh;">
					<div class="flex_item">
						<div class="area_item">
							<div class="value text_color_13">{{areainfo.value4}}<span class='unit'>kw·h</span></div>
							<div class="name">D栋</div>
						</div>
					</div>
					<div class="split_line_h"></div>
					<div class="flex_item">
						<div class="area_item">
							<div class="value text_color_12">{{areainfo.value5}}<span class='unit'>kw·h</span></div>
							<div class="name">E栋</div>
						</div>
					</div>
					<div class="split_line_h"></div>
					<div class="flex_item">
						<div class="area_item text_color_11">
							<div class="value">{{areainfo.value6}}<span class='unit'>kw·h</span></div>
							<div class="name">F栋</div>
						</div>
					</div>
				</div>
			</chartpanel>
		</el-col>
	</el-row>
	<el-row :gutter="10" style="margin: 0;padding: 0;margin-top: 1vh;">
		<el-col :span="8">
			<!-- 园区耗能走势 -->
			<chartpanel title="园区耗能走势" style="height: 40vh;">
				<v-chart ref="datechart" style="min-height: 34vh;" :option="datechartoption"></v-chart>
			</chartpanel>
		</el-col>
		<el-col :span="8">
			<!-- 用电时段统计 -->
			<chartpanel title="用电时段统计" style="height: 40vh;">
				<v-chart ref="timechart" style="min-height: 34vh;" :option="timechartoption"></v-chart>
			</chartpanel>
		</el-col>
		<el-col :span="8">
			<!-- 设备用电占比 -->
			<chartpanel title="设备用电占比" style="height: 40vh;">
				<v-chart ref="devicechart" style="min-height: 34vh;" :option="devicechartoption"></v-chart>
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
	
	//概览数据
	const baseinfo = reactive({
		value1:utils.random(1000),
		value2:utils.random(1000),
		value3:utils.random(1000),
		value4:utils.random(100),
		value5:utils.random(1000),
		value6:utils.random(100)
	})
	
	//分区使用数据
	const areainfo = reactive({
		value1:utils.random(1000),
		value2:utils.random(1000),
		value3:utils.random(1000),
		value4:utils.random(1000),
		value5:utils.random(1000),
		value6:utils.random(1000)
	})
	
	//用电概况
	let todayallchart = ref();
	let todayallchartoption = reactive({});
	let todayallchartcategory = reactive(['今日用电量','今日用水量']);
	let todayallchartvalue = reactive([utils.random(100),utils.random(100)]);
	
	//今日用电动态
	let todaychart = ref();
	let todaychartoption = reactive({});
	let todaychartcategory = reactive([]);
	let todaychartvalues = reactive([]);
	
	//用电走势
	let datechart = ref(); 
	let datechartoption = reactive({});
	let datechartcategory = reactive([]);
	let datechartvalues = reactive([]);
	//时段走势
	let timechart  = ref(); 
	let timechartoption = reactive({});
	let timechartcategory = reactive([]);
	let timechartvalues = reactive([]);
	//设备用电
	let devicechart = ref(); 
	let devicechartoption = reactive({});
	let devicechartcategory = reactive(['照明设备','安防设备','通讯设备','电脑设备','门禁设备','其它设备']);
	let devicechartvalues = reactive([]);
	
	//初始化图标
	const initCharts = () => {
		initTodayallchart();
		
		let date = new Date();
		date.setHours(0);
		for (let i = new Date(date.getTime()); i.getTime() < new Date().getTime(); i.setHours(i.getHours()+1)) {
			todaychartcategory.push(i.format('hh:mm'));
			todaychartvalues.push(utils.random(1000));
		}
		chartutils.initLineChart(todaychartoption, todaychartcategory, todaychartvalues, '#00FAC1');
		
		date = new Date();
		date.setDate(date.getDate()-10);
		for (let i = new Date(date.getTime()); i.getTime() < new Date().getTime(); i.setDate(i.getDate()+1)) {
			datechartcategory.push(i.format('MM:dd'));
			datechartvalues.push(utils.random(1000));
		}
		chartutils.initLineChart(datechartoption, datechartcategory, datechartvalues, '#FF5722');
		
		date = new Date();
		date.setHours(date.getHours()-24);
		for (let i = new Date(date.getTime()); i.getTime() < new Date().getTime(); i.setHours(i.getHours()+1)) {
			timechartcategory.push(i.format('hh:mm'));
			timechartvalues.push(utils.random(1000));
		}
		chartutils.initLineChart(timechartoption, timechartcategory, timechartvalues, '#00CAFF');
		
		devicechartcategory.forEach((item,index)=>{
			devicechartvalues.push(utils.random(1000));
		})
		chartutils.initBarChart(devicechartoption, devicechartcategory, devicechartvalues, '#ff5353');
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
			baseinfo.value1 = utils.random(1000);
			baseinfo.value2 = utils.random(1000);
			baseinfo.value3 = utils.random(1000);
			baseinfo.value4 = utils.random(100);
			baseinfo.value5 = utils.random(1000);
			baseinfo.value6 = utils.random(100);
			
			//分区使用数据
			areainfo.value1 = utils.random(1000),
			areainfo.value2 = utils.random(1000);
			areainfo.value3 = utils.random(1000);
			areainfo.value4 = utils.random(1000);
			areainfo.value5 = utils.random(1000);
			areainfo.value6 = utils.random(1000);
			
			todaychartvalues.forEach((item,index)=>{
				todaychartvalues[index] = utils.random(1000);
			})
			
			todayallchartvalue[0] = utils.random(100);
			todayallchartvalue[1] = utils.random(100);
			
			todayallchartoption.title[0].text = todayallchartvalue[0]+"kw·h";
			todayallchartoption.title[2].text = todayallchartvalue[1]+"t";
			
			todayallchartoption.series[0].data = todayallchartvalue[0];
			todayallchartoption.series[1].data = todayallchartvalue[1];
			
			datechartvalues.forEach((item,index)=>{
				datechartvalues[index] = utils.random(1000);
			})
			timechartvalues.forEach((item,index)=>{
				timechartvalues[index] = utils.random(1000);
			})
			devicechartvalues.forEach((item,index)=>{
				devicechartvalues[index] = utils.random(1000);
			})
		}, refreshtime);
	}
	
	//挂
	onMounted(() => {
		initCharts();
		startRefreshChart();
	
		//图表尺寸自适应
		window.onresize = () => {
			todaychart && todaychart.value.resize();
			todayallchart && todayallchart.value.resize();
			datechart && datechart.value.resize();
			timechart && timechart.value.resize();
			devicechart && devicechart.value.resize();
		}
	});
	onBeforeUnmount(() => {
		timer && clearInterval(timer);
	});
	
	const initTodayallchart = ()=>{
		let option_ = {
			title:[{
				text:todayallchartvalue[0]+"kw·h",
				top:'43%',
				left:'20%',
				textStyle:{
					color:'#ddd',
					align:'center',
					fontSize:'1.8rem',
					fontWeight:'normal'
				}
			},{
				text:todayallchartcategory[0],
				top:'53%',
				left:'16.5%',
				textStyle:{
					color:'#ddd',
					align:'center',
					fontSize:'2rem',
					fontWeight:'normal'
				}
			},{
				text:todayallchartvalue[1]+"t",
				top:'43%',
				left:'72.5%',
				textStyle:{
					color:'#ddd',
					align:'center',
					fontSize:'1.8rem',
					fontWeight:'normal'
				}
			},{
				text:todayallchartcategory[1],
				top:'53%',
				left:'66.5%',
				textStyle:{
					color:'#ddd',
					align:'center',
					fontSize:'2rem',
					fontWeight:'normal'
				}
			}],
			color:config.colors,
			xAxis:{
				show:false
			},
			yAxis:{
				show:false
			},
			series: [{
				name: todayallchartcategory[0],
				type: 'pie',
				center:['25%','50%'],
				radius: ['65%', '55%'],
				avoidLabelOverlap: true,
				itemStyle: {
					borderRadius: 15,
					borderColor: 'rgba(200,200,200,0.3)',
					borderWidth: 0,
					shadowColor: 'rgba(200, 200, 200, 0.5)',
					shadowBlur: 5
				},
				labelLine:{
					show:false
				},
				data: todayallchartvalue[0]
			},{
				name: todayallchartcategory[1],
				type: 'pie',
				center:['75%','50%'],
				radius: ['65%', '55%'],
				avoidLabelOverlap: true,
				itemStyle: {
					borderRadius: 15,
					borderColor: 'rgba(200,200,200,0.3)',
					borderWidth: 0,
					shadowColor: 'rgba(200, 200, 200, 0.5)',
					shadowBlur: 5
				},
				labelLine:{
					show:false
				},
				data: todayallchartvalue[1]
			}]
		};
		for (let key in option_) {
			todayallchartoption[key] = option_[key];
		}
	}
</script>

<style scoped="scoped">
	.item{
		width: 70%;
		margin: 0 auto;
	}
	.item .icon{
		width: 3vw;
		height: 6vh;
		line-height: 6.5vh;
		text-align: center;
		font-size: 3rem;
		margin-top: 2vh;
		background: #00D4AD55;
		margin-right: 2vh;
		border-radius: 0.0625rem;
	}
	.item .value{
		font-size: 3rem;
		line-height: 3vh;
		padding-top: 2vh;
	}
	.item .value .unit{
		font-size: 1.4rem;
		margin-left: 0.625rem;
	}
	.item .name{
		font-size: 1.6rem;
		line-height: 3vh;
		color: #ddd;
	}
	.split_line_h{
		height: 10vh;
	}
	
	.area_item{
		width: 60%;
		margin: 0 auto;
		padding-top: 1.5vh;
	}
	.area_item .value{
		font-size: 3rem;
		line-height: 4vh;
	}
	.area_item .value .unit{
		font-size: 1.4rem;
		margin-left: 0.625rem;
	}
	.area_item .name{
		font-size: 2rem;
		line-height: 4vh;
		color: #ddd;
	}
</style>
