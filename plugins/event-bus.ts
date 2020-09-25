import Vue from 'vue'

export default (context: any, inject: Function) => {
  const vue = new Vue()
  inject('eventBus', vue)
}
