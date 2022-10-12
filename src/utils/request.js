// 封装请求对象 具体请求封装成数
import axios from 'axios'
const request = axios.create({
        baseURL: '' //基础的请求路径
    })
    // 请求拦截器

// 响应拦截器
export default request