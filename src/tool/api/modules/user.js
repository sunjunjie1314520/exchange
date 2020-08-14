import request from '@/tool/utils/request.js'


const config = new Object


// 用户基本信息
config.userinfo = params => request.globalRequest(`/User/video`, 'POST', params, 3)

// 出售音豆
config.product_save = params => request.globalRequest(`/product/save`, 'POST', params, 3)

// 买入音豆
config.order_save = params => request.globalRequest(`/order/save`, 'POST', params, 3)


// 绑定账户信息
config.bind_save = params => request.globalRequest(`/order/bind`, 'POST', params, 3)

// 订单记录
config.orderRecord = params => request.globalRequest(`/order/bind`, 'POST', params, 3)

export default config

