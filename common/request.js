//把配置项单独处理

import store from '../store/index.js'; //vuex  
let server_url = ' ';//请求地址
let token = ' '; //凭证
// process.env.NODE_ENV === 'development' ? '192.168.0.1' : 'http://***/api'; //环境配置
function service(options = {}) {
	store.state.token && (token = store.state.token); //从vuex中获取登录凭证
	options.url = `${server_url}${options.url}`;
	//配置请求头
	options.header = {
		'content-type': 'application/x-www-form-urlencoded',
		'accessToken': `${token}` //Bearer 
	};

	return new Promise((resolved, rejected) => {
		//成功
		options.success = (res) => {

			// if (Number(res.data.code) == 200) {  //请求成功
			// 	resolved(res.data.data);
			// } else {
			// 	uni.showToast({
			// 		icon: 'none',
			// 		duration: 3000,
			// 		title: `${res.data.msg}`
			// 	});
			// 	rejected(res.data.msg);//错误
			// }

		}
		//错误
		options.fail = (err) => {
			rejected(err); //错误
		}
		uni.request(options);

	});
}
export default service;