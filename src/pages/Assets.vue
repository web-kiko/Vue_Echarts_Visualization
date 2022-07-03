<template>
	<el-row :gutter="10" style="margin: 0;padding: 0;margin-top: 1vh;">
		<el-col :span="6">
			<!-- 资产情况概览 -->
			<chartpanel title="资产情况概览" style="height: 30vh;">
				<div class="flex" style="margin-top: 4vh;">
					<div class="flex_item">
						<!-- 总资产 -->
						<div class="assetsinfo_item flex">
							<div class="icon text_color_10">
								<el-icon>
									<ShoppingCart />
								</el-icon>
							</div>
							<div class="flex_item content">
								<div class="name">
									<span>总资产</span>
									<span class="tonbi text_color_12">
										<el-icon>
											<Top />
										</el-icon>
									</span>
								</div>
								<div class="value">
									<span class="text_color_10">{{assetinfo.value1}}</span>
									<span class="unit">（万亿）</span>
								</div>
							</div>
						</div>
					</div>
					<div class="flex_item">
						<!-- 总利润 -->
						<div class="assetsinfo_item flex">
							<div class="icon text_color_13">
								<el-icon>
									<ShoppingCart />
								</el-icon>
							</div>
							<div class="flex_item content">
								<div class="name">
									<span>总利润</span>
									<span class="tonbi text_color_13">
										<el-icon>
											<Bottom />
										</el-icon>
									</span>
								</div>
								<div class="value">
									<span class="text_color_13">{{assetinfo.value2}}</span>
									<span class="unit">（万亿）</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="flex" style="margin-top: 4vh;">
					<div class="flex_item">
						<!-- 总税收 -->
						<div class="assetsinfo_item flex">
							<div class="icon text_color_11">
								<el-icon>
									<ShoppingCart />
								</el-icon>
							</div>
							<div class="flex_item content">
								<div class="name">
									<span>总税收</span>
									<span class="tonbi text_color_13">
										<el-icon>
											<Bottom />
										</el-icon>
									</span>
								</div>
								<div class="value">
									<span class="text_color_11">{{assetinfo.value3}}</span>
									<span class="unit">（万亿）</span>
								</div>
							</div>
						</div>
					</div>
					<div class="flex_item">
						<!-- 总收入 -->
						<div class="assetsinfo_item flex">
							<div class="icon text_color_16">
								<el-icon>
									<ShoppingCart />
								</el-icon>
							</div>
							<div class="flex_item content">
								<div class="name">
									<span>总税收</span>
									<span class="tonbi text_color_13">
										<el-icon>
											<Bottom />
										</el-icon>
									</span>
								</div>
								<div class="value">
									<span class="text_color_16">{{assetinfo.value4}}</span>
									<span class="unit">（万亿）</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</chartpanel>
			<!-- 资产类型统计 -->
			<chartpanel title="资产类型统计" style="height: 30vh;margin-top: 1vh;">
				<v-chart ref="assetscaetgorychart" style="height:26vh" :option="assetscaetgorychartoption" />
			</chartpanel>
		</el-col>
		<el-col :span="12">
			<!-- 基础设施分布 -->
			<chartpanel title="" style="height: 61vh;position: relative;">
				<div style="position: absolute;left:0;top:0;width:100%;height: 61vh;">
					<div id="mapchart" style="position: relative;height: 61vh;"></div>
					<div class="chart_title" style="position: absolute;left:0;top:0;width:100%;text-align: center;">
						基础设施分布</div>
				</div>
			</chartpanel>
		</el-col>
		<el-col :span="6">
			<!-- 资产风险评估 -->
			<chartpanel title="资产风险评估" style="height: 30vh;margin-top: 1vh;">
				<v-chart ref="dangerchart" style="min-height: 26vh;" :option="dangerchartoption"></v-chart>
			</chartpanel>
			<!-- 园区营收走势 -->
			<chartpanel title="园区营收走势" style="height: 30vh;">
				<v-chart ref="costchart" style="min-height: 26vh;" :option="costchartoption"></v-chart>
			</chartpanel>
		</el-col>
	</el-row>
	<el-row :gutter="10" style="margin: 0;padding: 0;margin-top: 1vh;">
		<el-col :span="6">
			<!-- 固定资产分布 -->
			<chartpanel title="固定资产分布" style="height: 30vh;">
				<v-chart ref="fixedchart" style="min-height: 26vh;" :option="fixedchartoption"></v-chart>
			</chartpanel>
		</el-col>
		<el-col :span="6">
			<!-- 资产状态统计 -->
			<chartpanel title="资产状态统计" style="height: 30vh;">
				<v-chart ref="statuschart" style="height:26vh" :option="statuschartoption"></v-chart>
			</chartpanel>
		</el-col>
		<el-col :span="6">
			<!-- 园区产业分布 -->
			<chartpanel title="园区产业分布" style="height: 30vh;">
				<v-chart ref="industrychart" style="min-height: 26vh;" :option="industrychartoption"></v-chart>
			</chartpanel>
		</el-col>
		<el-col :span="6">
			<!-- 企业规模统计 -->
			<chartpanel title="企业规模统计" style="height: 30vh;">
				<v-chart ref="sizechart" style="min-height: 26vh;" :option="sizechartoption"></v-chart>
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

	//资产概览数据
	let assetinfo = reactive({
		value1: (utils.random(1000) * 1).toFixed(2),
		value2: (utils.random(1000) * 1).toFixed(2),
		value3: (utils.random(1000) * 1).toFixed(2),
		value4: (utils.random(1000) * 1).toFixed(2)
	});

	//资产类型统计图表
	let assetscaetgorychart = ref();
	let assetscaetgorychartoption = reactive({});
	let assetscaetgorychartcategory = reactive([{
			percentage: (utils.random(100) * 1).toFixed(2),
			name: "固定资产",
			value: utils.random(100)
		},
		{
			percentage: (utils.random(100) * 1).toFixed(2),
			name: "虚拟资产",
			value: utils.random(100)
		},
		{
			percentage: (utils.random(100) * 1).toFixed(2),
			name: "知识资产",
			value: utils.random(100)
		},
		{
			percentage: (utils.random(100) * 1).toFixed(2),
			name: "人力资产",
			value: utils.random(100)
		},
		{
			percentage: (utils.random(100) * 1).toFixed(2),
			name: "硬件资产",
			value: utils.random(100)
		},
		{
			percentage: (utils.random(100) * 1).toFixed(2),
			name: "软件资产",
			value: utils.random(100)
		}
	]);

	//地图
	let mapchart = null;

	//资产状态统计
	let statuschart = ref();
	let statuschartoption = reactive({});
	let statuschartcategory = reactive(['新增资产', '未识别资产', '流失资产', '高风险资产']);
	let statuschartvalue = reactive([]);

	//资产风险统计
	let dangerchart = ref();
	let dangerchartoption = reactive({});
	let dangerchartcategory = reactive(['固定资产', '虚拟资产', '知识资产', '人力资产', '硬件资产', '软件资产']);
	let dangerchartvalue = reactive([]);

//固定资产图表
	let fixedchart = ref();
	let fixedchartoption = reactive({});
	let fixedchartcategory = reactive(['建筑','办公设备','安防设备','消防设备','通讯设备','娱乐设备']);
	let fixedchartvalue = reactive([]);
	
	//园区营收走势图表
	let costchart = ref();
	let costchartoption = reactive({});
	let costcharttime = reactive([]);
	let costchartvalue = reactive([]);
	
	//园区产业分布图表
	let industrychart = ref();
	let industrychartoption = reactive({});
	let industrychartcategory = reactive(['制造业','互联网','人工智能','软件服务','网络服务']);
	let industrychartvalue = reactive([]);
	
	//企业规模分布图表
	let sizechart = ref();
	let sizechartoption = reactive({});
	let sizechartcategory = reactive(['微型企业','小型企业','中型企业','大型企业']);
	let sizechartvalue = reactive([]);

	//初始化图标
	const initCharts = () => {
		initassetscaetgorychart();

		chartutils.initMapChart('mapchart');

		//资产状态图表生成
		statuschartcategory.forEach((item, index) => {
			statuschartvalue.push(utils.random(1000));
		});
		chartutils.initBarChart(statuschartoption, statuschartcategory, statuschartvalue, '#FF5722', null);

		//初始化风险图表
		initdangerchart();
		
		//初始化固定资产图表
		fixedchartcategory.forEach((item, index) => {
			fixedchartvalue.push(utils.random(1000));
		});
		chartutils.initBarChart(fixedchartoption, fixedchartcategory, fixedchartvalue, '#6648FF', null);
		
		//初始化园区营收走势图表
		let date = new Date();
		date.setMonth(date.getMonth()-12);
		for (let i = new Date(date.getTime()); i.getTime() < new Date().getTime(); i.setMonth(i.getMonth()+1)) {
			costcharttime.push(i.format('MM-dd'));
			costchartvalue.push(utils.random(1000));
		}
		// initLineChart: function(option, category, values, color)
		chartutils.initLineChart(costchartoption,costcharttime,costchartvalue,'#ff72cb');
		
		//资产状态图表生成
		industrychartcategory.forEach((item, index) => {
			industrychartvalue.push(utils.random(1000));
		});
		chartutils.initBarChart(industrychartoption, industrychartcategory, industrychartvalue, '#00CAFF', null);
		
		//企业规模图表生成
		sizechartcategory.forEach((item, index) => {
			sizechartvalue.push(utils.random(1000));
		});
		chartutils.initBarChart(sizechartoption, sizechartcategory, sizechartvalue, '#ff5353', null);
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
			
			assetscaetgorychartcategory.forEach((item,index)=>{
				item.percentage=(utils.random(100) * 1).toFixed(2);
				item.value=utils.random(100);
			});
			let j=0;
			for (let i = 0; i < assetscaetgorychartcategory.length*2; i+=2) {
				assetscaetgorychartoption.series[0].data[i].value = assetscaetgorychartcategory[j].value;
				assetscaetgorychartoption.series[0].data[i].name = assetscaetgorychartcategory[j].name + '\t\t\t' + assetscaetgorychartcategory[j].value +
					'个' + '\t\t\t' + assetscaetgorychartcategory[j].percentage + '%';
				j++;
			}
			assetscaetgorychartoption.legend[0].data.forEach((item,index)=>{
				assetscaetgorychartoption.legend[0].data[index] = assetscaetgorychartcategory[index].name + '\t\t\t' + assetscaetgorychartcategory[index].value + '个' + '\t\t\t' + assetscaetgorychartcategory[index].percentage + '%'
			});
			
			//资产状态统计
			statuschartvalue.forEach((item,index)=>{
				statuschartvalue[index] = utils.random(1000);
			})
		
			//资产风险统计
			dangerchartoption.series.forEach((item, index) => {
				let values = item.data;
				for (let i = 0; i < 5; i++) {
					values[i][0] = utils.random(100)*1;
				}
				item.data = values;
			});
		
			//固定资产图表
			fixedchartvalue.forEach((item,index)=>{
				fixedchartvalue[index] = utils.random(1000);
			})
			
			//园区营收走势图表
			costchartvalue.forEach((item,index)=>{
				costchartvalue[index] = utils.random(1000);
			})
			
			//园区产业分布图表
			industrychartvalue.forEach((item,index)=>{
				industrychartvalue[index] = utils.random(1000);
			})
			
			//企业规模分布图表
			sizechartvalue.forEach((item,index)=>{
				sizechartvalue[index] = utils.random(1000);
			})
		}, refreshtime);
	}

	//挂
	onMounted(() => {
		initCharts();
		startRefreshChart();

		//图表尺寸自适应
		window.onresize = () => {
			//资产类型统计图表
			assetscaetgorychart && assetscaetgorychart.value.resize();

			//地图
			mapchart && mapchart.resize();

			//资产状态统计
			statuschart && statuschart.value.resize();

			//资产风险统计
			dangerchart && dangerchart.value.resize();

			//固定资产图表
			fixedchart && fixedchart.value.resize();
			
			//园区营收走势图表
			costchart && costchart.value.resize();
			
			//园区产业分布图表
			industrychart && industrychart.value.resize();
			
			//企业规模分布图表
			sizechart && sizechart.value.resize();
		}
	});
	onBeforeUnmount(() => {
		timer && clearInterval(timer);
	});

	//初始化资产类型分布图表
	const initassetscaetgorychart = () => {
		let nameArray = assetscaetgorychartcategory.map(item => {
			return item.name + '\t\t\t' + item.value + '个' + '\t\t\t' + item.percentage + '%'
		})
		let data = [];
		for (let i = 0; i < assetscaetgorychartcategory.length; i++) {
			data.push({
				value: assetscaetgorychartcategory[i].value,
				name: assetscaetgorychartcategory[i].name + '\t\t\t' + assetscaetgorychartcategory[i].value +
					'个' + '\t\t\t' + assetscaetgorychartcategory[i].percentage + '%',
				itemStyle: {
					normal: {
						borderWidth: 1,
						shadowBlur: 5,
						borderRadius: 30,
						borderColor: config.colors[i % config.colors.length],
						shadowColor: config.colors[i % config.colors.length]
					}
				}
			}, {
				value: 1,
				name: '',
				itemStyle: {
					normal: {
						label: {
							show: false
						},
						labelLine: {
							show: false
						},
						color: 'rgba(0, 0, 0, 0)',
						borderColor: 'rgba(0, 0, 0, 0)',
						borderWidth: 0
					}
				}
			});
		}
		let option = {
			color: config.colors,
			tooltip: {
				show: false
			},
			title: {
				text: '资 产 类 型 统 计',
				left: '11%',
				top: 'center',
				textStyle: {
					color: '#ffffff',
					fontWeight: '100',
					fontSize: "1.8rem",
				}
			},
			legend: [{
				orient: 'vertical',
				data: nameArray,
				left: 'right',
				top: 'center',
				align: 'left',
				itemGap: 10,
				textStyle: {
					color: '#4adeca',
					fontSize: "1.4rem",
				},
				//图例标记的图形高度
				itemHeight: 10,
				//图例标记的图形宽度
				itemWidth: 10
			}],
			toolbox: {
				show: false
			},
			series: [{
				name: '',
				type: 'pie',
				clockWise: false,
				radius: ['130%', '165%'],
				width: "55%",
				height: "55%",
				hoverAnimation: false,
				center: ['50%', '50%'],
				top: "center",
				itemStyle: {
					normal: {
						label: {
							show: false
						}
					}
				},
				data: data
			}]
		};
		for (let key in option) {
			assetscaetgorychartoption[key] = option[key];
		}
	}

	//初始化风险指数图表
	const initdangerchart = () => {
		let dangerchartcategory = reactive(['新增资产', '未识别资产', '流失资产', '高风险资产']);
		let dangerchartvalue = reactive([]);

		let series = [];
		dangerchartcategory.forEach((item, index) => {
			dangerchartvalue.push([])
			for (let i = 0; i < 5; i++) {
				dangerchartvalue[index].push([utils.random(100)*1, i + 1]);
			}
			series.push({
				name: item,
				data: dangerchartvalue[index],
				type: 'effectScatter',
				symbolSize: function(data) {
					return data[0]%30;
				},
				label: {
					show: true,
					formatter: function(param) {
						return param.data[0];
					},
					color: "#fff",
					textStyle: {
						fontSize: "1.2rem"
					},
					position: 'inside'
				},
				emphasis: {
					focus: 'series',
					label: {
						show: true,
						formatter: function(param) {
							return param.data[0];
						},
						position: 'inside'
					}
				},
				itemStyle: {
					shadowBlur: 10,
					shadowColor: config.colors[index]+"66",
					shadowOffsetY: 5,
					color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
							offset: 0,
							color: config.colors[index],
						},
						{
							offset: 1,
							color: config.colors[index],
						}
					])
				}
			});
		});


		let option = {
			grid: {
				left: '10%',
				right: '3%',
				top: '5%',
				bottom: '25%'
			},
			legend: {
				orient:'horizontal',
				right: 'center',
				bottom: '1%',
				padding:0,
				itemGap:5,
				data: dangerchartcategory,
				textStyle: {
					color: '#ddd',
					fontSize: '1.2rem'
				}
			},
			yAxis: [{
				axisLine: {
					show: true,
					lineStyle: {
						color: chartutils.getChartXColor()
					}
				},
				splitLine: {
					lineStyle: {
						color: chartutils.getChartYColor(),
						type: 'dashed'
					},
				},
				scale: true,
				axisLabel: {
					show: true,
					textStyle: {
						color: chartutils.getChartYTextColor(),
					},
					formatter: function(params) {
						switch (params) {
							case 1:
								return '已流失';
								break;
							case 2:
								return '高风险';
								break;
							case 3:
								return '中分险';
								break;
							case 4:
								return '低分险';
								break;
							case 5:
								return '正常';
								break;
						}
					}
				},
				splitNumber: dangerchartcategory.length
			}],
			xAxis: {
				axisLine: {
					show: true,
					lineStyle: {
						color: chartutils.getChartXColor()
					}
				},
				axisLabel: {
					color: chartutils.getChartXTextColor()
				},
				axisTick: {
					show: false
				},
				splitLine: {
					show: false
				}
			},
			series: series
		};
		for (let key in option) {
			dangerchartoption[key] = option[key];
		}
	}
</script>

<style scoped="scoped">
	.assetsinfo_item {
		width: 100%;
		margin: 0 auto;
	}

	.assetsinfo_item .icon {
		width: 25%;
		text-align: center;
		font-size: 2rem;
		color: #fff;
		background: #ffffff22;
		padding-top: 1.4vh;
		border-radius: 0.125rem;
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
		font-size: 1.5rem;
	}

	.assetsinfo_item .unit {
		text-align: center;
		font-size: 1.4rem;
	}

	.assetsinfo_item .tonbi {
		text-align: center;
		position: relative;
		top: 0.6vh;
		font-size: 2rem;
	}
</style>
