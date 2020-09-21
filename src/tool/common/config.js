
// 显示环境信息
console.log(process.env);

let serverURL

let base = {
    // test: 'xxxxxxxxxxx',
}

if(process.env.NODE_ENV === 'development'){
    // 本地地址
	// serverURL = '/dev'
	serverURL = 'http://hzasdbf.cn/public/index.php'
}else{
    // 线上地址
    serverURL = 'http://hzasdbf.cn/public/index.php'
}

export default serverURL

export {
    base
}
