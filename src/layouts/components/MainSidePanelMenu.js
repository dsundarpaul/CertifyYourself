import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import { Menu } from 'antd'
// import {
// 		IdcardTwoTone,
// 		DashboardTwoTone,
// 		ShopTwoTone
// } from '@ant-design/icons'
import navigation from '../../navigations/navigations.const'

const { SubMenu } = Menu
const MainSidePanelMenu = () => {
	const navigate = useNavigate()
	const location = useLocation()
	
	const findSelected = (open = false) => {
		const selectedMenues = []
		const openMenues = []
		
		navigation.map(i => {
			if(i.children) {
				i.children.map(j => {

					if(j.route === location.pathname) {
						selectedMenues.push(j.route)
						openMenues.push(i.title)
					}
					if(j.children) {
						j.children.map(k => {
							if (k.SubMenu.route === location.pathname) {
								selectedMenues.push(k.route)
								openMenues.push(j.title)
							}
						})
					}
				})
			}

			if (!i.children) {
				if (i.route === location.pathname) {
					selectedMenues.push(i.route)
				}
			}

		})
		return open ? openMenues : selectedMenues
	}

	const childrenPermissionsChecker = (menus) => {
		let anyPermission = false

		menus.map(() => {
			anyPermission = true
		})

		return anyPermission
	}

	return (
		<Menu className='admin-side-bar-menu' theme="light" defaultOpenKeys={() => findSelected(true)} defaultSelectedKeys={() => findSelected()} mode="inline">
      {navigation.map((i, index) => (
        <React.Fragment key={String(index)}>
          {!i.children && (
            <>
              <Menu.Item onClick={() => navigate(i.route)} key={i.route} icon={i.icon}>
                {i.title}
              </Menu.Item>
            </>
          )}
          {i.children && (
            <>
              {childrenPermissionsChecker(i.children) && (
                <SubMenu key={i.title} icon={i.icon} title={i.title}>
                  {i.children.map((j, idx) => (
          <React.Fragment key={String(index) + String(idx)}>
            <Menu.Item onClick={() => navigate(j.route)} key={j.route}>
              {j.title}
                        {
                          j.children && (
                            <>
                              {childrenPermissionsChecker(j.children) && (
                                <SubMenu key={j.title} icon={j.icon} title={j.title}>
                                  {j.children.map((k, idxk) => {
                                    <React.Fragment key={String(index) + String(idx) + String(idxk)}>
                                      <Menu.Item onClick={() => navigate(k.route)} key={k.route}>
                                        {k.title}
                                      </Menu.Item>
                                    </React.Fragment>
                                  })}
                                </SubMenu>
                              )}
                            </>
                          )
                        }
                      </Menu.Item>
                    </React.Fragment>
                  ))}
                </SubMenu>
              )}
            </>
          )}
        </React.Fragment>
      ))}
    </Menu>
	)
}

export default MainSidePanelMenu