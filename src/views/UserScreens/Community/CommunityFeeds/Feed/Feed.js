import { Card } from 'antd'
import React from 'react'

const Feed = ({ feedTitle, feedContent}) => {
  return (
    <Card 
      className='border-2'
      title={feedTitle}
    >
      {feedContent}
    </Card>
  )
}

export default Feed