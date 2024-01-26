import request from '@/utils/request';

// 用户注册
const register = ({ name, telephone, password }) => {
    return request.post('auth/register', { name, telephone, password });
};

// 获取用户信息
const info = () => {
    return request.get('auth/info');
};

// 用户登录
const login = ({ telephone, password }) => {
    return request.post('auth/login', { telephone, password });
};

// 轨道
const trailinfo = ({ controller_type }) => {
    return request.get('trail/info', { params: { Controller_type: controller_type }});
};

// 模块
const moduleinfo = ({ controller_type }) => {
    return request.get('module/info', { params: { Controller_type: controller_type }});
};

// 运输车
// 样本
const carinfo = () => {
    return request.get('car/info');
};

// 布局
const layoutinfo = () => {
    return request.get('layout/info');
};

export default {
    register,
    info,
    login,
    trailinfo,
    moduleinfo,
    carinfo,
    layoutinfo,
}