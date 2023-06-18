import { Avatar, Button, Card, Col, Row, Space, Typography } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import React from 'react'
import { openUserEditDrawer } from '../../../../store/global-state/actions'
import { useDispatch } from 'react-redux'
import ContestWidget from '../../../../components/widgets/ContestWidget/ContestWidget'

const UserDetails = ({ userData }) => {

  const dispatch = useDispatch()

  const handleProfileEditDrawerOpen = () => dispatch(openUserEditDrawer())

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
        </Col>

        <Col xs={24} md={20} lg={16}>
          <Card className='bg-yellow-100'>
            <Typography.Title level={3}>
              {userData?.userName}
            </Typography.Title>
            {userData?.rank || 'unranked'}

            <Typography>
              Total Test Given:
            </Typography>

            <Typography>
              Total Contributes:
            </Typography>

            <Typography>
              Last Visit
            </Typography>

            <Typography>
              Registered
            </Typography>
          </Card>
        </Col>

        <Col xs={24} md={12} lg={4}>
          <ContestWidget />
        </Col>
      </Row>
    </div>
  )
}

export default UserDetails