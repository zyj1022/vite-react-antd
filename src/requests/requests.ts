import axios from '../utils/axios'

export async function getTest(params: any) {
  return axios({
    url: '/api/getTest',
    method: 'post',
    data: params,
    title: '接口测试',
  })
}

export async function getUser(params: any = {}) {
  return axios({
    url: '/api/getUser',
    method: 'get',
    params,
    title: '获取用户信息',
  })
}
