
// 显示环境信息
console.log(process.env);

let serverURL

let base = {
    // test: 'xxxxxxxxxxx',
}

if(process.env.NODE_ENV === 'development'){
    // 本地地址
	serverURL = '/dev'

}else{
    // 线上地址
    serverURL = 'http://cpapi.wz.nf:166/vueapi/v1'
}

export default serverURL

export {
    base
}
