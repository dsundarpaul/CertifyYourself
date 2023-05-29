import { Card } from 'antd'
import React from 'react'

const CommunityFeed = (props) => {
  console.log(props);
  return (
    <div>
      <Card 
        title={`By ${props.createdBy},  ${props.createdAt}`}
        className='w-3/4 my-4 ml-2 border-4 !border-l-gray-800'
      >
        <div>Feed content</div>
      </Card>
    </div>
  )
}

export default CommunityFeed