import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello.vue'   // 変更: .vue拡張子を追記

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
