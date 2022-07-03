<template>
	<el-row :gutter="10" style="margin: 0;padding: 0;margin-top: 1vh;">
		<el-col :span="6">
			<!-- 出口监控信息 -->
			<!-- 出口监控信息 -->
			<chartpanel title="" style="height: 60vh;	">
				<div style="position: absolute;top:1vh;width:99%;height: 59vh;">
					<div style="position: relative;height: 59vh;width: 99.5%">
						<div class="flex">
							<div class="flex_item">
								<div class="device_item">
									<img src="@/assets/3.jpg" style="width: 100%;height:100%;border-radius: 3px;">
									<div class="info">
										<div class="icon">
											<el-icon>
												<VideoCamera />
											</el-icon>
										</div>
										<div class="name">东门摄像头进</div>
									</div>
								</div>
							</div>
							<div style="width:1vh;height:1vh"></div>
							<div class="flex_item">
								<div class="device_item">
									<img src="@/assets/3.jpg" style="width: 100%;height:100%;border-radius: 3px;">
									<div class="info">
										<div class="icon">
											<el-icon>
												<VideoCamera />
											</el-icon>
										</div>
										<div class="name">东门摄像头出</div>
									</div>
								</div>
							</div>
							<div style="width:1vh;height:1vh"></div>
						</div>
						<div style="width:1vh;height:1vh"></div>
						<div class="flex">
							<div class="flex_item">
								<div class="device_item">
									<img src="@/assets/3.jpg" style="width: 100%;height:100%;border-radius: 3px;">
									<div class="info">
										<div class="icon">
											<el-icon>
												<VideoCamera />
											</el-icon>
										</div>
										<div class="name">南门摄像进</div>
									</div>
								</div>
							</div>
							<div style="width:1vh;height:1vh"></div>
							<div class="flex_item">
								<div class="device_item">
									<img src="@/assets/3.jpg" style="width: 100%;height:100%;border-radius: 3px;">
									<div class="info">
										<div class="icon">
											<el-icon>
												<VideoCamera />
											</el-icon>
										</div>
										<div class="name">南门摄像出</div>
									</div>
								</div>
							</div>
							<div style="width:1vh;height:1vh"></div>
						</div>
						<div style="width:1vh;height:1vh"></div>
						<div class="flex">
							<div class="flex_item">
								<div class="device_item">
									<img src="@/assets/3.jpg" style="width: 100%;height:100%;border-radius: 3px;">
									<div class="info">
										<div class="icon">
											<el-icon>
												<VideoCamera />
											</el-icon>
										</div>
										<div class="name">南门摄像进</div>
									</div>
								</div>
							</div>
							<div style="width:1vh;height:1vh"></div>
							<div class="flex_item">
								<div class="device_item">
									<img src="@/assets/3.jpg" style="width: 100%;height:100%;border-radius: 3px;">
									<div class="info">
										<div class="icon">
											<el-icon>
												<VideoCamera />
											</el-icon>
										</div>
										<div class="name">南门摄像出</div>
									</div>
								</div>
							</div>
							<div style="width:1vh;height:1vh"></div>
						</div>
					</div>
					<div class="chart_title" style="position: absolute;left:0;top:0;width:100%;text-align: center;">
						车库出入口监控</div>
				</div>
			</chartpanel>
		</el-col>
		<el-col :span="12">
			<!-- 车位分布信息 -->
			<chartpanel title="" style="height: 60vh;">
				<div style="position: absolute;top:1vh;width:100%;height: 59vh;">
					<div id="mapchart" ref="mapchart" style="position: relative;height: 59vh;"></div>
					<div class="chart_title" style="position: absolute;left:0;top:0;width:100%;text-align: center;">
						车位分布信息</div>
				</div>
			</chartpanel>
		</el-col>
		<el-col :span="6">
			<!-- 出口监控信息 -->
			<!-- 出口监控信息 -->
			<chartpanel title="" style="height: 60vh;	">
				<div style="position: absolute;top:1vh;width:99%;height: 59vh;">
					<div style="position: relative;height: 59vh;width: 99.5%">
						<div class="flex">
							<div class="flex_item">
								<div class="device_item">
									<img src="@/assets/3.jpg" style="width: 100%;height:100%;border-radius: 3px;">
									<div class="info">
										<div class="icon">
											<el-icon>
												<VideoCamera />
											</el-icon>
										</div>
										<div class="name">西门摄像头进</div>
									</div>
								</div>
							</div>
							<div style="width:1vh;height:1vh"></div>
							<div class="flex_item">
								<div class="device_item">
									<img src="@/assets/3.jpg" style="width: 100%;height:100%;border-radius: 3px;">
									<div class="info">
										<div class="icon">
											<el-icon>
												<VideoCamera />
											</el-icon>
										</div>
										<div class="name">西门摄像头出</div>
									</div>
								</div>
							</div>
							<div style="width:1vh;height:1vh"></div>
						</div>
						<div style="width:1vh;height:1vh"></div>
						<div class="flex">
							<div class="flex_item">
								<div class="device_item">
									<img src="@/assets/3.jpg" style="width: 100%;height:100%;border-radius: 3px;">
									<div class="info">
										<div class="icon">
											<el-icon>
												<VideoCamera />
											</el-icon>
										</div>
										<div class="name">北门摄像进</div>
									</div>
								</div>
							</div>
							<div style="width:1vh;height:1vh"></div>
							<div class="flex_item">
								<div class="device_item">
									<img src="@/assets/3.jpg" style="width: 100%;height:100%;border-radius: 3px;">
									<div class="info">
										<div class="icon">
											<el-icon>
												<VideoCamera />
											</el-icon>
										</div>
										<div class="name">北门摄像出</div>
									</div>
								</div>
							</div>
							<div style="width:1vh;height:1vh"></div>
						</div>
						<div style="width:1vh;height:1vh"></div>
						<div class="flex">
							<div class="flex_item">
								<div class="device_item">
									<img src="@/assets/3.jpg" style="width: 100%;height:100%;border-radius: 3px;">
									<div class="info">
										<div class="icon">
											<el-icon>
												<VideoCamera />
											</el-icon>
										</div>
										<div class="name">北门摄像进</div>
									</div>
								</div>
							</div>

							<div style="width:1vh;height:1vh"></div>
							<div class="flex_item">
								<div class="device_item">
									<img src="@/assets/3.jpg" style="width: 100%;height:100%;border-radius: 3px;">
									<div class="info">
										<div class="icon">
											<el-icon>
												<VideoCamera />
											</el-icon>
										</div>
										<div class="name">北门摄像出</div>
									</div>
								</div>
							</div>
							<div style="width:1vh;height:1vh"></div>
						</div>
					</div>
					<div class="chart_title" style="position: absolute;left:0;top:0;width:100%;text-align: center;">
						车库出入口监控</div>
				</div>
			</chartpanel>
		</el-col>
	</el-row>
	<el-row :gutter="10" style="margin: 0;padding: 0;margin-top: 1vh;">
		<el-col :span="6">
			<!-- 车位基本信息 -->
			<chartpanel title="车位基本信息" class="carpanel" style="height: 29vh;margin-top: 1vh;;">
				<div class="flex" style="margin-top: 1.5vh;">
					<div class="flex_item">
						<div class="car_item flex">
							<div class="icon text_color_10">
								<el-icon>
									<van />
								</el-icon>
							</div>
							<div class="flex_item">
								<div class="name">车场数</div>
								<div class="value text_color_10">{{carinfo.count}}</div>
							</div>
						</div>
					</div>
					<div class="split_line_h"></div>
					<div class="flex_item">
						<div class="car_item flex">
							<div class="icon text_color_11">
								<el-icon>
									<van />
								</el-icon>
							</div>
							<div class="flex_item">
								<div class="name">道闸数</div>
								<div class="value text_color_11">{{carinfo.doorcount}}</div>
							</div>
						</div>
					</div>
				</div>
				<div class="flex" style="margin-top: 1.5vh;">
					<div class="flex_item">
						<div class="car_item flex">
							<div class="icon text_color_13">
								<el-icon>
									<van />
								</el-icon>
							</div>
							<div class="flex_item">
								<div class="name">车位数</div>
								<div class="value text_color_13">{{carinfo.allcount}}</div>
							</div>
						</div>
					</div>
					<div class="split_line_h"></div>
					<div class="flex_item">
						<div class="car_item flex">
							<div class="icon text_color_12">
								<el-icon>
									<van />
								</el-icon>
							</div>
							<div class="flex_item">
								<div class="name">进场数</div>
								<div class="value text_color_12">{{carinfo.incount}}</div>
							</div>
						</div>
					</div>
				</div>
				<div class="flex" style="margin-top: 1.5vh;">
					<div class="flex_item">
						<div class="car_item flex">
							<div class="icon text_color_14">
								<el-icon>
									<van />
								</el-icon>
							</div>
							<div class="flex_item">
								<div class="name">出场数</div>
								<div class="value text_color_14">{{carinfo.outcount}}</div>
							</div>
						</div>
					</div>
					<div class="split_line_h"></div>
					<div class="flex_item">
						<div class="car_item flex">
							<div class="icon text_color_15">
								<el-icon>
									<van />
								</el-icon>
							</div>
							<div class="flex_item">
								<div class="name">场内车</div>
								<div class="value text_color_15">{{carinfo.waitecount}}</div>
							</div>
						</div>
					</div>
				</div>
			</chartpanel>
		</el-col>
		<el-col :span="12">
			<!-- 使用情况统计 -->
			<chartpanel title="使用情况统计" style="height: 30vh;">
				<v-chart ref="timechart" style="min-height: 26vh;" :option="timechartoption"></v-chart>
			</chartpanel>
		</el-col>
		<el-col :span="6">
			<!-- 实时车位信息 -->
			<chartpanel title="实时车位信息" style="height: 30vh;">
				<vue3-seamless-scroll :list="cardatas" class="carscroll">
					<div class="item flex" v-for="(item, index) in cardatas" :key="index">
						<div class="flex_item">{{item.title}}</div>
						<div class="date">{{item.date}}</div>
						<div class="status" v-if="item.status == '入库'">{{item.status}}</div>
						<div class="status text_color_12" v-else>{{item.status}}</div>
					</div>
				</vue3-seamless-scroll>
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
	
	//时长
	let timechart = ref();
	let timechartoption = reactive({});
	let timechartcategory = reactive([]);
	let timechartvalues = reactive([]);
	
	//新闻资讯数据
	const cardatas = reactive([{
		title: '陕·A2544K',
		date: '15:11',
		status: '出库'
	}, {
		title: '陕·A2344K',
		date: '15:11',
		status: '入库'
	}, {
		title: '陕·A2544K',
		date: '15:11',
		status: '出库'
	}, {
		title: '陕·A2344K',
		date: '15:11',
		status: '入库'
	}, {
		title: '陕·A2544K',
		date: '15:11',
		status: '出库'
	}, {
		title: '陕·A2344K',
		date: '15:11',
		status: '入库'
	}, {
		title: '陕·A2544K',
		date: '15:11',
		status: '出库'
	}, {
		title: '陕·A2344K',
		date: '15:11',
		status: '入库'
	}, {
		title: '陕·A2544K',
		date: '15:11',
		status: '出库'
	}, {
		title: '陕·A2344K',
		date: '15:11',
		status: '入库'
	}, {
		title: '陕·A2544K',
		date: '15:11',
		status: '出库'
	}, {
		title: '陕·A2344K',
		date: '15:11',
		status: '入库'
	}]);
	
	//停车数
	let carinfo = reactive({
		count: utils.random(10000),
		doorcount: utils.random(10000),
		allcount: utils.random(10000),
		incount: utils.random(10000),
		outcount: utils.random(10000),
		waitecount: utils.random(10000)
	});

	//初始化图标
	const initCharts = () => {
		mapchart = chartutils.initCarMapChart('mapchart');
		
		let date = new Date();
		date.setDate(date.getDate()-15);
		for (let i = new Date(date.getTime()); i.getTime() < new Date().getTime(); i.setDate(i.getDate()+1)) {
			timechartcategory.push(i.format('MM-dd'));
			timechartvalues.push(utils.random(1000));
		}
		chartutils.initLineChart(timechartoption, timechartcategory, timechartvalues, '#00FAC1');
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
			carinfo.count = utils.random(10000);
			carinfo.doorcount = utils.random(10000);
			carinfo.allcount = utils.random(10000);
			carinfo.incount = utils.random(10000);
			carinfo.outcount = utils.random(10000);
			carinfo.waitecount = utils.random(10000);
			
			timechartvalues.forEach((item,index)=>{
				timechartvalues[index] = utils.random(1000);
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
			timechart && timechart.value.resize();
		}
	});
	onBeforeUnmount(() => {
		timer && clearInterval(timer);
	});
</script>

<style scoped="scoped">
	.device_item {
		width: 100%;
		overflow: hidden;
		height: 19vh;
		position: relative;
		box-shadow: 0 0 0.5vh #11111122;
	}

	.device_item .info {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: #00000033;
		text-align: center;
		cursor: pointer;
		color: #fff;
		font-size: 1.6rem;
	}

	.device_item .info .icon {
		margin-top: 25%;
		font-size: 3rem;
	}

	.device_item .info:hover {
		background: #00FAC144;
	}
	
	.carscroll {
		height: 25vh;
		width: 100%;
		overflow: hidden;
	}
	
	.carscroll .item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1vh 0.8vh;
		font-size: 1.4rem;
		border-radius: 0.5vh;
	}
	
	.carscroll .item:nth-child(even) {
		background-color: rgba(255, 255, 255, 0.1);
	}
	
	.carscroll .item .date {
		width: 4vw;
	}
	
	.carscroll .item .status {
		width: 3vw;
		color: #FF0157;
	}
	
	.carpanel .car_item {
		line-height: 3vh;
		width: 90%;
		margin: 0 auto;
		color: #ddd;
	}
	
	.carpanel .car_item .icon {
		font-size: 3rem;
		text-align: center;
		width: 40%;
		padding-top: 1.7vh;
		/* background: rgba(255, 255, 255, 0.3); */
	}
	
	.carpanel .car_item .name {
		font-size: 1.4rem;
	}
	
	.carpanel .car_item .value {
		font-size: 2.6rem;
	}
</style>
