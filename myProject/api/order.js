import service from "@/utils/request.js";

// 结算，生成订单信息
export function confirm(data){
	return service({
		url:"/p/order/confirm",
		method:"post",
		data:data
	})
}

// 提交订单 返回支付流水号
export function submit(data){
	return service({
		url:"/p/order/submit",
		method:"post",
		data:data
	})
}

// 根据订单号进行支付
export function pay(data){
	return service({
		url:"/p/order/pay",
		method:"post",
		data:data
	})
}

// 获取我的订单
export function orderCount(){
	return service({
		url:"/p/myOrder/orderCount",
		method:"get"
	})
}