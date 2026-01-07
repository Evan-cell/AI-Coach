'use client'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Textarea } from '@/components/ui/textarea';
import { IconArrowRight } from '@tabler/icons-react';
const AddNewSessionDialogue = () => {

    const [note,setNote] = useState <string>();

  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button className='mt-3 cursor-pointer'>+ Start a Consultation</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Basic Details</DialogTitle>
          <DialogDescription asChild>
            <div>
                <h2>Add symptomps or Any Other Details</h2>
                <Textarea placeholder='Add details here 'className='h-[200px] mt-3'
                onChange={(e)=>setNote(e.target.value)}
                />
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
            <DialogClose>
            <Button variant={'outline'}>cancel</Button>
            </DialogClose>
            
            <Button disabled={!note}>start <IconArrowRight/></Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AddNewSessionDialogue
