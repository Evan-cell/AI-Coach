'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useState } from 'react'
import AddNewSessionDialogue from './AddNewSessionDialogue'

const HistoryList = () => {
    const [historyList,setHistoryList] = useState([])
  return (
    <div className='px-10 md:px-20 lg:px-30 py-10'>
        {historyList.length==0?
        <div className='flex items-center flex-col justify-center p-7 border border-dashed rounded-2xl mt-10'>
            <Image src={'/medical-assistance.png'} alt='empty' width={150} height={150} />
            <h2 className='font-bold text-xl'>No Recent Consultations</h2>
            <p>It looks like you haven't consuled any doctors yet</p>
            <AddNewSessionDialogue/>
        </div>
    :
    <div>List</div>
    }
    </div>

  )
}

export default HistoryList
