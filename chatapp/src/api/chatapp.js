import request from '../utils/request.js'

export function banner(){
    return request.ajaxGet('/banner');
}