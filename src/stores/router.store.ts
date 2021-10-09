import URL from 'url'
import { createBrowserHistory } from 'history'
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'

// 单例模式，全局唯一
let instance: Router | null = null

export class Router extends RouterStore {
  constructor() {
    super()
    if (instance) return instance
    const history = createBrowserHistory()
    syncHistoryWithStore(history, this)
    instance = this
  }

  // URL参数获取 router.query.search
  get query() {
    const { search } = this.location
    return search ? URL.parse(search, true).query : {}
  }
}

export default new Router()
