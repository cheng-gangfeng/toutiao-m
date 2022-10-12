//用户请求模块
import request from '../utils/request'
export const login = data => {
    return request({
        method: 'POST',
        url: 'authorizations',
        data
    })
}