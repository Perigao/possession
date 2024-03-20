import request from '../utils/request';

export function sendEmail(data) {
  return request.ajaxPost('/sendEmail', data);
}

export function register(data) {
  return request.ajaxPost('/register', data);
}

export function login(data) {
  return request.ajaxPost('/login', data);
}