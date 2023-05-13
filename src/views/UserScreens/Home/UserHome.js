import { Button } from 'antd'
import Typography from 'antd/es/typography/Typography'
import React from 'react'
import { useNavigate } from 'react-router'
import './UserHomeStyles.css'
import { useSelector } from 'react-redux'

const UserHome = () => {
  const navigate = useNavigate()

  const handleOnStart = () => {navigate('/subjects')}

  console.log(useSelector(state => state));

  return (
    <div className='userHome-main'>
      <div className='hero-content w-full flex justify-center items-center'>
        <Button className='hero-button' onClick={handleOnStart}>Start</Button>
        <div className='hero-top'>
          <Typography>Name</Typography>
          <Typography>Rank</Typography>
        </div>
        <div className='hero-bot'></div>
      </div>
    </div>
  )
}

export default UserHome