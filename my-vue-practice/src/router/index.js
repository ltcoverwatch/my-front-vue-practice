import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import LibraryIndex from '@/components/library/LibraryIndex'
import HomeIndex from '@/components/home/HomeIndex'
import NotebookIndex from '@/components/notebook/NotebookIndex'
//import所有需要的组件

Vue.use(Router)

export default new Router({
  mode: 'history',  // history路由模式，路径更友好
  routes: [

    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/home',
          name: 'homeindex',
          component: HomeIndex
        },
        {
          path: '/library',
          name: 'library',
          component: LibraryIndex
        },
        {
          path: '/jotter',
          name: 'notebook',
          component: NotebookIndex
        }
      ]
    },
  ]
})
