import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router'

const TabNavButton = ({ icon, title, path }) => {

  const navigate = useNavigate()

  return (
    <Button 
      className='block py-2 my-2 text-center h-max w-full'
      onClick={() => navigate(path)}
    >
      <div>
        {icon}
      </div>
      <div className='!text-xs mt-2'>
        {title}
      </div>
    </Button>
  )
}

export default TabNavButton