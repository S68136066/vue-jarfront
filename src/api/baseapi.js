import request from '@/utils/request'
// 登录接口
export function login(user) {
    return request({
      url: '/user/login',
      method: 'post',
      params:{
        username:user.username,
        password:user.password
      }
    })
  }
export function getUser(username) {
    return request({
      url: '/user/selectUser',
      method: 'get',
      data: username
    })
  }