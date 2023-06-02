import { Button } from 'antd'
import React from 'react'

const TabNavButton = ({ icon, title }) => {
  return (
    <Button className='py-2 h-max text-center'>
      <div>
        {icon}
      </div>
      <div className='mt-2'>
        {title}
      </div>
    </Button>
  )
}

export default TabNavButton