import React from 'react'
import CommunityFeed from '../../../components/CommunityFeeds/CommunityFeed/CommunityFeed'

const Community = () => {
  
  const MOCK = [
    {
      FeedCreatedBy: "Santosh",
      FeedCreatedAt: "10/10/2022"
    },
    {
      FeedCreatedBy: "Alex",
      FeedCreatedAt: "10/10/2022"
    },
    {
      FeedCreatedBy: "Jennifer",
      FeedCreatedAt: "10/10/2022"
    },
  ]

  return (
    <div>
      {
        MOCK.map(i => {
          return (
            <>
             <CommunityFeed createdBy={i.FeedCreatedBy} FeedCreatedAt={i.FeedCreatedAt} />
            </>
          )
        })
      }
    </div>
  )
}

export default Community