// http://www.axios-js.com/docs/#axios-create-config
import { notification } from 'antd'
import axios from 'axios'

import { loginURL } from '../constants'

export const axiosInstance = axios.create({
  timeout: 20 * 1000, // 20s
  baseURL: `${'/'}`,
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
})
// http request 拦截器
axiosInstance.interceptors.request.use(
  (req: any) => {
    Object.assign(req.headers.common, {
      //
    })
    req.headers.common['dsm-platform'] = 'pc'
    return req
  },
  (error) => Promise.reject(error),
)

axiosInstance.interceptors.response.use(
  (res: any) => {
    if (res.status == 401) {
      // 跳转登录页
      window.location.href = `${loginURL}${window.location.href}`
    }
    if (res.status == 200 && !res.data.success) {
      // 跳转登录页
      if (res.data.code == '1001') {
        window.location.href = `${loginURL}${window.location.href}`
      }
    }
    if (res.status != 200) {
      notification.error({
        message: '请求失败',
      })
      return Promise.reject(res)
    } else if (!res.data.success) {
      res.data.errCb
        ? ''
        : console.log(
            `${res.data && res.data.title ? res.data.title : ''}请求错误：${
              res.data?.msg || res.data?.message
            }`,
          )
      // notification.error({
      //   message: `${res.data && res.data.title ? res.data.title : ''}请求错误：${res.data?.msg || res.data?.message}`,
      //     duration: 2,
      //   });
      return Promise.reject(res)
    }
    return res
  },
  (error) => {
    let errText = '很抱歉，出错了~！'
    if (error instanceof Error) errText = error.toString()
    if (error.response.status == 401) {
      notification.error({
        message: '登录状态失效，请重新登录！',
        duration: 2,
        onClose: () => {
          window.location.href = `${error.response.headers.location}`
        },
      })
    } else if (errText.indexOf('timeout') > -1) {
      notification.error({
        message: '请求超时，请刷新页面重新发起请求。',
        duration: 5,
      })
      return Promise.reject(false)
    } else {
      notification.error({
        message: errText,
      })
      return Promise.reject(false)
    }
  },
)

export default function (config: any) {
  if (config.title) {
    if (!config.transformResponse) {
      config.transformResponse = []
    }
    if (Array.isArray(config.transformResponse)) {
      config.transformResponse.push((data: any) => {
        let result = {
          title: config.title,
          errCb: config.errCb,
        }

        if (data && data) {
          result = {
            ...JSON.parse(data),
            title: config.title,
            errCb: config.errCb,
          }
        }
        return result
      })
    }
  }

  return axiosInstance(config).catch(function (res) {
    return res
  })
}
