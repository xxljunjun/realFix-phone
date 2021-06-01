import request from "../../common/request.js";

//function service(){

// }
//请求天气
export function getWeather(params) {
	return request({
		url: `/he/freeweather?city=${params.city}&appkey=${params.appkey}`,
		method: 'GET',
	})
}