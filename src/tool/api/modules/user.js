import request from '@/tool/utils/request.js'


const config = new Object

// 查询个人信息
config.getMyInfo = params => request.globalRequest('/getMyInfo.json', 'POST', params, 2)

export default config