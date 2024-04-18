import service from "../utils/request.js"

// 分类信息列表
export function categoryInfo(data){
	return service({
		url:"/category/categoryInfo",
		method:"get",
		params:data
	})
}

// 商品列表信息(根据分类id获取商品列表)
export function pageProd(data){
	return service({
		url:'/prod/pageProd',
		method:'get',
		params:data
	})
}
// 商品详情信息(根据商品id获取信息)
export function prodInfo(data){
	return service({
		url:'/prod/prodInfo',
		method:'get',
		params:data
	})
}


export function isCollection(data){
	return service({
		url:"/p/user/collection/isCollection",
		method:"get",
		params:data
	})
}