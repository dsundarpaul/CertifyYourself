import React from 'react'

const InGameLayout = ({ children }) => {
  return (
    <div className='w-full flex justify-center items-center'>
      {children}
    </div>
  )
}

export default InGameLayout