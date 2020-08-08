import request from '@/tool/utils/request.js'


const config = new Object


// 查询历史开奖
config.getHistoryOpenCode = params => request.globalRequest('/getHistoryOpenCode.json', 'POST', params, 2)

// 查询玩法列表
config.getPlayTypeList = params => request.globalRequest('/getPlayTypeList.json', 'POST', params, 2)

// 投注
config.bet = params => request.globalRequest('/bet.json', 'POST', params, 2)

// 查询最新开奖时间
config.getNewOpentime = params => request.globalRequest('/getNewOpentime.json', 'POST', params, 2)

// 上传客户端环境信息
config.uploadEnvInfo = params => request.globalRequest('/uploadEnvInfo.json', 'POST', params, 2)

// 查询个人信息
config.getMyInfo = params => request.globalRequest('/getMyInfo.json', 'POST', params, 2)

// 获取玩法赔率列表
config.getOddsList = params => request.globalRequest('/getOddsList.json', 'POST', params, 2)

// 获取玩法说明
config.getPlayTypeDesc = params => request.globalRequest('/getPlayTypeDesc.json', 'POST', params, 2)

// 查询个人投注记录
config.getMyBetList = params => request.globalRequest('/getMyBetList.json', 'POST', params, 2)

// 获取游戏列表
config.getGameList = params => request.globalRequest('/getGameList.json', 'POST', params, 2)

// 获取彩种系列
config.getLotterySeries = params => request.globalRequest('/getLotterySeries.json', 'POST', params, 2)

export default config