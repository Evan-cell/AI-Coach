// app/dashboard/_components/AppHeader.tsx
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const menuOptions = [
  {
    id:1,
    name:'Home',
    path:'/home'
  },
  {
    id:2,
    name:'History',
    path:'/history'
  },
  {
    id:3,
    name:'Pricing',
    path:'/pricing'
  },
  {
    id:4,
    name:'Profile',
    path:'/profile'
  },
]
export default function AppHeader() {
  return (
    <header className="flex items-center justify-between border-b p-4 shadow px-10 md:px-20 lg:px-30 ">
      <Image src="/logo.svg" alt="logo" width={120} height={60} className="cursor-pointer"/>
      <div className="hidden md:flex gap-12 items-center">
      {menuOptions.map((option,index)=>(
        <div className="" key={index}>
          <h2 className="hover:font-bold cursor-pointer transition-all">{option.name}</h2>
        </div>
      ))}
      </div>
      <UserButton/>
    </header>
  );
}
