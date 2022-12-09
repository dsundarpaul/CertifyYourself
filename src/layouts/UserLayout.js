import React, { useState } from 'react'
import { Button, Menu, Drawer, Dropdown, Layout, Spin } from 'antd'
import { PageHeader } from '@ant-design/pro-layout';
import {
    SettingOutlined,
    LogoutOutlined,
    MenuOutlined,
    UserOutlined,
    IdcardTwoTone,
    CarryOutTwoTone,
    DashboardTwoTone,
    SmileTwoTone,
    ShoppingTwoTone,
    SettingTwoTone,
    ReconciliationTwoTone,
    ProjectTwoTone,
    ShopOutlined,
    PieChartTwoTone,
    ShopTwoTone
} from '@ant-design/icons'
import { useNavigate } from 'react-router'
import MainSidePanelMenu from './components/MainSidePanelMenu'
import { useDispatch, useSelector} from 'react-redux'

import packageJson from '../../package.json'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

const ProfileMenu = () => {
    const navigate = useNavigate()

    const openProfile = () => {
        navigate('/profile')
    }
    const doLogout = () => {
        navigate('/login')
    }

    const handleMenuClick = (e) => {
        if (e.key === '1') {
            openProfile()
        }
        if (e.key === '2') {
            doLogout()
        }
    }

    const navigateToChangePassword = (() => navigate('/change-password'))
    const logoutUser = (() => localStorage.removeItem("userData"))

    const menu__items = [
        {
            label: 'View Profile',
            key: '1',
            icon: <UserOutlined />,
        },
        {
            label: 'Log out',
            key: '2',
            icon: <LogoutOutlined />,
            onClick: logoutUser
        }
    ]

    const menu = (
        <Menu
            onClick={(e) => handleMenuClick(e)}
            items={menu__items}
        />
    )

    const userData = JSON.parse(localStorage.getItem('userData'))

    return (
        <div className='flex'>
            <Dropdown className='drop-shadow' overlay={menu} placement='bottomRight' arrow>
                <Button shape="circle" type="dashed" coloe="primary" icon={<UserOutlined />} />
            </Dropdown> 
            <div className='ml-2 grid'>
                <p className={`text-gray-600 mb-0 font-semibold`}>{userData.user.email}</p>
                <p style={{ lineHeight: '10px' }} className={`text-gray-400 mb-0`}>{userData.user.role}</p>
            </div>
        </div>
    )
}

const UserLayout = ({ children }) => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const collapsed = false //useSelector(state => state.common.collapsed)
    const blockUi = useSelector(state => state.common.blockUi)

    const [drawer, setDrawer] = useState(false)

    return (
        <Layout style={{ minHeight: '100vh' }}>

            {blockUi && (
                <div style={{ zIndex: 99 }} onClick={() => null} className='full-page-spinner'>
                    <Spin style={{ marginTop: '50vh' }} />
                </div> 
            )}

            <Sider
                style={{
                    overflowY: 'auto',
                    position: 'fixed',
                    zIndex: 1,
                    height: '100%'
                }}
                className="shadow-lg hidden md:block" 
                theme="light" 
                id="components-layout-demo-side"
            >
                <div className='p-4'>
                    {collapsed && (
                        <img src='' className='img-fluid' />
                    )}
                    {!collapsed && (
                        <img src='' className='img-fluid' />
                    )}
                </div>
            </Sider>

            <Layout className="site-layout">
                <PageHeader
                    className={`p-0 bg-white shadow admin-layout-header ${collapsed ? 'layout-header-margin-collapsed' : 'layout-header-margin'}`}
                    title={<div className="md:hidden block"><Button onClick={() => setDrawer(true)} shape="circle" type="primary" icon={<MenuOutlined />} /></div>}
                    subTitle={
                        <div className="w-full flex flex-row-reverse">
                            <img src='' alt='adminlogo' className="md:hidden block w-44 m-auto" />
                        </div>
                    }
                    style={{
                        padding: '7px 20px',
                        background: 'white',
                        marginBottom: '8px',
                        position: 'fixed',
                        zIndex: 1
                    }}
                    extra={<ProfileMenu />}
                />

                <Content className={`mx-2 md:mx-4 md:mt-2 ${collapsed ? 'layout-container-margin-collapsed' : 'layout-container-margin'}`}>

                    <div className="p-2 overflow-auto mt-14">
                        {children}
                    </div>

                </Content>

                <Footer style={{ marginLeft: !collapsed && 80 }} className="font-mono text-center font-xs">
                    <p className='text-gray-400 mb-0'>v {packageJson.version}</p>
                </Footer>

                <Drawer
                    title={<img src='' alt='bigimg' className="img-fluid" />}
                    placement="left"
                    width={220}
                    onClose={() => setDrawer(false)}
                    visible={drawer}
                    className="p-0"
                    bodyStyle={{ padding: 0 }}
                >
                    <div>
                        <MainSidePanelMenu />
                    </div>
                </Drawer>

            </Layout>
          </Layout>
    )
}

export default UserLayout