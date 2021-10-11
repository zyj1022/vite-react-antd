import { toJS } from 'mobx'

export function getResultData(res: any) {
  const result = res && res.data
  if (result && result.success) {
    return result.data
  } else {
    // console.log(`请求错误：${result.message}`);
    return null
  }
}
