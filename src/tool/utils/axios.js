import axios from "axios";

import serverUrl, { base } from '../common/config.js'

var instance = axios.create({
    baseURL: '/dev',
    timeout: 1000,
    headers: {
        'Content-Type':"text/plain",
        'Accept' :"*/*",
    },
    mode: "cors",
    // mode: "no-cors", // 如果不使世界跨域通过的话， 设置为 no-cors 但是responnse 中是没有值得
    cache: "force-cache",
});


const request = {}

request.globalRequest = (url, method, data = {}, type, power) => {

    instance[method](url)

}
