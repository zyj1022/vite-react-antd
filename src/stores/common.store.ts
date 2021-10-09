import { makeAutoObservable } from 'mobx'

export default class CommonStore {
  name = 'CommonStore'
  count = 0

  constructor() {
    makeAutoObservable(this)
  }

  increment() {
    this.count++
  }

  decrement() {
    this.count--
  }
}
