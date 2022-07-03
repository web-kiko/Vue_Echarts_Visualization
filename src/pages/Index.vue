<template>
	<el-row :gutter="10" style="margin: 0;padding: 0;margin-top: 1vh;">
		<el-col :span="6">
			<!-- 园区概览 -->
			<chartpanel title="园区概览" class="baseinfopanel" style="height: 20vh;">
				<div class="flex" style="margin-top: 1.5vh;">
					<div class="flex_item ">
						<div class="baseinfo_item flex">
							<div class="icon text_color_10">
								<el-icon>
									<avatar />
								</el-icon>
							</div>
							<div class="text flex_item">
								<div class="name">企业数量</div>
								<div class="value text_color_10">{{baseinfo.count}}<span class="danwei">家</span></div>
							</div>
						</div>
					</div>
					<div class="flex_item ">
						<div class="baseinfo_item flex">
							<div class="icon text_color_11">
								<el-icon>
									<flag />
								</el-icon>
							</div>
							<div class="text flex_item">
								<div class="name">入驻企业</div>
								<div class="value text_color_11">{{baseinfo.incount}}<span class="danwei">个</span></div>
							</div>
						</div>
					</div>
					<div class="flex_item ">
						<div class="baseinfo_item flex">
							<div class="icon text_color_12">
								<el-icon>
									<user />
								</el-icon>
							</div>
							<div class="text flex_item">
								<div class="name">从业人数</div>
								<div class="value text_color_12">{{baseinfo.users}}<span class="danwei">人</span></div>
							</div>
						</div>
					</div>
				</div>
				
					
			</chartpanel>
			<!-- 实时车位 -->
			<chartpanel title="实时车位" class="carpanel" style="height: 20vh;margin-top: 1vh;;">
				<div class="flex" style="margin-top: 1vh;">
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
					<div class="split_line_h"></div>
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
				</div>
				<div class="flex" style="margin-top: 1vh;">
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
					<div class="split_line_h"></div>
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
			<!-- 入驻企业 -->
			<chartpanel title="入驻企业" style="height: 20vh;margin-top: 1vh;;">
				<div class="flex">
					<div class="flex_item">
						<v-chart ref="qiyecountchart" style="height:18vh" :option="qiyecountchartoption" />
					</div>
					<div class="flex_item">
						<v-chart ref="qiyelvchart" style="height:18vh" :option="qiyelvchartoption" />
					</div>
				</div>
			</chartpanel>
		</el-col>
		<el-col :span="12">
			<!-- 园区地图 -->
			<chartpanel title="" style="height: 62.5vh;">
				<img src="@/assets/b (1).webp" style="width: 100%;height: 100%;position: absolute;left:0;right:0" />
				
			</chartpanel>
		</el-col>
		<el-col :span="6">
			<!-- 滚动新闻 -->
			<chartpanel title="滚动新闻" style="height: 20vh;">
				<vue3-seamless-scroll :list="newsdatas" class="indexscroll">
					<div class="item flex" v-for="(item, index) in newsdatas" :key="index">
						<div class="flex_item">{{item.title}}</div>
						<div class="date">{{item.date}}</div>
						<div class="status" v-if="item.status == '待处理'">{{item.status}}</div>
						<div class="status text_color_12" v-else>{{item.status}}</div>
					</div>
				</vue3-seamless-scroll>
			</chartpanel>
			<!-- 环境质量 -->
			<chartpanel title="环境质量" style="height: 20vh;margin-top: 1vh;">
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
			<!-- 天气情况 -->
			<chartpanel title="天气情况" style="height: 20vh;margin-top: 1vh;;">
				<div class="flex weater">
					<div style="width:30%" class="flex cur">
						<div class="flex_item">
							<div class="icon">
								<el-icon>
									<Pouring />
								</el-icon>
							</div>
							<div class="text">{{weater.mintemp}}/{{weater.maxtemp}}℃</div>
						</div>
						<div class="flex_item">
							<div class="flex">
								<div class="flex_item temp">{{weater.curtemp}}</div>
								<div class="flex_item">
									<div class="text">℃</div>
									<div class="text">小雨</div>
								</div>
							</div>
							<div class="text">西北微风</div>
						</div>
					</div>
					<div class="split_line_h"></div>
					<div class="flex_item datewater">
						<div class="date">{{weater.after}}</div>
						<div class="flex">
							<div class="flex_item">
								<div class="date_icon">
									<el-icon>
										<Pouring />
									</el-icon>
								</div>
								<div class="date_icon_text">小雨</div>
							</div>
							<div class="flex_item">
								<div class="date_temp">{{weater.aftermintemp}}/{{weater.aftermintemp}}℃</div>
							</div>
						</div>
					</div>
					<div class="split_line_h"></div>
					<div class="flex_item datewater">
						<div class="date">{{weater.after1}}</div>
						<div class="flex">
							<div class="flex_item">
								<div class="date_icon">
									<el-icon>
										<Pouring />
									</el-icon>
								</div>
								<div class="date_icon_text">小雨</div>
							</div>
							<div class="flex_item">
								<div class="date_temp">{{weater.after1mintemp}}/{{weater.after1mintemp}}℃</div>
							</div>
						</div>
					</div>
				</div>
			</chartpanel>
		</el-col>
	</el-row>
	<el-row :gutter="10" style="margin: 0;padding: 0;margin-top: 1vh;">
		<el-col :span="6">
			<!-- 资产统计 -->
			<chartpanel title="资产统计" style="height: 28vh;">
				<div class="flex" style="margin-top: 3.5vh;">
					<div class="flex_item">
						<div class="aeest_item flex">
							<div class="icon text_color_10">
								<el-icon>
									<Coin />
								</el-icon>
							</div>
							<div class="flex_item">
								<div class="name">总产值</div>
								<div class="value text_color_10">
									<span class="value_">{{aeest.value1}}</span>
									<span class="unit">亿元</span>
								</div>
							</div>
						</div>
					</div>
					<div class="flex_item">
						<div class="aeest_item flex">
							<div class="icon text_color_11">
								<el-icon>
									<Coin />
								</el-icon>
							</div>
							<div class="flex_item">
								<div class="name">总投资</div>
								<div class="value text_color_11">
									<span class="value_">{{aeest.value2}}</span>
									<span class="unit">亿元</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="flex" style="margin-top: 3.5vh;">
					<div class="flex_item">
						<div class="aeest_item flex">
							<div class="icon text_color_12">
								<el-icon>
									<Coin />
								</el-icon>
							</div>
							<div class="flex_item">
								<div class="name">总净利</div>
								<div class="value text_color_12">
									<span class="value_">{{aeest.value3}}</span>
									<span class="unit">亿元</span>
								</div>
							</div>
						</div>
					</div>
					<div class="flex_item">
						<div class="aeest_item flex">
							<div class="icon text_color_13">
								<el-icon>
									<Coin />
								</el-icon>
							</div>
							<div class="flex_item">
								<div class="name">总税收</div>
								<div class="value text_color_13">
									<span class="value_">{{aeest.value3}}</span>
									<span class="unit">亿元</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</chartpanel>
		</el-col>
		<el-col :span="12">
			<el-row :gutter="10" style="margin: 0;padding: 0;">
				<el-col :span="12" style="padding-left: 0;">
					<chartpanel title="安防设备" style="height: 28vh;">
						<div class="flex">
							<div class="flex_item">
								<div class="device_item">
									<img src="@/assets/1.jpeg" style="width: 100%;height:100%;border-radius: 3px;">
									<div class="info">
										<div class="icon"><el-icon><VideoCamera /></el-icon></div>
										<div class="name">南门摄像头</div>
									</div>
								</div>
							</div>
							<div style="width:1vh;height:1vh"></div>
							<div class="flex_item">
								<div class="device_item">
									<img src="@/assets/2.jpeg" style="width: 100%;height:100%;border-radius: 3px;">
									<div class="info">
										<div class="icon"><el-icon><VideoCamera /></el-icon></div>
										<div class="name">东门摄像头</div>
									</div>
								</div>
							</div>
						</div>
						<div style="width:100%;height:1vh"></div>
						<div class="flex">
							<div class="flex_item">
								<div class="device_item">
									<img src="@/assets/3.jpeg" style="width: 100%;height:100%;border-radius: 3px;">
								<div class="info">
										<div class="icon"><el-icon><VideoCamera /></el-icon></div>
										<div class="name">西门摄像头</div>
									</div>
								</div>
							</div>
							<div style="width:1vh;height:1vh"></div>
							<div class="flex_item">
								<div class="device_item">
									<img src="@/assets/4.jpeg" style="width: 100%;height:100%;border-radius: 3px;">
									<div class="info">
										<div class="icon"><el-icon><VideoCamera /></el-icon></div>
										<div class="name">北门摄像头</div>
									</div>
								</div>
							</div>
						</div>
					</chartpanel>
				</el-col>
				<el-col :span="12" style="padding-right: 0;">
					<chartpanel title="安防事件" style="height: 28vh;">
						<vue3-seamless-scroll :list="secdatas" class="secscroll">
							<div class="item flex" v-for="(item, index) in secdatas" :key="index">
								<div class="flex_item">{{item.title}}</div>
								<div class="date">{{item.date}}</div>
								<div class="status" v-if="item.status == '事件'">{{item.status}}</div>
								<div class="status text_color_13" v-else-if="item.status == '提示'">{{item.status}}</div>
								<div class="status text_color_14" v-else>{{item.status}}</div>
							</div>
						</vue3-seamless-scroll>
					</chartpanel>
				</el-col>
			</el-row>
		</el-col>
		<el-col :span="6">
			<!-- 人流统计 -->
			<chartpanel title="人流统计" style="height: 28vh;">
				<v-chart ref="userchart" style="height:23vh" :option="userchartoption" />
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

	import chartpanel from '@/components/chartpanel.vue'

	const $echarts = echarts;

	//园区概览数据
	let baseinfo = reactive({
		count: utils.random(1000),
		incount: utils.random(1000),
		users: utils.random(1000),
		size: utils.random(1000),
		buildingsize: utils.random(1000),
		buildingminaji: utils.random(1000)
	});

	//停车数
	let carinfo = reactive({
		count: utils.random(10000),
		doorcount: utils.random(10000),
		allcount: utils.random(10000),
		incount: utils.random(10000),
		outcount: utils.random(10000),
		waitecount: utils.random(10000)
	});

	//企业入住数
	let qiyecountchart = ref();
	let qiyecountchartoption = reactive({});
	let qiyecountchartvalue = ref(utils.random(100));

	//企业入住率
	let qiyelvchart = ref();
	let qiyelvchartoption = reactive({});
	let qiyelvchartvalue = ref(utils.random(100));

	//新闻资讯数据
	const newsdatas = reactive([{
		title: '明天6点进行核酸检测',
		date: '15:11',
		status: '待处理'
	}, {
		title: '5.1放假通知',
		date: '15:11',
		status: '已处理'
	}, {
		title: '关于5.6日停电通知说明',
		date: '15:11',
		status: '待处理'
	}, {
		title: '明天6点进行核酸检测',
		date: '15:11',
		status: '已处理'
	}, {
		title: '5.1放假通知',
		date: '15:11',
		status: '待处理'
	}, {
		title: '关于5.6日停电通知说明',
		date: '15:11',
		status: '已处理'
	}, {
		title: '明天6点进行核酸检测',
		date: '15:11',
		status: '已处理'
	}, {
		title: '5.1放假通知',
		date: '15:11',
		status: '待处理'
	}, {
		title: '关于5.6日停电通知说明',
		date: '15:11',
		status: '待处理'
	}]);

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
	}]);

	//天气数据
	let weater = reactive({
		mintemp: utils.random(40),
		maxtemp: utils.random(40),
		curtemp: utils.random(40),
		after: new Date().format('dd日') + '(' + new Date().getweektext() + ')',
		aftermintemp: utils.random(40),
		aftermaxtemp: utils.random(40),
		aftercurtemp: utils.random(40),
		after1: new Date().format('dd日') + '(' + new Date().getweektext() + ')',
		after1mintemp: utils.random(40),
		after1maxtemp: utils.random(40),
		after1curtemp: utils.random(40)
	});

	//资产统计数据
	let aeest = reactive({
		value1: utils.random(1000),
		value2: utils.random(1000),
		value3: utils.random(1000),
		value4: utils.random(1000)
	})
	
	//安防事件
	const secdatas = reactive([{
		title: '1-1号楼1层检测到有人活动',
		date: '15:11',
		status: '通知'
	}, {
		title: '道闸门1001烤开启',
		date: '15:11',
		status: '事件'
	}, {
		title: '1-1号楼1层检测到有人活动',
		date: '15:11',
		status: '事件'
	}, {
		title: '道闸门1001烤开启',
		date: '15:11',
		status: '事件'
	}, {
		title: '1-1号楼1层检测到有人活动',
		date: '15:11',
		status: '通知'
	}, {
		title: '道闸门1001烤开启',
		date: '15:11',
		status: '提示'
	},{
		title: '1-1号楼1层检测到有人活动',
		date: '15:11',
		status: '提示'
	}, {
		title: '道闸门1001烤开启',
		date: '15:11',
		status: '提示'
	},{
		title: '1-1号楼1层检测到有人活动',
		date: '15:11',
		status: '通知'
	}, {
		title: '道闸门1001烤开启',
		date: '15:11',
		status: '事件'
	}]);
	
	//人流统计
	let userchart = ref();
	let userchartoption = reactive({});
	let usercharttime = reactive([]);
	let userchartvalues = reactive([]);

	//初始化图标
	const initCharts = () => {
		initQiYeCountChart(); //初始化企业数图表
		initQiYeLvChart(); //初始化企业入住率图表
		let curdate = new Date();
		curdate.setDate(curdate.getDate() + 1);
		weater.after = curdate.format('dd日') + '(' + curdate.getweektext() + ')';
		curdate.setDate(curdate.getDate() + 1);
		weater.after1 = curdate.format('dd日') + '(' + curdate.getweektext() + ')';
		
		curdate = new Date();
		curdate.setHours(curdate.getHours()-12);
		for(let i = new Date(curdate.getTime());i.getTime()<new Date().getTime();i.setMinutes(i.getMinutes()+30)){
			usercharttime.push(i.format('hh-mm'));
			userchartvalues.push(utils.random(1000));
		}
		// initLineChart: (option, category, values, color) => {
		chartutils.initLineChart(userchartoption,usercharttime,userchartvalues,'#FF5722');
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
			baseinfo.count = utils.random(1000);
			baseinfo.incount = utils.random(1000);
			baseinfo.users = utils.random(1000);
			baseinfo.size = utils.random(1000);
			baseinfo.buildingsize = utils.random(1000);;
			baseinfo.buildingminaji = utils.random(1000);

			//-----------------
			carinfo.count = utils.random(10000);
			carinfo.doorcount = utils.random(10000);
			carinfo.allcount = utils.random(10000);
			carinfo.incount = utils.random(10000);
			carinfo.outcount = utils.random(10000);
			carinfo.waitecount = utils.random(10000);

			//-----------------
			qiyecountchart.value = utils.random(100);
			qiyecountchartoption.title.text = '{a|' + qiyecountchartvalue.value + '}{b|%}\n{c|企业入驻数}';
			qiyecountchartoption.series[0].data[0] = qiyecountchartvalue.value;
			qiyecountchartoption.series[0].data[1] = 100 - qiyecountchartvalue.value;
			
			//-----------------
			qiyelvchart.value = utils.random(100);
			qiyelvchartoption.title.text = '{a|' + qiyelvchartvalue.value + '}{b|%}\n{c|企业入驻率}';
			qiyelvchartoption.series[0].data[0] = qiyelvchartvalue.value;
			qiyelvchartoption.series[0].data[1] = 100 - qiyelvchartvalue.value;

			//-----------------
			weater.mintemp = utils.random(40);
			weater.maxtemp = utils.random(40);
			weater.curtemp = utils.random(40);
			weater.aftermintemp = utils.random(40);
			weater.aftermaxtemp = utils.random(40);
			weater.aftercurtemp = utils.random(40);
			weater.after1mintemp = utils.random(40);
			weater.after1maxtemp = utils.random(40);
			weater.after1curtemp = utils.random(40)
			//-----------------
			aeest.value1 = utils.random(1000);
			aeest.value2 = utils.random(1000);
			aeest.value3 = utils.random(1000);
			aeest.value4 = utils.random(1000);
			//-----------------
			userchartvalues.forEach((item,index)=>{
				userchartvalues[index] = utils.random(1000);
			})
		}, refreshtime);
	}

	//挂
	onMounted(() => {
		initCharts();
		startRefreshChart();

		//图表尺寸自适应
		window.onresize = () => {
			qiyecountchart && qiyecountchart.value.resize();
			qiyelvchart && qiyelvchart.value.resize();
			userchart && userchart.value.resize();
		}
	});
	onBeforeUnmount(() => {
		timer && clearInterval(timer);
	});

	const initQiYeCountChart = () => {
		let config = {
			color: ['#00FF94', '#00FFEE'],
			data: [{
					name: '',
					value: qiyecountchartvalue.value,
				},
		 	{
					name: '',
					value: 100 - qiyecountchartvalue.value
				}
			],
			zlevel: 2,
			title: {
				subtext: '企业入住率',
			}
		};
		let option = {
			color: [{
					type: 'linear',
					x: 0,
					y: 0,
					x2: 1,
					y2: 1,
					colorStops: [{
							offset: 0,
							color: config.color[0],
						},
						{
							offset: 1,
							color: config.color[1],
						},
					],
					global: false,
				},
				'#252f54'
			],
			title: Object.assign({
					text: '{a|' + qiyecountchartvalue.value + '}{b|%}\n{c|企业入驻数}',
					zlevel: 2,
					textStyle: {
						rich: {
							a: {
								fontSize: 30,
								color: '#ddd',
								fontWeight: '500',
								margin: '0 5px 0 0',
							},
							b: {
								fontSize: 14,
								color: '#ddd',
								padding: [0, 0, -10, 0],
								fontWeight: '500',
							},
							c: {
								fontSize: 16,
								color: '#ddd',
								padding: [5, 0],
							},
						},
					},
					subtext: '',
					top: '24%',
					left: '49%',
					textAlign: 'center',
					itemGap: 280,
					subtextStyle: {
						color: '#ddd',
						fontSize: 36,
						align: 'center',
					},
				},
				config.title
			),
			series: [
				//环形
				{
					name: '',
					type: 'pie',
					radius: ['70%', '80%'],
					center: ['50%', '40%'],
					emphasis: {
						//5.x版本使用取消悬浮放大
						scale: false,
						label: {
							show: false /* 5.x版本是label.emphasis */ ,
						}
					},
					zlevel: 1,
					labelLine: {
						show: false
					},
					data: config.data
				},
				//环形分割线
				{
					name: '分割线',
					type: 'gauge',
					radius: '95%', //配合splitLine里的length一起调
					clockwise: true,
					startAngle: '90',
					center: ['50%', '40%'],
					endAngle: '-269.9999',
					splitNumber: 14,
					zlevel: 2,
					detail: {
						offsetCenter: [10, 20],
						formatter: ' '
					},
					axisLine: {
						lineStyle: {
							width: 0,
							opacity: 0
						}
					},
					axisTick: {
						show: false
					},
					markArea: {
						itemStyle: {
							color: '#0f0'
						}
					},
					splitLine: {
						show: true,
						length: 48, //配合radius一起调
						padding: [0, 0, 0],
						lineStyle: {
							color: '#000000',
							width: 5,
						},
					},
					axisLabel: {
						show: false
					}
				}
			]
		};
		for (let key in option) {
			qiyecountchartoption[key] = option[key];
		}
	}
	const initQiYeLvChart = () => {
		let config = {
			color: ['#ee6666', '#FF5722'],
			data: [{
					name: '',
					value: qiyelvchartvalue.value,
				},
				{
					name: '',
					value: 100 - qiyelvchartvalue.value
				}
			],
			zlevel: 2,
			title: {
				subtext: '企业入住率',
			}
		};
		let option = {
			color: [{
					type: 'linear',
					x: 0,
					y: 0,
					x2: 1,
					y2: 1,
					colorStops: [{
							offset: 0,
							color: config.color[0],
						},
						{
							offset: 1,
							color: config.color[1],
						},
					],
					global: false,
				},
				'#252f54'
			],
			title: Object.assign({
					text: '{a|' + qiyelvchartvalue.value + '}{b|%}\n{c|企业入驻数}',
					zlevel: 2,
					textStyle: {
						rich: {
							a: {
								fontSize: 30,
								color: '#ddd',
								fontWeight: '500',
								margin: '0 5px 0 0',
							},
							b: {
								fontSize: 14,
								color: '#ddd',
								padding: [0, 0, -10, 0],
								fontWeight: '500',
							},
							c: {
								fontSize: 16,
								color: '#ddd',
								padding: [5, 0],
							},
						},
					},
					subtext: '',
					top: '24%',
					left: '49%',
					textAlign: 'center',
					itemGap: 280,
					subtextStyle: {
						color: '#ddd',
						fontSize: 36,
						align: 'center',
					},
				},
				config.title
			),
			series: [
				//环形
				{
					name: '',
					type: 'pie',
					radius: ['70%', '80%'],
					center: ['50%', '40%'],
					emphasis: {
						//5.x版本使用取消悬浮放大
						scale: false,
						label: {
							show: false /* 5.x版本是label.emphasis */ ,
						}
					},
					zlevel: 1,
					labelLine: {
						show: false
					},
					data: config.data
				},
				//环形分割线
				{
					name: '分割线',
					type: 'gauge',
					radius: '95%', //配合splitLine里的length一起调
					clockwise: true,
					startAngle: '90',
					center: ['50%', '40%'],
					endAngle: '-269.9999',
					splitNumber: 14,
					zlevel: 2,
					detail: {
						offsetCenter: [10, 20],
						formatter: ' '
					},
					axisLine: {
						lineStyle: {
							width: 0,
							opacity: 0
						}
					},
					axisTick: {
						show: false
					},
					markArea: {
						itemStyle: {
							color: '#0f0'
						}
					},
					splitLine: {
						show: true,
						length: 48, //配合radius一起调
						padding: [0, 0, 0],
						lineStyle: {
							color: '#000000',
							width: 5,
						},
					},
					axisLabel: {
						show: false
					}
				}
			]
		};
		for (let key in option) {
			qiyelvchartoption[key] = option[key];
		}
	}
</script>

<style>
	.bg_text {
		position: absolute;
		z-index: 2;
		right: 0vw;
		top: 0vw;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(to right, #ffffff00, #d493005c);
	}

	.bg_text .title_1 {
		writing-mode: tb-rl;
		font-size: 3.5rem;
		letter-spacing: 0.6vw;
		position: absolute;
		z-index: 2;
		right: 1vw;
		top: 0vw;
		padding-top: 3vh;
		display: inline-block;
		height: 100%;
		background: linear-gradient(to bottom, #00ffff, #00ff89, #21ff8e);
		-webkit-background-clip: text;
		color: transparent;
	}

	.bg_text .title_2 {
		writing-mode: tb-rl;
		font-size: 3.5rem;
		letter-spacing: 0.6vw;
		position: absolute;
		z-index: 2;
		right: 4vw;
		top: 0vw;
		padding-top: 1vh;
		text-align: center;
		display: inline-block;
		height: 100%;
		background: linear-gradient(to bottom, #1ad2e5, #00ff66, #01ffff);
		-webkit-background-clip: text;
		color: transparent;
		/* color:#fff; */
		/* text-shadow: 5px 2px 6px #f8f8f833; */
		/* -webkit-text-stroke: 0.5px #f8f8f899; */
	}

	.baseinfopanel .baseinfo_item {
		width: 80%;
		margin: 0 auto;
		color: #ddd;
	}

	.baseinfopanel .baseinfo_item .icon {
		font-size: 3rem;
		text-align: center;
		width: 40%;
		padding-top: 0.6vh;
		background: rgba(255, 255, 255, 0.3);
	}

	.baseinfopanel .baseinfo_item .text {
		line-height: 2.5vh;
		padding-left: 1.25rem;
	}

	.baseinfopanel .baseinfo_item .text .name {
		font-size: 1.4rem;
	}

	.baseinfopanel .baseinfo_item .text .value {
		font-size: 2rem;
	}

	.baseinfopanel .baseinfo_item .text .value .danwei {
		font-size: 1.4rem;
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

	.indexscroll {
		height: 16vh;
		width: 100%;
		overflow: hidden;
	}

	.indexscroll .item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1vh 0.8vh;
		font-size: 1.4rem;
		border-radius: 0.5vh;
	}

	.indexscroll .item:nth-child(even) {
		background-color: rgba(255, 255, 255, 0.1);
	}

	.indexscroll .item .date {
		width: 4vw;
	}

	.indexscroll .item .status {
		width: 3vw;
		color: #FF0157;
	}

	.table_ {}

	.table_ .th {
		color: #ddd;
		text-align: center;
		line-height: 1.5vh !important;
	}

	.table_ .td {
		color: #ddd;
		line-height: 2vh;
	}

	.table_ .td .value {
		display: inline-block;
		width: 60%;
		margin: 0 auto;
		border-bottom: 0.1875rem solid;
	}

	.table_ .td .value1 {
		display: inline-block;
		width: 100%;
		margin-top: 0.1875rem;
		border-bottom: 0.1875rem solid #0000;
	}

	.weater {
		margin-top: 3vh;
	}

	.weater .icon {
		font-size: 4rem;
		color: #00FAC1;
		text-align: center;
	}

	.weater .temp {
		font-size: 4rem;
		color: #fff;
		text-align: right;
	}

	.weater .text {
		font-size: 1.4rem;
		color: #ddd;
		text-align: center;
		line-height: 2.5vh;
	}

	.weater .cur {
		padding-right: 1vh;
	}

	.weater .datewater {
		padding-left: 1vh;
		padding-right: 1vh;
		text-align: center;
	}

	.weater .datewater .date {
		font-size: 1.6rem;
		line-height: 3vh;
	}

	.weater .datewater .date_icon {
		font-size: 3rem;
		padding-top: 0.2vh;
		line-height: 2vh;
	}

	.weater .datewater .date_icon_text {
		font-size: 1.4rem;
		line-height: 2vh;
	}

	.weater .datewater .date_temp {
		font-size: 1.6rem;
		line-height: 6vh;
	}

	.weater .split_line_h {
		height: 9vh;
	}

	.aeest_item {
		width: 90%;
		margin: 0 auto;
	}

	.aeest_item .icon {
		width: 30%;
		text-align: center;
		font-size: 4rem;
		color: #38cafb;
		background: rgba(255, 255, 255, 0.2);
		padding-top: 1vh;
	}

	.aeest_item .name {
		padding-left: 1vh;
		font-size: 1.6rem;
		line-height: 3vh;
		color: #ddd;
	}

	.aeest_item .value {
		padding-left: 1vh;
		color: #38cafb;
	}

	.aeest_item .value .value_ {
		font-size: 2.4rem;
		font-weight: bold;
	}

	.aeest_item .value .unit {
		font-size: 1.4rem;
	}
	
	.device_item{
		width:100%;
		overflow: hidden;
		height: 11vh;
		position: relative;
		box-shadow: 0 0 0.5vh #11111122;
	}
	.device_item .info{
		position: absolute;
		left: 0;
		top:0;
		width:100%;
		height: 100%;
		background: #11111122;
		text-align: center;
		cursor: pointer;
		color: #fff;
	}
	.device_item .info .icon{
		margin-top: 12%;
		font-size:3rem;
	}
	.device_item .info:hover{
		background: #00FAC144;
	}
	
	.secscroll {
		height: 22vh;
		width: 100%;
		overflow: hidden;
	}
	
	.secscroll .item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1vh 0.8vh;
		font-size: 1.4rem;
		border-radius: 0.5vh;
	}
	
	.secscroll .item:nth-child(even) {
		background-color: rgba(255, 255, 255, 0.1);
	}
	
	.secscroll .item .date {
		width: 4vw;
	}
	
	.secscroll .item .status {
		width: 3vw;
		color: #FF0157;
	}
</style>
