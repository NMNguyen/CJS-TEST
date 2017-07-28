import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import GithubInput from '@/components/GithubInput'
import GithubOutput from '@/components/GithubOutput'
import GithubUserdata from '@/components/GithubUserdata'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path:'/index',
      name: 'Input',
      component: GithubInput
    },
    {
      path:'/output',
      name: 'Output',
      component: GithubOutput, GithubUserdata
    }
  ]
})
