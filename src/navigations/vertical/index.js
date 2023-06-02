/* eslint-disable */

import { SettingOutlined } from '@ant-design/icons'
import { StarOutlined } from '@ant-design/icons'
import { TeamOutlined } from '@ant-design/icons'
import { GlobalOutlined } from '@ant-design/icons'
import { CalendarOutlined } from '@ant-design/icons'
export const SIDENAV = [
  {
    title: 'Friends',
    path: '/friends',
    icon: <TeamOutlined   style={{ fontSize: '20px' }}/>
  },
  {
    title: 'Events',
    path: '/events',
    icon: <CalendarOutlined style={{ fontSize: '20px' }}  />
  },
  {
    title: 'Leaderboard',
    path: '/leaderboard',
    icon: <StarOutlined style={{ fontSize: '20px' }}  />
  },
  {
    title: 'Community',
    path: '/community',
    icon: <GlobalOutlined style={{ fontSize: '20px' }}  />
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <SettingOutlined style={{ fontSize: '20px' }}  />
  }
]