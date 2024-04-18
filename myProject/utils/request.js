import Vue from 'vue'
import axios from 'axios'
import { Promise } from "core-js"
import adapter from 'axios-miniprogram-adapter'
// import {Notify} from '../wxcomponents/dist/notify/notify'
// 设置基地址
const request = axios.create({
    // 运行到浏览器时，把这一行注释回来，VUE_APP_BASE_API是在vue.config.js中配置的，官网有
    // baseURL: process.env.VUE_APP_BASE_API,
    // 运行到浏览器时下面一行注释掉
    baseURL: 'http://shop-api.edu.koobietech.com',
    // 在微信开发者工具环境中，axios，http是发不出去的，没有跨域，vue.config.js文件也是无效的
    // 基于axios-miniprogram-adapter包给axios中添加一个适配器
    // 运行到浏览器时，下面一行注释掉，axios时可以在浏览器中正常使用的，不需要适配器
    adapter: adapter,
})
axios.defaults.adapter = function(config) {
    return new Promise((resolve, reject) => {
        console.log(config)
        var settle = require('axios/lib/core/settle');
        var buildURL = require('axios/lib/helpers/buildURL');
        uni.request({
            method: config.method.toUpperCase(),
            url: config.baseURL + buildURL(config.url, config.params, config.paramsSerializer),
            header: config.headers,
            data: config.data,
            dataType: config.dataType,
            responseType: config.responseType,
            sslVerify: config.sslVerify,
            complete: function complete(response) {
                response = {
                    data: response.data,
                    status: response.statusCode,
                    errMsg: response.errMsg,
                    header: response.header,
                    config: config
                }
                settle(resolve, reject, response);
            }
        })
    })
}


// request拦截器,在请求之前做一些处理
request.interceptors.request.use(
	config => {
		const token = uni.setStorageSync("token")
		// console.log(config, '请求拦截成功')
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

//配置成功后的拦截器
request.interceptors.response.use(res => {
	const data = res.data;
	if (data.code == "00000") {
		return data.data
	}

	if (data.code === "A00004") {
		// Notify('请登录后操作!')
		uni.navigateTo({
			url:"/pages/login/login"
		})
		return Promise.reject("当前页面需要登录!")
	}
	// Notify(data.msg)
	return Promise.reject(data.msg)
}, error => {

	return Promise.reject(error)
})




export default request
