import React, { useEffect, useState } from 'react'
import { useGetCommunityFeed } from './useGetCommunityFeed';
import Feed from './Feed/Feed';
import { Space } from 'antd';

const CommunityFeeds = () => {

  const [feedData, setFeedData] = useState([])

  const callBack = (data) => {
    setFeedData(data)
  }
  
  useEffect(() => {
    useGetCommunityFeed(callBack);
  }, [])

  return (
    <Space direction='horizontal' wrap size='middle'>
      {
        feedData?.map((feed, idx) => {
          return (
            <Feed 
              key={idx} 
              feedTitle={feed.communityFeedTitle} 
              feedContent={feed.communityFeedContent}
            />
          );
        })
      }
    </Space>
  )
}

export default CommunityFeeds