/* eslint-disable */
import { 
  SettingOutlined,
  StarOutlined,
  TeamOutlined,
  GlobalOutlined,
  CalendarOutlined,
  UserOutlined
} from '@ant-design/icons'

export const SIDENAV = [
  {
    title: 'Profile',
    path: '/profile',
    icon: <UserOutlined style={{ fontSize: '20px' }}/>
  },
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
    path: '/feed',
    icon: <GlobalOutlined style={{ fontSize: '20px' }}  />
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <SettingOutlined style={{ fontSize: '20px' }}  />
  }
]