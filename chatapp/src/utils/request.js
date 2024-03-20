import axios from 'axios';
import axiosRetry from 'axios-retry';

const ajax = axios.create({
  baseURL: '/api',
  timeout: 30000,
  withCredentials: false
});

axiosRetry(ajax, {
  retries: 3,
  retryDelay: retryConst => {
    return retryConst * 1000;
  }
});

ajax.interceptors.request.use(async config => {
  const access = sessionStorage.getItem('access');
  config.headers.Authorization = 'Bearer ' + access;
  return config;
});

ajax.interceptors.response.use(async response => {
  return response.data;
});

const ajaxPost = (url, data) => {
  return ajax.post(url, data);
};

const ajaxGet = url => {
  return ajax.get(url);
};

const ajaxPut = (url, data) => {
  return ajax.put(url, data);
};

const ajaxDelete = (url, data) => {
  return ajax.delete(url, data);
};

export default { ajaxGet, ajaxPost, ajaxPut, ajaxDelete };
