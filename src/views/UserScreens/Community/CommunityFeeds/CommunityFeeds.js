import React, { useEffect, useState } from 'react'
import { useGetCommunityFeed } from './useGetCommunityFeed';
import Feed from './Feed/Feed';
import { Space } from 'antd';
import { auth } from '../../../../firebase/clientApp';
import { useAuthState } from 'react-firebase-hooks/auth';

const CommunityFeeds = () => {

  const [feedData, setFeedData] = useState([])

  const callBack = (data) => {
    setFeedData(data)
  }
  
  useEffect(() => {
    useGetCommunityFeed(callBack);
  }, [])
  const [user, loading, error] = useAuthState(auth);
  return (
    <Space direction='horizontal' wrap size='middle'>
      {
        feedData?.map((feed, idx) => {
          return (
            <Feed 
              key={idx} 
              feedTitle={feed.communityFeedTitle} 
              feedContent={feed.communityFeedContent}
              isAuthor={feed.creatorId === user.uid ? true : false}
              author={feed.creatorName}
            />
          );
        })
      }
    </Space>
  )
}

export default CommunityFeeds