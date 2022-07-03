<template>
	<el-row :gutter="10" style="margin: 0;padding: 0;margin-top: 1vh;">
		<!-- 基础设备概览 -->
		<el-col :span="24">
			<chartpanel title="基础设备概览" style="height:15vh">
				<div class="flex baseinfo">
					<div class="flex_item">
						<div class="item">
							<div class="flex">
								<div class="icon text_color_10">
									<el-icon><School /></el-icon>
								</div>
								<div class="flex_item dec">
									<div class="value text_color_10">{{baseinfo.value1}}<span class="unit">个</span></div>
									<div class="name">设施总数</div>
								</div>
							</div>
						</div>
					</div>
					<div class="split_line_h"></div>
					<div class="flex_item">
						<div class="item">
							<div class="flex">
								<div class="icon text_color_11">
									<el-icon><School /></el-icon>
								</div>
								<div class="flex_item dec">
									<div class="value text_color_11">{{baseinfo.value2}}<span class="unit">个</span></div>
									<div class="name">设施类别</div>
								</div>
							</div>
						</div>
					</div>
					<div class="split_line_h"></div>
					<div class="flex_item">
						<div class="item">
							<div class="flex">
								<div class="icon text_color_12">
									<el-icon><Failed /></el-icon>
								</div>
								<div class="flex_item dec">
									<div class="value text_color_12">{{baseinfo.value3}}<span class="unit">个</span></div>
									<div class="name">故障数量</div>
								</div>
							</div>
						</div>
					</div>
					<div class="split_line_h"></div>
					<div class="flex_item">
						<div class="item">
							<div class="flex">
								<div class="icon text_color_13">
									<el-icon><Edit /></el-icon>
								</div>
								<div class="flex_item dec">
									<div class="value text_color_13">{{baseinfo.value4}}<span class="unit">个</span></div>
									<div class="name">维修数量</div>
								</div>
							</div>
						</div>
					</div>
					<div class="split_line_h"></div>
					<div class="flex_item">
						<div class="item">
							<div class="flex">
								<div class="icon text_color_14">
									<el-icon><AlarmClock /></el-icon>
								</div>
								<div class="flex_item dec">
									<div class="value text_color_14">{{baseinfo.value5}}<span class="unit">个</span></div>
									<div class="name">运行时长</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</chartpanel>
		</el-col>
	</el-row>
	<el-row :gutter="10" style="margin: 0;padding: 0;margin-top: 1vh;">
		<el-col :span="16">
			<!-- 分类占比 -->
			<chartpanel title="设施分类占比" style="height:40vh">
				<v-chart ref="categorychart" style="min-height: 34vh;" :option="categorychartoption"></v-chart>
			</chartpanel>
		</el-col>
		<el-col :span="8">
			<!-- 电梯信息 -->
			<chartpanel title="电梯信息" style="height:40vh">
				<div class="flex elevator">
					<div class="flex_item">
						<div class="elevatoritem">
							<div class="name">设备数量</div>
							<div class="value text_color_11">{{elevatorinfo.value1}}</div>
						</div>
					</div>
					<div class="split_line_h"></div>
					<div class="flex_item">
						<div class="elevatoritem">
							<div class="name">运行里程</div>
							<div class="value text_color_13">{{elevatorinfo.value2}}</div>
						</div>
					</div>
					<div class="split_line_h"></div>
					<div class="flex_item">
						<div class="elevatoritem">
							<div class="name">载人数量</div>
							<div class="value text_color_15">{{elevatorinfo.value3}}</div>
						</div>
					</div>
				</div>
				<v-chart ref="elevatorchart" style="min-height: 26vh;margin-top: 1vh;" :option="elevatorchartoption"></v-chart>
			</chartpanel>
		</el-col>
	</el-row>
	<el-row :gutter="10" style="margin: 0;padding: 0;margin-top: 1vh;">
		<el-col :span="8">
			<!-- 故障信息 -->
			<chartpanel title="故障信息" style="height:35vh">
				<vue3-seamless-scroll :list="faultdatas" class="faultscroll">
					<div class="item flex" v-for="(item, index) in faultdatas" :key="index">
						<div class="flex_item">{{item.title}}</div>
						<div class="date">{{item.date}}</div>
						<div class="status" v-if="item.status == '已完成'">{{item.status}}</div>
						<div class="status text_color_14" v-else>{{item.status}}</div>
					</div>
				</vue3-seamless-scroll>
			</chartpanel>
		</el-col>
		<el-col :span="8">
			<!-- 维修信息 -->
			<chartpanel title="维修信息" style="height:35vh">
				<vue3-seamless-scroll :list="repairdatas" class="repairscroll">
					<div class="item flex" v-for="(item, index) in repairdatas" :key="index">
						<div class="flex_item">{{item.title}}</div>
						<div class="date">{{item.date}}</div>
						<div class="sno">{{item.sno}}</div>
						<div class="status" v-if="item.status == '已完成'">{{item.status}}</div>
						<div class="status text_color_14" v-else>{{item.status}}</div>
					</div>
				</vue3-seamless-scroll>
			</chartpanel>
		</el-col>
		<el-col :span="8">
			<!-- 维修记录 -->
			<chartpanel title="维修记录" style="height:35vh">
				<v-chart ref="repairchart" style="min-height: 30vh;" :option="repairchartoption"></v-chart>
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
	
	let baseinfo = reactive({
		value1:utils.random(1000),
		value2:utils.random(1000),
		value3:utils.random(1000),
		value4:utils.random(1000),
		value5:utils.random(1000)
	});
	let elevatorinfo = reactive({
		value1:utils.random(1000),
		value2:utils.random(1000),
		value3:utils.random(1000)
	});
	
	//类别占比
	let categorychart = ref();
	let categorychartoption = reactive({});
	let categorychartcategory = reactive(['基础建筑','安防设施','照明设施','健身设施','检测设施','休息设施','电梯设施','通讯设施','公共设施','宣传设施']);
	let categorychartvalues = reactive([]);
	
	//电梯运行数据
	let elevatorchart = ref();
	let elevatorchartoption = reactive({});
	let elevatorchartcategory = reactive([]);
	let elevatorchartvalues = reactive([[],[]]);
	
	//故障信息
	const faultdatas = reactive([{
		title: '1号楼1层摄像头损坏',
		date: '15:11',
		status: '未处理'
	}, {
		title: '摄像头X0202号断网',
		date: '15:11',
		status: '已处理'
	}, {
		title: '1号楼1层摄像头损坏',
		date: '15:11',
		status: '未处理'
	}, {
		title: '摄像头X0202号断网',
		date: '15:11',
		status: '已处理'
	}, {
		title: '1号楼1层摄像头损坏',
		date: '15:11',
		status: '未处理'
	}, {
		title: '摄像头X0202号断网',
		date: '15:11',
		status: '已处理'
	}, {
		title: '1号楼1层摄像头损坏',
		date: '15:11',
		status: '未处理'
	}, {
		title: '摄像头X0202号断网',
		date: '15:11',
		status: '已处理'
	}, {
		title: '1号楼1层摄像头损坏',
		date: '15:11',
		status: '未处理'
	}, {
		title: '摄像头X0202号断网',
		date: '15:11',
		status: '已处理'
	}, {
		title: '1号楼1层摄像头损坏',
		date: '15:11',
		status: '未处理'
	}, {
		title: '摄像头X0202号断网',
		date: '15:11',
		status: '已处理'
	}]);
	
	//维修信息
	const repairdatas = reactive([{
		title: '1号楼1层摄像头损坏维修处理',
		date: '15:11',
		sno:'4545457',
		status: '未处理'
	}, {
		title: '摄像头X0202号断网维修处理',
		date: '15:11',
		sno:'4324234',
		status: '已处理'
	}, {
		title: '1号楼1层摄像头损坏',
		date: '15:11',
		sno:'4324234',
		status: '未处理'
	}, {
		title: '摄像头X0202号断网',
		date: '15:11',
		sno:'4324234',
		status: '已处理'
	}, {
		title: '1号楼1层摄像头损坏',
		date: '15:11',
		sno:'4324234',
		status: '未处理'
	}, {
		title: '摄像头X0202号断网',
		date: '15:11',
		sno:'4324234',
		status: '已处理'
	}, {
		title: '1号楼1层摄像头损坏',
		date: '15:11',
		sno:'4324234',
		status: '未处理'
	}, {
		title: '摄像头X0202号断网',
		date: '15:11',
		sno:'4324234',
		status: '已处理'
	}, {
		title: '1号楼1层摄像头损坏',
		date: '15:11',
		sno:'4324234',
		status: '未处理'
	}, {
		title: '摄像头X0202号断网',
		date: '15:11',
		sno:'4324234',
		status: '已处理'
	}, {
		title: '1号楼1层摄像头损坏',
		date: '15:11',
		sno:'4324234',
		status: '未处理'
	}, {
		title: '摄像头X0202号断网',
		date: '15:11',
		sno:'4324234',
		status: '已处理'
	}]);
	
	//维修记录图表
	let repairchart = ref();
	let repairchartoption = reactive({});
	let repairchartcategory = reactive([]);
	let repairchartvalues = reactive([]);
	
	//初始化图标
	const initCharts = () => {
		categorychartcategory.forEach((item,index)=>{
			categorychartvalues.push(utils.random(1000));
		})
		chartutils.initBarChart(categorychartoption,categorychartcategory,categorychartvalues,'#FF5722');
		
		let date = new Date();
		date.setDate(date.getDate()-15);
		for (let i = new Date(date.getTime()); i.getTime() < new Date().getTime(); i.setDate(i.getDate()+1)) {
			elevatorchartcategory.push(i.format('MM-dd'));
			elevatorchartvalues[0].push(utils.random(1000));
			elevatorchartvalues[1].push(utils.random(1000));
		}
		initelevatorchart();
		
		date = new Date();
		date.setMonth(date.getMonth()-12)
		for (let i = new Date(date.getTime()); i.getTime() < new Date().getTime(); i.setMonth(i.getMonth()+1)) {
			repairchartcategory.push(i.format('MM-dd'));
			repairchartvalues.push(utils.random(1000));
		}
		chartutils.initLineChart(repairchartoption,repairchartcategory,repairchartvalues,'#ff72cb');
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
			baseinfo.value4 = utils.random(1000);
			baseinfo.value5 = utils.random(1000);
			
			elevatorinfo.value1 = utils.random(1000);
			elevatorinfo.value2 = utils.random(1000);
			elevatorinfo.value3 = utils.random(1000);
			
			categorychartvalues.forEach((item,index)=>{
				categorychartvalues[index] = utils.random(1000);
			})
			elevatorchartvalues[0].forEach((item,index)=>{
				elevatorchartvalues[0][index] = utils.random(1000);
			})
			elevatorchartvalues[1].forEach((item,index)=>{
				elevatorchartvalues[1][index] = utils.random(1000);
			})
			repairchartvalues.forEach((item,index)=>{
				repairchartvalues[index] = utils.random(1000);
			})
		}, refreshtime);
	}
	
	//挂
	onMounted(() => {
		initCharts();
		startRefreshChart();
	
		//图表尺寸自适应
		window.onresize = () => {
			categorychart && categorychart.value.resize();
			elevatorchart && elevatorchart.value.resize();
			repairchart && repairchart.value.resize();
		}
	});
	onBeforeUnmount(() => {
		timer && clearInterval(timer);
	});
	
	const initelevatorchart = (option, category, values, color, title) =>{
		// let title_ = utils.createChartTitle(title);
		let option_ = {
			grid: chartutils.createChartGaid('40vh', '10vh', "15vh", "45vh"),
			legend:{
				x:'center',
				y:'bottom',
				// data:['运行里程数','载人量统计'],
				orient :'horizontal',
				textStyle:{
					color:'#ddd'
				},
				itemGap:10
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow',
				},
			},
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
				},
				data: elevatorchartcategory,
				type: 'category',
			},
			yAxis: {
				axisLabel: {
					color: chartutils.getChartYTextColor(),
				},
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
				name: '',
			},
			series: [{
				name: "里程数",
				data: elevatorchartvalues[0],
				type: 'bar',
				barWidth: '10vh',
				itemStyle: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color:  '#2A8BFDff',
						},
						{
							offset: 1,
							color: '#2A8BFDbb',
						}
					]),
					barBorderRadius: 20
				},
				label: {
					show: true,
					position: 'top',
					textStyle: {
						fontSize: "1.2rem",
						color: '#fff'
					}
				}
			},{
				name: "载人量",
				data: elevatorchartvalues[1],
				type: 'bar',
				barWidth: '10vh',
				itemStyle: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: '#0bfdabff',
						},
						{
							offset: 1,
							color:  '#0bfdabbb',
						}
					]),
					barBorderRadius: 20
				},
				label: {
					show: true,
					position: 'top',
					textStyle: {
						fontSize: "1.2rem",
						color: '#fff'
					}
				}
			}]
		};
		for (let key in option_) {
			elevatorchartoption[key] = option_[key];
		}
	}
</script>

<style scoped="scoped">
	.baseinfo .item{
		width: 60%;
		margin:  0 auto;
	}
	.baseinfo .item .icon{
		width:30%;
		text-align: center;
		font-size: 4rem;
		line-height: 11vh;
	}
	.baseinfo .item .dec{
		padding-top: 1.5vh;
	}
	.baseinfo .item .dec .value{
		font-size: 2.6rem;
		line-height: 3vh;
	}
	.baseinfo .item .dec .value .unit{
		font-size: 1.4rem;
		line-height: 3vh;
		padding-left: 0.625rem;
		color: #ddd;
	}
	.baseinfo .item .dec .name{
		font-size: 1.4rem;
		line-height: 3vh;
		color: #ddd;
	}
	.baseinfo .split_line_h{
		height: 10vh;
	}
	
	.elevator .split_line_h{
		height: 8vh;
	}
	
	.elevatoritem{
		width: 80%;
		margin:  0 auto;
		padding-top: 1vh;
	}
	.elevatoritem .name{
		font-size: 1.4rem;
		line-height: 3vh;
		color: #ddd;
	}
	.elevatoritem .value{
		font-size: 2.6rem;
		line-height: 3vh;
		color: #ddd;
	}
	
	.faultscroll {
		height: 30vh;
		width: 100%;
		overflow: hidden;
	}
	
	.faultscroll .item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1vh 0.8vh;
		font-size: 1.4rem;
		border-radius: 0.5vh;
	}
	
	.faultscroll .item:nth-child(even) {
		background-color: rgba(255, 255, 255, 0.1);
	}
	
	.faultscroll .item .date {
		width: 4vw;
	}
	
	.faultscroll .item .status {
		width: 3vw;
		color: #FF0157;
	}
	
	.repairscroll {
		height: 30vh;
		width: 100%;
		overflow: hidden;
	}
	
	.repairscroll .item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1vh 0.8vh;
		font-size: 1.4rem;
		border-radius: 0.5vh;
	}
	
	.repairscroll .item:nth-child(even) {
		background-color: rgba(255, 255, 255, 0.1);
	}
	
	.repairscroll .item .date {
		width: 4vw;
	}
	
	.repairscroll .item .sno {
		width: 4vw;
	}
	
	.repairscroll .item .status {
		width: 3vw;
		color: #FF0157;
	}
</style>
