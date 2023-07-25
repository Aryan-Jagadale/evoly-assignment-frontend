import React from 'react'
import { Link } from 'react-router-dom'

const DashBoard = () => {
  return (
    <>
    
    <div className='h-[50vh] flex items-center flex-col justify-center bold text-red-900'>
    <h1>
    
    Dashboard not part of assignment
    </h1>
    
    <Link className='underline text-blue-300' to={"/followup-reminder"}>
      Followup-Reminder link
    </Link>  
    </div>
  


    </>

    
  )
}

export default DashBoard