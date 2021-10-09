import axios from '../utils/axios'

export async function getUserInfo(params: any) {
  return axios({
    url: '/common/getUserInfo',
    method: 'get',
    params,
    title: '获取用户信息',
  })
}

export async function checkVersion(params: any) {
  return axios({
    url: '/api/checkVersion',
    method: 'get',
    params,
    title: '获取当前版本',
  })
}
