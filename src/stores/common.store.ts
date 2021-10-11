import { makeAutoObservable } from 'mobx'
import * as api from '../requests/requests'
import { getResultData } from './commonUtil'
export default class CommonStore {
  name = 'CommonStore'
  count = 0
  user = null
  test = null

  constructor() {
    makeAutoObservable(this)
  }

  increment() {
    this.count++
  }

  decrement() {
    this.count--
  }

  async getUser(params: any = null) {
    const res = await api.getUser(params)
    const data = getResultData(res)
    this.user = data
  }

  async getTest(params: any) {
    const res = await api.getTest(params)
    const data = getResultData(res)
    this.test = data
  }
}
