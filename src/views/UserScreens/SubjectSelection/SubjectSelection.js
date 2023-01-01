import { Card } from 'antd'
import React from 'react'
import './SubjectSelectionStyles.css'

const SubjectSelection = () => {
  return (
    <div>
        <div className='main-content'>
            <Card className='subject-card'>MATHS</Card>
            <Card className='subject-card'>SCIENSE</Card>
            <Card className='subject-card'>ENGISH</Card>
            <Card className='subject-card'>HISTORY</Card>
        </div>
    </div>
  )
}

export default SubjectSelection