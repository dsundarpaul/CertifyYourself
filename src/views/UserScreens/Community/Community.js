import React from 'react'
import CommunityFeed from '../../../components/CommunityFeeds/CommunityFeed/CommunityFeed'
import { Button } from 'antd'
import { useNavigate } from 'react-router'
import CommunityFeeds from './CommunityFeeds/CommunityFeeds'

const Community = () => {
  
  const naviagte = useNavigate()

  return (
    <div>
      <Button onClick={() => naviagte('/feed-create')}>Create Post</Button>
      <div>
        <CommunityFeeds />
      </div>
    </div>
  )
}

export default Community