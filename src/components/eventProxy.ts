interface ItemProps{
  key: any,
  value: any
}
interface StateProps {
  [key: string]: any
}
export default class EventProxy {
  listeners: Array<Function> = []
  nextListeners: Array<Function> = []

  subscribe(listener: any) {
    this.nextListeners.push(listener)
    return () => {
      this.unsubscribe(listener)
    }
  }

  unsubscribe(listener: any) {
    const ind = this.nextListeners.indexOf(listener)
    if(ind === -1) return
    this.nextListeners.splice(ind, 1)
  }

  getState() {
    this.listeners = this.nextListeners.slice(0)
    let state: StateProps = {}
    for(let i = 0; i < this.listeners.length; i++) {
      const listener: Function = this.listeners[i]
      const item: ItemProps = listener()
      state[item.key] = item.value
    }
    this.listeners = []
    return state
  }
}