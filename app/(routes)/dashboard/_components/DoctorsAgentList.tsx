import { AIDoctorAgents } from '@/shared/list'
import React from 'react'
import DoctorAgentCard from './DoctorAgentCard'

const DoctorsAgentList = () => {
  return (
    <div className='mt-10 px-10 md:px-20 lg:px-30 py-10'>
      <h2 className='font-bold text-xl'>Ai Specialist Doctor</h2>
      <div>
        {AIDoctorAgents.map((doctor,index)=>(
            <div key={index}>
                <DoctorAgentCard/>
            </div>
        ))}
      </div>
    </div>
  )
}

export default DoctorsAgentList
