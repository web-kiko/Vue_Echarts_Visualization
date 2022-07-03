import * as echarts from 'echarts';
import 'echarts-extension-amap';

const $echarts = echarts;

import utils from './utils.js'
import config from './config.js'


export default {
	/**
	 * 创建图表标题
	 * @param {Object} title
	 */
	createChartTitle: (title) => {
		return {
			show:true,
			text: title,
			textStyle: {
				color: "#ddd",
				fontWeight: 'normal'
			},
			x: 'center',
			y: '5vh'
		}
	},
	/**
	 * 创建图表背景
	 * @param {Object} title
	 */
	createChartGaid: (left, right, top, bottom) => {
		return {
			left: left ? left : '30vh',
			right: right ? right : '10vh',
			top: top ? top : '10vh',
			bottom: bottom ? bottom : '40vh'
		}
	},
	/**
	 * 创建图表背景
	 * @param {Object} title
	 */
	createChartBaseOption: function(title, left, right, top, bottom, categorys)  {
		return {
			title: this.createChartTitle(title),
			tooltip: {
				show: true,
				trigger: 'axis'
			},
			grid: this.createChartGaid(left, right, top, bottom),
			xAxis: {
				type: 'category',
				axisLine: {
					show: true,
					lineStyle: {
						color: this.getChartXColor()
					}
				},
				axisLabel: {
					color: this.getChartXTextColor()
				},
				axisTick: {
					show: false
				},
				splitLine: {
					show: false
				},
				boundaryGap: false,
				data: categorys
			},
			yAxis: {
				type: 'value',
				axisLabel: {
					color: this.getChartYTextColor(),
				},
				axisLine: {
					show: true,
					lineStyle: {
						color: this.getChartXColor()
					}
				},
				splitLine: {
					lineStyle: {
						color: this.getChartYColor(),
						type: 'dashed'
					},
				}
			}
		}
	},
	/**
	 * 获取x轴颜色
	 * @param {Object} title
	 */
	getChartXColor: () => {
		return '#ffffff88'
	},
	/**
	 * 获取x轴文本颜色
	 * @param {Object} title
	 */
	getChartXTextColor: () => {
		return '#ffffff88'
	},
	/**
	 * 获取y轴颜色
	 * @param {Object} title
	 */
	getChartYColor: () => {
		return '#ffffff88'
	},
	/**
	 * 获取y轴文本颜色
	 * @param {Object} title
	 */
	getChartYTextColor: () => {
		return '#ffffff88'
	},
	initMapChart: function(  ele)  {
		let nomal_1 = {
			name:'安防设备',
			type: 'effectScatter',
			zlevel: 5,
			// 使用百度地图坐标系
			coordinateSystem: 'amap',
			//设置图形 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
			// symbol: 'image://http://localhost:3000/src/assets/video.png',
			symbol: 'rect',
			// //标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10
			symbolSize: [10, 10],
			itemStyle: {
				normal: {
					color: '#fac858', //标志颜色
				}
			},
			// 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
			data: [
				[108.837888,34.211216, 100],
				[108.838226,34.211233, 100],
				[108.839781,34.21126, 100],
				[108.840548,34.210506, 100],
				[108.837662,34.209774, 100],
				[108.839942,34.208909, 100],
			],
			rippleEffect: {
				scale: 6,
				brushType: "stroke"
			},
			hoverAnimation: true, //是否开启鼠标 hover 的提示动画效果。
		};
		let nomal_2 = {
			name:'公共设施',
			type: 'effectScatter',
			zlevel: 5,
			// 使用百度地图坐标系
			coordinateSystem: 'amap',
			//设置图形 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
			// symbol: 'image://http://localhost:3000/src/assets/video.png',
			symbol: 'pin',
			// //标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10
			symbolSize: [10, 10],
			itemStyle: {
				normal: {
					color: '#FF8A26', //标志颜色
				}
			},
			// 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
			data: [
				
				[108.841063,34.210337, 100],
				[108.837475,34.20941, 100],
				[108.842002,34.209903, 100],
				[108.837813,34.208439, 100],
				[108.842142,34.208922, 100],
				[108.84366,34.20906, 100],
				[108.844309,34.209188, 100]
			],
			rippleEffect: {
				scale: 6,
				brushType: "stroke"
			},
			hoverAnimation: true, //是否开启鼠标 hover 的提示动画效果。
		};
		let nomal_3 = {
			name:'通讯设备',
			type: 'effectScatter',
			zlevel: 5,
			// 使用百度地图坐标系
			coordinateSystem: 'amap',
			//设置图形 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
			// symbol: 'image://http://localhost:3000/src/assets/video.png',
			symbol: 'roundRect',
			// //标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10
			symbolSize: [10, 10],
			itemStyle: {
				normal: {
					color: '#FF5722', //标志颜色
				}
			},
			// 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
			data: [
				[108.841589,34.210311, 100],
				[108.841525,34.210435, 100],
				[108.84153,34.21028, 100],
				[108.841643,34.210586, 100]
			],
			rippleEffect: {
				scale: 6,
				brushType: "stroke"
			},
			hoverAnimation: true, //是否开启鼠标 hover 的提示动画效果。
		};
		let nomal_4 = {
			name:'娱乐设备',
			type: 'effectScatter',
			zlevel: 5,
			// 使用百度地图坐标系
			coordinateSystem: 'amap',
			//设置图形 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
			// symbol: 'image://http://localhost:3000/src/assets/video.png',
			symbol: 'circle',
			// //标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10
			symbolSize: [10, 10],
			itemStyle: {
				normal: {
					color: '#FF8A26', //标志颜色
				}
			},
			// 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
			data: [
				[108.839835,34.209623, 100],
				[108.839588,34.208403, 100],
				[108.840441,34.208163, 100],
				[108.841743,34.208785, 100],
				[108.842323,34.209037, 100],
				[108.842709,34.20957, 100]
			],
			rippleEffect: {
				scale: 6,
				brushType: "stroke"
			},
			hoverAnimation: true, //是否开启鼠标 hover 的提示动画效果。
		};
		let nomal_5 = {
			name:'休闲设备',
			type: 'effectScatter',
			zlevel: 5,
			// 使用百度地图坐标系
			coordinateSystem: 'amap',
			//设置图形 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
			// symbol: 'image://http://localhost:3000/src/assets/video.png',
			symbol: 'rect',
			// //标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10
			symbolSize: [10, 10],
			itemStyle: {
				normal: {
					color: '#01AAED', //标志颜色
				}
			},
			// 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
			data: [
				[108.837613,34.210408, 100],
				[108.838702,34.209423, 100],
				[108.837688,34.209348, 100]
			],
			rippleEffect: {
				scale: 6,
				brushType: "stroke"
			},
			hoverAnimation: true, //是否开启鼠标 hover 的提示动画效果。
		};

		let option = {
			amap: {
				rotateEnable: true,
				pitchEnable: true,
				pitch: 0,
				showIndoorMap: true,
				showLabel: true,
				rotation: 0,
				// 3D模式，无论你使用的是1.x版本还是2.x版本，都建议开启此项以获得更好的渲染体验
				viewMode: '3D',
				// 高德地图支持的初始化地图配置
				// 高德地图初始中心经纬度
				center: [108.840763,34.209887],
				// 高德地图初始缩放级别
				zoom: 17,
				// 是否开启resize
				resizeEnable: true,
				// 自定义地图样式主题
				// features: ['bg', 'point', 'road'],
				mapStyle: 'amap://styles/darkblue',
				// 移动过程中实时渲染 默认为true 如数据量较大 建议置为false
				renderOnMoving: true,
				// ECharts 图层的 zIndex 默认 2000
				// 从 v1.9.0 起 此配置项已被弃用 请使用 `echartsLayerInteractive` 代替
				echartsLayerZIndex: 2019,
				// 设置 ECharts 图层是否可交互 默认为 true
				// 设置为 false 可实现高德地图自身图层交互
				// 此配置项从 v1.9.0 起开始支持
				echartsLayerInteractive: true,
				// 是否启用大数据模式 默认为 false
				// 此配置项从 v1.9.0 起开始支持
				largeMode: false,
				// 说明：如果想要添加卫星、路网等图层
				// 暂时先不要使用layers配置，因为存在Bug
				// 建议使用amap.add的方式，使用方式参见最下方代码
			},
			legend: [{
			    orient: 'horizontal',
			    left: 'center',
			    bottom: '10vh',
			    align: 'left',
			    itemGap: 10,
			    textStyle: {
			        color: '#fff',
			        fontSize: "1.4rem",
			    },
			    //图例标记的图形高度
			    itemHeight: 20,
			    //图例标记的图形宽度
			    itemWidth: 20
			}],
			series: [nomal_1,nomal_2,nomal_3,nomal_4,nomal_5]
		}
		// 使用刚指定的配置项和数据显示图表。
		let mapchart = $echarts.init(document.getElementById(ele));
		mapchart.setOption(option);

		// 获取 ECharts 高德地图组件
		let amapComponent = mapchart.getModel().getComponent('amap');
		// 获取高德地图实例，使用高德地图自带的控件(需要在高德地图js API script标签手动引入)
		let amap = amapComponent.getAMap();
		// 添加控件
		amap.addControl(new AMap.Scale());
		amap.addControl(new AMap.ToolBar());
		amap.addControl(new AMap.ControlBar());
		// 禁用 ECharts 图层交互，从而使高德地图图层可以点击交互
		// amapComponent.setEChartsLayerInteractive(false);

		let buildingLayer = new AMap.Buildings({
			zIndex: 130,
			merge: false,
			sort: false,
			// opacity:1,	
			// heightFactor:	Number	高度比例系数，可控制3D视图下的楼块高度
			zooms: [17, 20]
		});
		let options = {
			hideWithoutStyle: false, //是否隐藏设定区域外的楼块
			areas: [{ //围栏1
				//visible:false,//是否可见
				rejectTexture: false, //是否屏蔽自定义地图的纹理
				color1: 'fac858ff', //楼顶颜色
				color2: 'FF5722ff', //楼面颜色
				path: [
					[108.837073,34.211396],
					[108.84101,34.211396],
					[108.841826,34.211103],
					[108.844068,34.211041],
					[108.84424,34.210269],
					[108.843027,34.210216],
					[108.843049,34.209089],
					[108.844379,34.209248],
					[108.844626,34.207838],
					[108.837158,34.207917],
					[108.836998,34.209887],
					[108.83704,34.211378],
					[108.837073,34.211396]
				]
			}]
		};
		buildingLayer.setStyle(options); //此配色优先级高于自定义mapStyle

		amap.setLayers([new AMap.TileLayer(), buildingLayer]);

		let polygon = new AMap.Polygon({
			path: options.areas[0].path,
			strokeColor: "#7b2cff",
			strokeWeight: 6,
			strokeOpacity: 0.1,
			fillOpacity: 0.2,
			fillColor: '#7b2cff',
			zIndex: 50,
			bubble: true,
		});
		amap.add([polygon]);
	},
	initLightingMapChart: function(  ele)  {
		let nomal_1 = {
			name:'楼道灯',
			type: 'effectScatter',
			zlevel: 5,
			// 使用百度地图坐标系
			coordinateSystem: 'amap',
			//设置图形 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
			// symbol: 'image://http://localhost:3000/src/assets/video.png',
			symbol: 'rect',
			// //标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10
			symbolSize: [10, 10],
			itemStyle: {
				normal: {
					color: '#fac858', //标志颜色
				}
			},
			// 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
			data: [
				[108.837888,34.211216, 100],
				[108.838226,34.211233, 100],
				[108.839781,34.21126, 100],
				[108.840548,34.210506, 100],
				[108.837662,34.209774, 100],
				[108.839942,34.208909, 100],
			],
			rippleEffect: {
				scale: 6,
				brushType: "stroke"
			},
			hoverAnimation: true, //是否开启鼠标 hover 的提示动画效果。
		};
		for (let i = 0; i < 50; i++) {
			nomal_1.data.push([108.838+Math.random(10)/1000.0,34.210 + Math.random(10)/1000.0, 100]);
		}
		let nomal_2 = {
			name:'路灯',
			type: 'effectScatter',
			zlevel: 5,
			// 使用百度地图坐标系
			coordinateSystem: 'amap',
			//设置图形 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
			// symbol: 'image://http://localhost:3000/src/assets/video.png',
			symbol: 'pin',
			// //标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10
			symbolSize: [10, 10],
			itemStyle: {
				normal: {
					color: '#FF8A26', //标志颜色
				}
			},
			// 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
			data: [
				
				[108.841063,34.210337, 100],
				[108.837475,34.20941, 100],
				[108.842002,34.209903, 100],
				[108.837813,34.208439, 100],
				[108.842142,34.208922, 100],
				[108.84366,34.20906, 100],
				[108.844309,34.209188, 100]
			],
			rippleEffect: {
				scale: 6,
				brushType: "stroke"
			},
			hoverAnimation: true, //是否开启鼠标 hover 的提示动画效果。
		};
		for (let i = 0; i < 50; i++) {
			nomal_2.data.push([108.839+Math.random(10)/500.0,34.208 + Math.random(10)/500.0, 100]);
		}
		let nomal_3 = {
			name:'地面灯',
			type: 'effectScatter',
			zlevel: 5,
			// 使用百度地图坐标系
			coordinateSystem: 'amap',
			//设置图形 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
			// symbol: 'image://http://localhost:3000/src/assets/video.png',
			symbol: 'roundRect',
			// //标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10
			symbolSize: [10, 10],
			itemStyle: {
				normal: {
					color: '#FF5722', //标志颜色
				}
			},
			// 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
			data: [
				[108.841589,34.210311, 100],
				[108.841525,34.210435, 100],
				[108.84153,34.21028, 100],
				[108.841643,34.210586, 100]
			],
			rippleEffect: {
				scale: 6,
				brushType: "stroke"
			},
			hoverAnimation: true, //是否开启鼠标 hover 的提示动画效果。
		};
		for (let i = 0; i < 50; i++) {
			nomal_3.data.push([108.838+Math.random(10)/700.0,34.2085 + Math.random(10)/800.0, 100]);
		}

		let option = {
			amap: {
				rotateEnable: true,
				pitchEnable: true,
				pitch: 0,
				showIndoorMap: true,
				showLabel: true,
				rotation: 0,
				// 3D模式，无论你使用的是1.x版本还是2.x版本，都建议开启此项以获得更好的渲染体验
				viewMode: '3D',
				// 高德地图支持的初始化地图配置
				// 高德地图初始中心经纬度
				center: [108.840763,34.209887],
				// 高德地图初始缩放级别
				zoom: 17.3,
				// 是否开启resize
				resizeEnable: true,
				// 自定义地图样式主题
				// features: ['bg', 'point', 'road'],
				mapStyle: 'amap://styles/darkblue',
				// 移动过程中实时渲染 默认为true 如数据量较大 建议置为false
				renderOnMoving: true,
				// ECharts 图层的 zIndex 默认 2000
				// 从 v1.9.0 起 此配置项已被弃用 请使用 `echartsLayerInteractive` 代替
				echartsLayerZIndex: 2019,
				// 设置 ECharts 图层是否可交互 默认为 true
				// 设置为 false 可实现高德地图自身图层交互
				// 此配置项从 v1.9.0 起开始支持
				echartsLayerInteractive: true,
				// 是否启用大数据模式 默认为 false
				// 此配置项从 v1.9.0 起开始支持
				largeMode: false,
				// 说明：如果想要添加卫星、路网等图层
				// 暂时先不要使用layers配置，因为存在Bug
				// 建议使用amap.add的方式，使用方式参见最下方代码
			},
			legend: [{
			    orient: 'vertical',
			    right: '10vh',
			    bottom: 'center',
			    align: 'left',
			    itemGap: 10,
			    textStyle: {
			        color: '#fff',
			        fontSize: "1.4rem",
			    },
			    //图例标记的图形高度
			    itemHeight: 20,
			    //图例标记的图形宽度
			    itemWidth: 20
			}],
			series: [nomal_1,nomal_2,nomal_3]
		}
		// 使用刚指定的配置项和数据显示图表。
		let mapchart = $echarts.init(document.getElementById(ele));
		mapchart.setOption(option);

		// 获取 ECharts 高德地图组件
		let amapComponent = mapchart.getModel().getComponent('amap');
		// 获取高德地图实例，使用高德地图自带的控件(需要在高德地图js API script标签手动引入)
		let amap = amapComponent.getAMap();
		// 添加控件
		amap.addControl(new AMap.Scale());
		amap.addControl(new AMap.ToolBar());
		amap.addControl(new AMap.ControlBar());
		// 禁用 ECharts 图层交互，从而使高德地图图层可以点击交互
		// amapComponent.setEChartsLayerInteractive(false);

		let buildingLayer = new AMap.Buildings({
			zIndex: 130,
			merge: false,
			sort: false,
			// opacity:1,	
			// heightFactor:	Number	高度比例系数，可控制3D视图下的楼块高度
			zooms: [17, 20]
		});
		let options = {
			hideWithoutStyle: false, //是否隐藏设定区域外的楼块
			areas: [{ //围栏1
				//visible:false,//是否可见
				rejectTexture: false, //是否屏蔽自定义地图的纹理
				color1: 'fac858ff', //楼顶颜色
				color2: 'FF5722ff', //楼面颜色
				path: [
					[108.837073,34.211396],
					[108.84101,34.211396],
					[108.841826,34.211103],
					[108.844068,34.211041],
					[108.84424,34.210269],
					[108.843027,34.210216],
					[108.843049,34.209089],
					[108.844379,34.209248],
					[108.844626,34.207838],
					[108.837158,34.207917],
					[108.836998,34.209887],
					[108.83704,34.211378],
					[108.837073,34.211396]
				]
			}]
		};
		buildingLayer.setStyle(options); //此配色优先级高于自定义mapStyle

		amap.setLayers([new AMap.TileLayer(), buildingLayer]);

		let polygon = new AMap.Polygon({
			path: options.areas[0].path,
			strokeColor: "#7b2cff",
			strokeWeight: 6,
			strokeOpacity: 0.1,
			fillOpacity: 0.2,
			fillColor: '#7b2cff',
			zIndex: 50,
			bubble: true,
		});
		amap.add([polygon]);
	},
	initCarMapChart: function(  ele)  {
		let nomal_1 = {
			name:'停车场01',
			type: 'effectScatter',
			zlevel: 5,
			// 使用百度地图坐标系
			coordinateSystem: 'amap',
			//设置图形 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
			// symbol: 'image://http://localhost:3000/src/assets/video.png',
			symbol: 'pin',
			// //标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10
			symbolSize: [20, 20],
			itemStyle: {
				normal: {
					color: '#fac858', //标志颜色
				}
			},
			// 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
			data: [
				[108.837888,34.211216, 100]
			],
			rippleEffect: {
				scale: 6,
				brushType: "stroke"
			},
			hoverAnimation: true, //是否开启鼠标 hover 的提示动画效果。
		};
		
		let nomal_2 = {
			name:'停车场02',
			type: 'effectScatter',
			zlevel: 5,
			// 使用百度地图坐标系
			coordinateSystem: 'amap',
			//设置图形 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
			// symbol: 'image://http://localhost:3000/src/assets/video.png',
			symbol: 'pin',
			// //标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10
			symbolSize: [20, 20],
			itemStyle: {
				normal: {
					color: '#FF5252', //标志颜色
				}
			},
			// 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
			data: [
				[108.837483,34.210385, 100]
			],
			rippleEffect: {
				scale: 6,
				brushType: "stroke"
			},
			hoverAnimation: true, //是否开启鼠标 hover 的提示动画效果。
		};
		
		let nomal_3 = {
			name:'停车场03',
			type: 'effectScatter',
			zlevel: 5,
			// 使用百度地图坐标系
			coordinateSystem: 'amap',
			//设置图形 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
			// symbol: 'image://http://localhost:3000/src/assets/video.png',
			symbol: 'pin',
			// //标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10
			symbolSize: [20, 20],
			itemStyle: {
				normal: {
					color: '#00FAC1', //标志颜色
				}
			},
			// 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
			data: [
				[108.839426,34.209116, 100]
			],
			rippleEffect: {
				scale: 6,
				brushType: "stroke"
			},
			hoverAnimation: true, //是否开启鼠标 hover 的提示动画效果。
		};
		
		let nomal_4 = {
			name:'停车场04',
			type: 'effectScatter',
			zlevel: 5,
			// 使用百度地图坐标系
			coordinateSystem: 'amap',
			//设置图形 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
			// symbol: 'image://http://localhost:3000/src/assets/video.png',
			symbol: 'pin',
			// //标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10
			symbolSize: [20, 20],
			itemStyle: {
				normal: {
					color: '#ff72cb', //标志颜色
				}
			},
			// 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
			data: [
				[108.843526,34.208016, 100]
			],
			rippleEffect: {
				scale: 6,
				brushType: "stroke"
			},
			hoverAnimation: true, //是否开启鼠标 hover 的提示动画效果。
		};
		let option = {
			amap: {
				rotateEnable: true,
				pitchEnable: true,
				pitch: 0,
				showIndoorMap: true,
				showLabel: true,
				rotation: 0,
				// 3D模式，无论你使用的是1.x版本还是2.x版本，都建议开启此项以获得更好的渲染体验
				viewMode: '3D',
				// 高德地图支持的初始化地图配置
				// 高德地图初始中心经纬度
				center: [108.840763,34.209887],
				// 高德地图初始缩放级别
				zoom: 17.3,
				// 是否开启resize
				resizeEnable: true,
				// 自定义地图样式主题
				// features: ['bg', 'point', 'road'],
				mapStyle: 'amap://styles/darkblue',
				// 移动过程中实时渲染 默认为true 如数据量较大 建议置为false
				renderOnMoving: true,
				// ECharts 图层的 zIndex 默认 2000
				// 从 v1.9.0 起 此配置项已被弃用 请使用 `echartsLayerInteractive` 代替
				echartsLayerZIndex: 2019,
				// 设置 ECharts 图层是否可交互 默认为 true
				// 设置为 false 可实现高德地图自身图层交互
				// 此配置项从 v1.9.0 起开始支持
				echartsLayerInteractive: true,
				// 是否启用大数据模式 默认为 false
				// 此配置项从 v1.9.0 起开始支持
				largeMode: false,
				// 说明：如果想要添加卫星、路网等图层
				// 暂时先不要使用layers配置，因为存在Bug
				// 建议使用amap.add的方式，使用方式参见最下方代码
			},
			legend: [{
			    orient: 'vertical',
			    right: '10vh',
			    bottom: 'center',
			    align: 'left',
			    itemGap: 10,
			    textStyle: {
			        color: '#fff',
			        fontSize: "1.4rem",
			    },
			    //图例标记的图形高度
			    itemHeight: 20,
			    //图例标记的图形宽度
			    itemWidth: 20
			}],
			series: [nomal_1,nomal_2,nomal_3,nomal_4]
		}
		// 使用刚指定的配置项和数据显示图表。
		let mapchart = $echarts.init(document.getElementById(ele));
		mapchart.setOption(option);

		// 获取 ECharts 高德地图组件
		let amapComponent = mapchart.getModel().getComponent('amap');
		// 获取高德地图实例，使用高德地图自带的控件(需要在高德地图js API script标签手动引入)
		let amap = amapComponent.getAMap();
		// 添加控件
		amap.addControl(new AMap.Scale());
		amap.addControl(new AMap.ToolBar());
		amap.addControl(new AMap.ControlBar());
		// 禁用 ECharts 图层交互，从而使高德地图图层可以点击交互
		// amapComponent.setEChartsLayerInteractive(false);

		let buildingLayer = new AMap.Buildings({
			zIndex: 130,
			merge: false,
			sort: false,
			// opacity:1,	
			// heightFactor:	Number	高度比例系数，可控制3D视图下的楼块高度
			zooms: [17, 20]
		});
		let options = {
			hideWithoutStyle: false, //是否隐藏设定区域外的楼块
			areas: [{ //围栏1
				//visible:false,//是否可见
				rejectTexture: false, //是否屏蔽自定义地图的纹理
				color1: 'fac858ff', //楼顶颜色
				color2: 'FF5722ff', //楼面颜色
				path: [
					[108.837073,34.211396],
					[108.84101,34.211396],
					[108.841826,34.211103],
					[108.844068,34.211041],
					[108.84424,34.210269],
					[108.843027,34.210216],
					[108.843049,34.209089],
					[108.844379,34.209248],
					[108.844626,34.207838],
					[108.837158,34.207917],
					[108.836998,34.209887],
					[108.83704,34.211378],
					[108.837073,34.211396]
				]
			}]
		};
		buildingLayer.setStyle(options); //此配色优先级高于自定义mapStyle

		amap.setLayers([new AMap.TileLayer(), buildingLayer]);

		let polygon = new AMap.Polygon({
			path: options.areas[0].path,
			strokeColor: "#7b2cff",
			strokeWeight: 6,
			strokeOpacity: 0.1,
			fillOpacity: 0.2,
			fillColor: '#7b2cff',
			zIndex: 50,
			bubble: true,
		});
		amap.add([polygon]);
		
		polygon = new AMap.Polygon({
			path: [
				[108.837173,34.211396],
				[108.837173,34.210906],
				[108.839426,34.210906],
				[108.839426,34.211396],
				[108.837173,34.211396]
			],
			strokeColor: "#fff",
			strokeWeight: 1,
			strokeOpacity: 0.1,
			fillOpacity: 0.2,
			fillColor: '#ff5353',
			zIndex: 50,
			bubble: true,
		});
		amap.add([polygon]);
		for(let i=0;i<20;i++){
			for(let j=0;j<4;j++){
				let color = "#0bfdab";
				if(i%2==0 && j%2==1){
					color = "#ff5353";
				}
				polygon = new AMap.Polygon({
					path: [
						[108.837173+i/10000+0.000001,34.211396-j/10000],
						[108.837173+i/10000+0.000001,34.211396-(j+1)/10000],
						[108.837173+(i+1)/10000,34.211396-(j+1)/10000],
						[108.837173+(i+1)/10000,34.211396-j/10000],
						[108.837173+i/10000+0.000001,34.211396-j/10000]
					],
					strokeColor: '#fff',
					strokeWeight: 1,
					strokeOpacity: 0.6,
					fillOpacity: 0.5,
					fillColor: color,
					zIndex: 51,
					bubble: true,
				});
				amap.add([polygon]);
			}
		}
		
		polygon = new AMap.Polygon({
			path: [
				[108.837273,34.210396],
				[108.837273,34.210016],
				[108.839526,34.210016],
				[108.839526,34.210296],
				[108.837273,34.210396]
			],
			strokeColor: "#fff",
			strokeWeight: 1,
			strokeOpacity: 0.1,
			fillOpacity: 0.2,
			fillColor: '#ff5353',
			zIndex: 50,
			bubble: true,
		});
		amap.add([polygon]);
		
		polygon = new AMap.Polygon({
			path: [
				[108.838273,34.209396],
				[108.838273,34.209116],
				[108.839526,34.209016],
				[108.839526,34.209296],
				[108.838273,34.209396]
			],
			strokeColor: "#febe13",
			strokeWeight: 1,
			strokeOpacity: 0.1,
			fillOpacity: 0.2,
			fillColor: '#febe13',
			zIndex: 50,
			bubble: true,
		});
		amap.add([polygon]);
		
		polygon = new AMap.Polygon({
			path: [
				[108.841273,34.208396],
				[108.841273,34.208016],
				[108.843526,34.208016],
				[108.843526,34.208396],
				[108.841273,34.208396]
			],
			strokeColor: "#00CAFF",
			strokeWeight: 1,
			strokeOpacity: 0.1,
			fillOpacity: 0.2,
			fillColor: '#00CAFF',
			zIndex: 50,
			bubble: true,
		});
		amap.add([polygon]);
		
		for(let i=0;i<24;i++){
			for(let j=0;j<3;j++){
				let color = "#0bfdab";
				if(i%2==0 && j%2==1){
					color = "#ff5353";
				}
				polygon = new AMap.Polygon({
					path: [
						[108.841273+i/10000+0.000001,34.208396-j/10000],
						[108.841273+i/10000+0.000001,34.208396-(j+1)/10000],
						[108.841273+(i+1)/10000,34.208396-(j+1)/10000],
						[108.841273+(i+1)/10000,34.208396-j/10000],
						[108.841273+i/10000+0.000001,34.208396-j/10000]
					],
					strokeColor: '#fff',
					strokeWeight: 1,
					strokeOpacity: 0.6,
					fillOpacity: 0.5,
					fillColor: color,
					zIndex: 51,
					bubble: true,
				});
				amap.add([polygon]);
			}
		}
	},
	initPieChart: function(option, category, values)  {
		let datas = [];
		category.forEach((item, index) => {
			datas.push({
				value: values[index],
				name: item
			});
		});
		let option_ = {
			color:config.colors,
			xAxis:{
				show:false
			},
			yAxis:{
				show:false
			},
			legend:{
				right:'10',
				y:'center',
				data:category,
				orient :'vertical',
				textStyle:{
					color:'#fff'
				},
				itemGap:10
			},
			series: [{
				name: '告警级别分布',
				type: 'pie',
				center:['40%','50%'],
				radius: ['85%', '65%'],
				avoidLabelOverlap: true,
				itemStyle: {
					borderRadius: 15,
					borderColor: 'rgba(200,200,200,0.3)',
					borderWidth: 0,
					shadowColor: 'rgba(200, 200, 200, 0.5)',
					shadowBlur: 5
				},
				label: {
					show: true,
					color:'#fff',
					position: 'outside',
					fontSize:14,
					textBorderWidth:0,
					// textShadowBlur:0
				},
				labelLine:{
					show:true,
					length:20,
					length2:30,
					lineStyle:{
						width:2
					}
				},
				data: datas
			}]
		};
		for (let key in option_) {
			option[key] = option_[key];
		}
	},
	initPieFullChart: function(option, category, values)  {
		let datas = [];
		category.forEach((item, index) => {
			datas.push({
				value: values[index],
				name: item
			});
		});
		let option_ = {
			color:config.colors,
			xAxis:{
				show:false
			},
			yAxis:{
				show:false
			},
			legend:{
				right:'10',
				y:'center',
				data:category,
				orient :'vertical',
				textStyle:{
					color:'#fff'
				},
				itemGap:10
			},
			series: [{
				name: '告警级别分布',
				type: 'pie',
				center:['35%','50%'],
				// radius: ['85%', '15%'],
				avoidLabelOverlap: true,
				selectedOffset:20,
				roseType:'area',
				itemStyle: {
					borderRadius: 10,
					borderColor: 'rgba(200,200,200,0.3)',
					borderWidth: 0,
					shadowColor: 'rgba(200, 200, 200, 0.5)',
					shadowBlur: 5
				},
				label: {
					show: true,
					color:'#fff',
					position: 'outside',
					fontSize:'1.4rem',
					textBorderWidth:0,
					// textShadowBlur:0
				},
				labelLine:{
					show:true,
					length:10,
					length2:20,
					lineStyle:{
						width:1
					}
				},
				data: datas
			}]
		};
		for (let key in option_) {
			option[key] = option_[key];
		}
	},
	initBarChart: function(option, category, values, color, title) {
		// let title_ = utils.createChartTitle(title);
		let option_ = {
			backgroundColor: '#000000',
			// title:title_,
			grid: this.createChartGaid('40vh', '10vh', "15vh", "20vh"),
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
						color: this.getChartXColor()
					}
				},
				axisLabel: {
					color: this.getChartXTextColor()
				},
				axisTick: {
					show: false
				},
				splitLine: {
					show: false
				},
				data: category,
				type: 'category',
			},
			yAxis: {
				axisLabel: {
					color: this.getChartYTextColor(),
				},
				axisLine: {
					show: true,
					lineStyle: {
						color: this.getChartXColor()
					}
				},
				splitLine: {
					lineStyle: {
						color: this.getChartYColor(),
						type: 'dashed'
					},
				},
				name: '',
			},
			series: [{
				name: "打分",
				data: values,
				type: 'bar',
				barWidth: '20vh',
				itemStyle: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: color + 'ff',
						},
						{
							offset: 1,
							color: color + 'bb',
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
			option[key] = option_[key];
		}
	},
	initLineChart: function(option, category, values, color)  {
		let option_ = {
			backgroundColor: '#000000',
			grid: this.createChartGaid('40vw', null, "15vh", "20vh"),
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
						color: this.getChartXColor()
					}
				},
				axisLabel: {
					color: this.getChartXTextColor()
				},
				axisTick: {
					show: false
				},
				splitLine: {
					show: false
				},
				smooth:true,
				data: category,
				boundaryGap: false,
				type: 'category',
			},
			yAxis: {
				axisLabel: {
					color: this.getChartYTextColor(),
				},
				axisLine: {
					show: true,
					lineStyle: {
						color: this.getChartXColor()
					}
				},
				splitLine: {
					lineStyle: {
						color: this.getChartYColor(),
						type: 'dashed'
					},
				},
				name: '',
			},
			series: [{
				name: "打分",
				data: values,
				type: 'line',
				itemStyle: {
					normal: {
						color: color, //改变折线点的颜色
						lineStyle: {
							width: 1,
							color: color // 线条颜色
						}
					}
				},
				lineStyle: {
					width: 1,
					color: color
				},
				areaStyle: {
					//折线图颜色半透明
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [{
							offset: 0,
							color: color + 'ff' // 0% 处的颜色
						}, {
							offset: 1,
							color: color + '00' // 0% 处的颜色
						}],
						global: false // 缺省为 false
					}
				},
				label: {
					show: true,
					color: '#ddd',
					position: 'top'
				}
			}]
		};
		for (let key in option_) {
			option[key] = option_[key];
		}
	},
	initRadarChart:function(option,category,values){
		var indicator = [];
		category.forEach((item,index)=>{
			indicator.push({
				text: item,
				min: 0,
				max: 1000
			});
		});
		let option_ = {
			hoverAnimation: true,
			tooltip: {
				trigger: 'item',
			},
			radar: {
				nameGap: 6, // 图中工艺等字距离图的距离
				radius: '80%',
				center: ['50%', '50%'],
				name: {
					textStyle: {
						color: '#fff',
						fontSize: 14,
					},
				},
				indicator: indicator,
				axisLine: {
					//指向外圈文本的分隔线样式
					lineStyle: {
						color: 'rgba(245, 166, 35, 0.3)',
					},
				},
				splitLine: {
					lineStyle: {
						color: 'rgba(245, 166, 35, 0.3)', // 分隔线颜色
						width: 1, // 分隔线线宽
					},
				},
				splitArea: {
					// 坐标轴在 grid 区域中的分隔区域，默认不显示。
					show: true,
					areaStyle: {
						// 分隔区域的样式设置。
						color: ['rgba(255,255,255,0)', 'rgba(255,255,255,0)'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
					}
				}
			},
			series: [{
				type: 'radar',
				z: 1,
				data: [{ 
					value: values,
				}],
				name: '告警数量',
				symbol: 'circle',
				symbolSize: 5,
				areaStyle: {
					normal: {
						color: 'rgba(245, 166, 35, 0.2)',
					},
				},
				itemStyle: {
					color: 'rgba(245, 166, 35, 1)',
					borderColor: 'rgba(245, 166, 35, 0.3)',
					borderWidth: 10,
				},
				lineStyle: {
					normal: {
						type: 'dashed',
	
						color: 'rgba(245, 166, 35, 1)',
						width: 1,
					},
				},
			}],
		};
		for (let key in option_) {
			option[key] = option_[key];
		}
	},
	initPictorialBar:function(option,category,values){
		let option_ = {
			backgroundColor: '#000000',
			grid: this.createChartGaid('40vh', '10vh', "20vh", "30vh"),
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
						color: this.getChartXColor()
					}
				},
				axisLabel: {
					color: this.getChartXTextColor()
				},
				axisTick: {
					show: false
				},
				splitLine: {
					show: false
				},
				data: category,
				type: 'category',
			},
			yAxis: {
				axisLabel: {
					color: this.getChartYTextColor(),
				},
				axisLine: {
					show: true,
					lineStyle: {
						color: this.getChartXColor()
					}
				},
				splitLine: {
					lineStyle: {
						color: this.getChartYColor(),
						type: 'dashed'
					},
				},
				name: '',
			},
			series: [{
				type: 'pictorialBar',
				itemStyle: {
					normal: {
						color: '#FF5252',
					},
				},
				symbolRepeat: 'fixed',
				symbolMargin: 4,
				symbol: 'roundRect',
				symbolClip: true,
				symbolSize: [20, 8],
				symbolPosition: 'start',
				symbolOffset: [0, -1],
				barBorderRadius: 20,
				data: values,
				z: 0,
				zlevel: 8,
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
			option[key] = option_[key];
		}
	}
}
