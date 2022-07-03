import {
	ElMessage
} from 'element-plus'
import {
	ElMessageBox
} from 'element-plus'

export default {
	name: "utils",
	/**
	 * 保存界面配置参数
	 * @param {Object} config
	 */
	saveConfig: (config) => {
		localStorage.setItem("config", JSON.stringify(config));
	},
	showerror: (msg) => {
		ElMessage.error(msg);
	},
	showconfirm: (msg) => {
		ElMessageBox.confirm(
				msg,
				'提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
				}
			)
			.then(() => {
				ElMessage({
					type: 'success',
					message: '退出成功',
				})
			})
			.catch(() => {})
	},
	random: (max) => {
		return (Math.random(max) * max).toFixed(0);
	}
}

Date.prototype.format = function(fmt)  {
	var o = {
		"M+": this.getMonth() + 1, //月份 
		"d+": this.getDate(), //日 
		"h+": this.getHours(), //小时 
		"m+": this.getMinutes(), //分 
		"s+": this.getSeconds(), //秒 
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度 
		"S": this.getMilliseconds() //毫秒 
	};
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	}
	for (var k in o) {
		if (new RegExp("(" + k + ")").test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k])
				.length)));
		}
	}
	return fmt;
}

Date.prototype.getweektext = function(fmt)  {
	var day  = this.getDay(); //星期 
	var week = '';
	switch(day){
	case  0 :
		week  = '星期日';
		break;
	case  1 :
		week  = '星期一';
	break;
	case  2 :
		week  = '星期二';
		break;
	case  3 :
		week  = '星期三';
		break;
	case  4 :
		week  = '星期四';
		break;
	case  5 :
		week  = '星期五';
		break;
	case  6 :
		week  = '星期六';
		break; 
	}
	return week;
}