import React from 'react'
import App from './App'
import DashBord from './pages/DashBord'
import XiXi from './pages/XiXi'
import HaHa from './pages/HaHa'

export default [
  {
    path: '/',
    component: App,
    indexRoute: { component: DashBord},
    childRoutes: [
      {
        path: 'xixi',
        component: XiXi
      },
      {
        path: 'haha',
        component: HaHa
      }
    ]
  }
]
