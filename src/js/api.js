import axios from 'axios';
const config = {
	// baseURL: process.env.baseURL
	baseURL: 'http://localhost:3000/data/',
	timeout: 1000,
	headers: {
		'Content-Type': 'application/json',
	},
};
const api = axios.create(config);

// 默认 post 请求，使用 application/json 形式
api.defaults.headers.post['Content-Type'] = 'application/json';

/**
 * 接口地址配置
 */
const server_urls = {
	//地图数据接口
	map_url: 'mapdata.json',
};

export default {
	name: "api",
	loadMapData:(callback)=>{
		axios({
			method: 'get',
			url: config.baseURL + server_urls.map_url,
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
			},
		}).then(response => {
			callback && callback(response);
		})
	}
}
