import axios from 'axios'
import {BASEURL} from "./notshow";

export function request(config){
  //1.创建axios的实例
  const instance = axios.create({
    baseURL: BASEURL,
    timeout: 5000
  })
  //2.请求拦截
  instance.interceptors.request.use( config=>{
    return config  //拦截拿到config一定要传出去，不然真正请求的时候就没config了
  }, err=>{
    console.log(err)  //请求失败时才会来到此处，所以一般不到这
  })
  //2.响应拦截
  instance.interceptors.response.use(res=>{
    return res.data  //拦截之后返回data即可
  }, err=>{
    console.log(err)
  })

  //3.发送真正的网络请求
  return instance(config)
}
