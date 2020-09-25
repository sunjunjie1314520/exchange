import request from '@/tool/utils/request.js'


const config = new Object


// 用户基本信息
config.userinfo = params => request.globalRequest(`/trade_ase/user_info`, 'POST', params, 3, 1)

// 出售音豆
config.trade_sellr = params => request.globalRequest(`/trade_ase/sellr`, 'POST', params, 3, 1)

// 买入音豆
config.order_order = params => request.globalRequest(`/trade_ase/order`, 'POST', params, 3, 1)

// 买家收购订单列表
config.orderRecord = params => request.globalRequest(`/trade_ase/public_index`, 'POST', params, 3, 1)

// 出售列表
config.chuRecord = params => request.globalRequest(`/trade_ase/chuRecord`, 'POST', params, 3, 1)

// 添加银行卡保存
config.user_bank_save = params => request.globalRequest(`/user_bank/save`, 'POST', params, 3, 1)

// 信息
config.user_bank_index = params => request.globalRequest(`/user_bank/index`, 'POST', params, 3, 1)

// 首页系统信息
config.trade_index = params => request.globalRequest(`/trade_ase/index`, 'POST', params, 3, 1)

// 七牛云
config.qiniu = params => request.globalRequest(`/upload/qiniu`, 'POST', params, 3, 1)

// 变更
config.user_bank = params => request.globalRequest(`/user_bank/upd`, 'POST', params, 3, 1)

// 订单详情
config.orderDetail = params => request.globalRequest(`/user_bank/upd`, 'POST', params, 3, 1)

// 订单详情
config.sell_index = params => request.globalRequest(`/trade_ase/sell_index`, 'POST', params, 3, 1)

// 出售
config.order_detail = params => request.globalRequest(`/trade_ase/order_detail`, 'POST', params, 3, 1)

// 上传图片
config.upload_pic = params => request.globalRequest(`/trade_ase/upload_pic`, 'POST', params, 3, 1)

// 变更
config.trade_status = params => request.globalRequest(`/trade_ase/status`, 'POST', params, 3, 1)

// 登录
config.sign = params => request.globalRequest(`/Login/username_sign2`, 'POST', params, 3, 0)

// 音豆
config.record = params => request.globalRequest(`/user/record_ase`, 'POST', params, 3, 1)

export default config