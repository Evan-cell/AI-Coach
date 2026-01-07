import { AIDoctorAgents } from '@/shared/list'
import React from 'react'
import DoctorAgentCard from './DoctorAgentCard'

const DoctorsAgentList = () => {
  return (
    <div className='mt-10 px-10 md:px-20 lg:px-30 py-10'>
      <h2 className='font-bold text-xl'>Ai Specialist Doctor</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-5'>
        {AIDoctorAgents.map((doctor,index)=>(
            <div key={index}>
                <DoctorAgentCard doctorAgent={doctor}/>
            </div>
        ))}
      </div>
    </div>
  )
}

export default DoctorsAgentList
