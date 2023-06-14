import React from 'react'
import CommunityFeed from '../../../components/CommunityFeeds/CommunityFeed/CommunityFeed'
import { Button } from 'antd'
import { useNavigate } from 'react-router'
import CommunityFeeds from './CommunityFeeds/CommunityFeeds'

const Community = () => {
  
  const navigate = useNavigate()

  return (
    <div>
      <Button onClick={() => navigate('/feed-create')}>Create Post</Button>
      <div>
        <CommunityFeeds />
      </div>
    </div>
  )
}

export default Community