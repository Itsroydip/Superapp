import React, { useEffect, useState } from 'react'
import Weather from '../components/Weather'
import Profile from '../components/Profile'
import News from '../components/News'
import formatDateTime from '../utils/formatDateTime'

const Dashboard = () => {
  const[dateTime, setDateTime] = useState({});

  useEffect(()=>{
    const {date, time} = formatDateTime();
    setDateTime({date,time});
    
  },[])
  
  return (
    <div className='min-h-screen bg-black font-roboto px-16 py-8 flex justify-between'>
      <div className='w-3/5 my-10'>    
        <div className='w-full text-white rounded-lg mb-5 p-8' style={{backgroundColor:'rgba(87, 70, 234, 1)'}}>
          <Profile/>
        </div>

        <div className='w-full text-white rounded-lg bg-blue-950 overflow-hidden'>
          <div className='bg-pink-500 py-2 text-3xl font-semibold flex justify-evenly'>
            <span>{dateTime.date}</span>
            <span>{dateTime.time}</span>
          </div>
        
          <Weather/>
        </div>
      </div>

      <div className='w-2/5 ml-12 my-10 rounded-lg overflow-hidden'>
        <News/>
      </div>

    </div>
  )
}

export default Dashboard