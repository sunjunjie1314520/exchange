import request from '@/tool/utils/request.js'


const config = new Object

// 查询历史开奖
config.getHistoryOpenCode = params => request.globalRequest('/getHistoryOpenCode.json', 'POST', params, 2)

export default config