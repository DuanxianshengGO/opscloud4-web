export default [
  {
    path: '/leo/template',
    name: 'leoTemplate',
    component: () => import('@/pages/leo/template'),
    meta: {
      auth: true,
      cache: true,
      title: 'Leo模板管理'
    }
  },
  {
    path: '/leo/job',
    name: 'leoJob',
    component: () => import('@/pages/leo/job'),
    meta: {
      auth: true,
      cache: true,
      title: 'Leo任务管理'
    }
  }
]