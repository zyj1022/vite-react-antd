import { configure, makeAutoObservable } from 'mobx'

import CommonStore from './common.store'
import RouterStoreInstance from './router.store'

// 可以配置 mobx 的一些信息
configure({
  enforceActions: 'never', //  禁用强制性 action
})
class RootStore {
  router = RouterStoreInstance
  common = new CommonStore()

  constructor() {
    makeAutoObservable(this)
  }
}

const rootStore = new RootStore()
export default rootStore
