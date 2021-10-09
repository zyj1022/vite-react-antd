import { makeAutoObservable } from 'mobx'
import CommonStore from './common.store'
import RouterStoreInstance from './router.store';

class RootStore {
  router = RouterStoreInstance
  common = new CommonStore()

  constructor() {
    makeAutoObservable(this)
  }
}

const rootStore = new RootStore()
export default rootStore
