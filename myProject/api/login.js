import service from "../utils/request.js"

// 登录
export function toLogin(data){
	return service({
		url:'/login',
		method:'post',
		data
	})
}

// 注册
export function toRegister(data){
	return service({
		url:'/user/register',
		method:'post',
		data
	})
}
