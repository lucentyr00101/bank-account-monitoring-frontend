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

export default routes