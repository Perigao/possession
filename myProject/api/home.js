import service from "../utils/request.js"

// banner
export function banner(){
	return service({
		url:"/indexImgs",
		method:"get",
	})
}

// 通知
export function notice(){
	return service({
		url:"/shop/notice/noticeList",
		method:"get",
	})
}

// 商品信息
export function product(){
	return service({
		url:"/prod/tagProdList",
		method:"get",
	})
}

// 通过分组标签获取商品列表
// export function proById(data){
// 	return service({
// 		url:"/prod/prodListByTagId",
// 		method:"get",
// 		data
// 	})
// }