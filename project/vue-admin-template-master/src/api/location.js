import request from '@/utils/request'
// 获取地址
export function getLocation() {
  return request({
    url: '/showAddresses',
    method: 'get',
  })
}
// 添加地址
export function addLocation(data) {
    return request({
      url: '/insertOneAddress',
      method: 'post',
      data
    })
}
// 删除地址
export function delLocation(params) {
    return request({
      url: '/delOneAddress',
      method: 'get',
      params
    })
}

