import { Avatar, Button, Card, Col, Menu, Row, Space, Typography } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import React from 'react'
import { useDispatch } from 'react-redux'
import ContestWidget from '../../../../components/widgets/ContestWidget/ContestWidget'
import { openUserEditDrawer } from '../../../../store/global-state/actions'

const UserProfileWidget = ({ children }) => {

  const dispatch = useDispatch()

  const handleProfileEditDrawerOpen = () => dispatch(openUserEditDrawer())

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
      getItem('Profile Info', '1'),
      getItem('Blog', '2'),
      getItem('Data', '3'),

    ];

  return (
    <div>
      <Row>
        <Col xs={24} md={4} lg={4}>
          <Card>
            <Space direction="vertical" size={16}>
              <Avatar size={100} shape="square" icon={<UserOutlined />} />
              <Button onClick={handleProfileEditDrawerOpen}>Edit profile</Button>
            </Space>
          </Card>

          <Menu
            onClick={() => {}}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
          />
        </Col>

        <Col xs={24} md={20} lg={16}>
          {children}
        </Col>

        <Col xs={24} md={12} lg={4}>
          <ContestWidget />
        </Col>
      </Row>
    </div>
  )
}

export default UserProfileWidget