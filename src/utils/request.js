import axios from 'axios';
import storageService from '../service/storageService';

const service = axios.create({
    // process为node.js进程中全局变量
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 5000,
});

// 动态请求token
service.interceptors.request.use((config) => {
    Object.assign(config.headers, { Authorization: `Bearer ${storageService.get(storageService.USER_TOKEN)}` })
    return config;
}, (error) => {
    return Promise.reject(error)
})

export default service;