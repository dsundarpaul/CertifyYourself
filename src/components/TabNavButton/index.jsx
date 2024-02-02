import { Button } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { closeTheSideDrawer } from '../../store/global-state/actions'

const TabNavButton = ({ icon, title, path }) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleTabNavigation = () => {
    navigate(path)
    dispatch(closeTheSideDrawer())
  }

  return (
    <Button 
      className='block py-2 my-2 text-center h-max w-full'
      onClick={handleTabNavigation}
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