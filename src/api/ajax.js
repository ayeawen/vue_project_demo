/*
发送ajax请求的函数模块
函数返回的是promise对象

异步得到的数据不再是response, 而是data数据(result)
对请求错误进行了统一的处理, 外面使用的时候更简单, 不用再处理错误
 */

import axios from 'axios'

export default function ajax(url, data={}, method='GET') {

  return new Promise((resolve, reject) => {
    let promise

    //执行异步请求
    if (method==='GET') {
      promise = axios.get(url, {params: data})  //指定所有的query参数
    } else {
      promise = axios.post(url, data)
    }

    promise.then(response => {
      //请求成功,调用resolve
      resolve(response.data)
    }).catch(err => {
      //请求失败
      //reject(err)
      //统一处理请求错误, 外面使用async/await 不使用try来处理错误
      alert('请求错误', err.message)
    })
  })
}

