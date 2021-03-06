import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
    meta: {
      forVisitors: true
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home'),
    meta: {
      forAuth: true
    }
  },
  {
    path: '/profile',
    component: () => import('@/base/profile'),
    meta: {
      forAuth: true
    },
    children: [
      {
        path: '',
        name: 'show-profile',
        component: () => import('@/views/profile/show')
      }
    ]
  },
  {
    path: '/funds-management',
    component: () => import('@/base/funds'),
    meta: {
      forAuth: true
    },
    children: [
      {
        path: 'add',
        name: 'add-funds',
        component: () => import('@/views/funds/create')
      },
      {
        path: 'list',
        name: 'list-funds',
        component: () => import('@/views/funds/list')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(
  (to, from, next) => {
    //if user navigates to root path
    if(to.fullPath === '/'){
      //if user is not authenticated, redirect to login
      if(!Vue.auth.isAuthenticated()) {
        next({
          name: 'login'
        })
      } else {
        //if user is authenticated redirect to home
        next({
          name: 'home'
        })
      }
    } else if(to.matched.some(component => component.meta.forVisitors)){

      if(Vue.auth.isAuthenticated()){
        next({
          name: 'home'
        })
      } else next()

    } else if(to.matched.some(component => component.meta.forAuth)) {
      
      if(!Vue.auth.isAuthenticated()){
        next({
          name: 'login'
        })
      } else next()

    } else next()

  }
)
export default router
