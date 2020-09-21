import Vue from "vue";

import serverUrl, { base } from '../common/config.js'
// const _this = Vue.prototype

const request = {}

    // application/x-www-form-urlencoded
function contentType(data){
    var arr = []
    for (var item in data) {
        var str = `${item}=${data[item]}`
        arr.push(str)
    }
    return arr.join('&')
}

request.globalRequest = (url, method, data = {}, type, power) => {

    data = {...data, ...base}

    if(type==3){
        url = url  + '?' + contentType(data);
    }

    const headers = {
        'Content-Type': "text/plain",
        'Accept': "*/*",
    }

    let form = new FormData()

    for (var item in data){
        form.append(item, data[item])
    }

    let formData = null

    switch (type) {
        case 1:
            formData = form
            break;
        case 2:
            formData = JSON.stringify(data)
            headers['content-type'] = 'application/json;charset=UTF-8'
            break;
        default:
            formData = JSON.stringify({})
            break;
    }
    if (power){
        let result = window.localStorage.getItem('dd_user')
        headers['x2-token'] = result ? JSON.parse(result)['token'] : false
    }
    const machiningData = {
        body: formData,
        headers: headers,
        mode: "cors",
        // mode: "no-cors", // 如果不使世界跨域通过的话， 设置为 no-cors 但是responnse 中是没有值得
        cache: "force-cache",
    }
    if (method=='POST') machiningData.method = 'POST'
    return new Promise(function(resove, reject) {
        fetch(serverUrl.concat(url), machiningData)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            resove(myJson)
        })
        .catch(error => {
            reject(error)
        })
    })
}

export default request
