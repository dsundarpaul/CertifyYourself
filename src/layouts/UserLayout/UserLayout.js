import React, { useState } from 'react'
import { Button, Menu, Drawer, Dropdown, Layout, Spin, Typography, Input } from 'antd'
import { PageHeader } from '@ant-design/pro-layout';

import {
    // SettingOutlined,
    LogoutOutlined,
    MenuOutlined,
    UserOutlined,
    // IdcardTwoTone,
    // CarryOutTwoTone,
    // DashboardTwoTone,
    // SmileTwoTone,
    // ShoppingTwoTone,
    // SettingTwoTone,
    // ReconciliationTwoTone,
    // ProjectTwoTone,
    // ShopOutlined,
    // PieChartTwoTone,
    // ShopTwoTone
} from '@ant-design/icons'
import { useNavigate } from 'react-router'
import MainSidePanelMenu from '../components/MainSidePanelMenu'
import { useSelector} from 'react-redux'

import packageJson from '../../../package.json'
// import { LayoutContext } from 'antd/es/layout/layout';
import './UserLayoutStyles.css'
import d1 from '../../assets/logo/d1.png'
import PropTypes from 'prop-types';

const { Content, Footer } = Layout
// const { SubMenu } = Menu

const userData = JSON.parse(localStorage.getItem('userData'))


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

    // const navigateToChangePassword = (() => navigate('/change-password'))
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

    // const userData = JSON.parse(localStorage.getItem('userData'))

    return (
        <div className='flex'>
            <Dropdown className='drop-shadow' overlay={menu} placement='bottomRight' arrow>
                <Button shape="circle" type="dashed" coloe="primary" icon={<UserOutlined />} />
            </Dropdown> 
            <div className='ml-2 grid'>
                {/* <p className={`text-gray-600 mb-0 font-semibold`}>{userData.user.email}</p>
                <p style={{ lineHeight: '10px' }} className={`text-gray-400 mb-0`}>{userData.user.role}</p> */}
            </div>
        </div>
    )
}

const UserLayout = ({ children }) => {

    // return (
    //     <Layout>
    //         UserLayout
    //     </Layout>
    // )
    
    const navigate = useNavigate()
    // const dispatch = useDispatch()

    // const collapsed = false //useSelector(state => state.common.collapsed)
    const blockUi = useSelector(state => state.common.blockUi)

    const [drawer, setDrawer] = useState(false)

    return (
        <Layout style={{ minHeight: '100vh' }}>

            {blockUi && (
                <div style={{ zIndex: 99 }} onClick={() => null} className='full-page-spinner'>
                    <Spin style={{ marginTop: '50vh' }} />
                </div> 
            )}

            {/* <Sider
                // style={{}}
                className="main-sider" 
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

                <MainSidePanelMenu />
            </Sider> */}
            <Drawer
                className="main-sider" 
                title={<img src='' alt='bigimg' className="img-fluid" />}
                // theme="light" 
                // id="components-layout-demo-side"
                placement="left"
                width={220}
                onClose={() => setDrawer(false)}
                open={drawer}
                bodyStyle={{ padding: 0 }}
            >
                <MainSidePanelMenu />
            </Drawer>

            <Layout className="site-layout">
                <PageHeader
                    // className={`admin-layout-header ${collapsed ? 'layout-header-margin-collapsed' : 'layout-header-margin'}`}
                    className='admin-layout-header'
                    title={<div className="md:hidden block"><Button onClick={() => setDrawer(true)} shape="circle" type="transparent" icon={<MenuOutlined />} /></div>}
                    subTitle={
                        <div className="header-logo">
                            <img src={d1} alt='adminlogo' className="md:hidden block w-44 m-auto" />
                            <Typography.Title level={5}>CertifyYourself</Typography.Title>
                        </div>
                    }
                    extra={userData ? (
                                <ProfileMenu />
                            ) : (
                                <div>
                                    <Input type='text' className='header-input' />
                                    <Input type='password' className='header-input' />
                                    <Button className='header-btn header-btn-login' type="primary" color="primary">Login</Button>
                                    <Button className='header-btn' type="link" color='primary'>SignUp</Button>
                                </div>
                            )
                    }
                >
                    {/* <PageHeader
                        // className={`admin-layout-header ${collapsed ? 'layout-header-margin-collapsed' : 'layout-header-margin'}`}
                        className=''
                        title={<div className="md:hidden block"><Button onClick={() => setDrawer(true)} shape="circle" type="transparent" icon={<MenuOutlined />} /></div>}
                        subTitle={
                            <div className="header-logo">
                                <img src={d1} alt='adminlogo' className="md:hidden block w-44 m-auto" />
                                <Typography.Title level={5}>CertifyYourself</Typography.Title>
                            </div>
                        }
                        extra={userData ? (
                                    <ProfileMenu />
                                ) : (
                                    <div>
                                        <Input type='text' className='header-input' />
                                        <Input type='password' className='header-input' />
                                        <Button className='header-btn' variant="contained" color="primary">Login</Button>
                                        <Button className='header-btn' color='primary'>SignUp</Button>
                                    </div>
                                )
                        }
                    /> */}
                    <div className='sub-header'>
                        <Button onClick={() => {navigate('/home')}}>Home</Button>
                        <Button>Career</Button>
                        {/* <Button>Certification</Button> */}
                        <Button>Community</Button>
                        <Button>Groups</Button>
                        <Button>About Us</Button>
                    </div>
                </PageHeader>
               

                {/* <Content className={`mx-2 md:mx-4 md:mt-2 ${collapsed ? 'layout-container-margin-collapsed' : 'layout-container-margin'}`}> */}
                <Content className='main-content'>

                    <div>
                        {children}
                    </div>

                </Content>

                <Footer className="footer">
                    <p className='text-gray-400 mb-0'>v {packageJson.version}</p>
                </Footer>

                {/* <Drawer
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
                </Drawer> */}

            </Layout>
          </Layout>
    )
}

UserLayout.prototype = {
    children: PropTypes.node.isRequired
}

export default UserLayout