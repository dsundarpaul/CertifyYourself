import { Card } from 'antd'
import React from 'react'
import './SubjectSelectionStyles.css'

const SubjectSelection = () => {
  return (
    <div>
        <div className='main-content'>
            <Card hoverable className='subject-card'>MATHS</Card>
            <Card hoverable className='subject-card'>SCIENCE</Card>
            <Card hoverable className='subject-card'>ENGLISH</Card>
            {/* <Card className='subject-card'>HISTORY</Card> */}
        </div>
    </div>
  )
}

export default SubjectSelection