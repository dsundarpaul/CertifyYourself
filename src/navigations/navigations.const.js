import React from 'react'
import {
    DashboardTwoTone,
    ContactsTwoTone,
    ShopTwoTone
} from '@ant-design/icons'
import { Image } from 'antd'

export default [
    {
        title: 'Dashboard',
        route: '/dashboard',
        module: 'DASHBOARD'
      },
      {
        title: 'Users',
        route: '/users',
        module: 'USERS',
        // children: [
        //   {
        //     title: 'Mobile Users',
        //     route: '/users',
        //     module: 'USERS_MOBILE'
        //   },
        //   {
        //     title: 'Admin Users',
        //     route: '/users/admin',
        //     module: 'USERS_ADMIN'
        //   }
        // ]
      },
      {
        title: 'Goals & Habits',
        route: '/goals',
        module: 'GOALS'
      }
]