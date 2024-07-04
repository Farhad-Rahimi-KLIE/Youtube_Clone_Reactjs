import React, { useState } from 'react'
import {useGlobalContext} from '../Components/ContextApi/UserData'
const Main = () => {
  const {data} = useGlobalContext()
  return (
    <div className='grid grid-cols-4'>
      {
        data.map((curElem)=>{
          return (
      <div className='w-[17rem] ml-[4rem] h-[13.2rem] mt-[6rem] bg-black shadow-2xl' key={curElem.id}>
      <img src={curElem. main_img} className='w-[40rem] h-[10rem]' alt=""/>
      <span className='font-bold text-white'>{curElem.title}</span>
      <span className='font-bold ml-[11rem] text-white'>{curElem.watch}</span>
      <span className='font-bold flex ml-2 mt-1 text-lime-500'>{curElem.time}</span>
    </div>
          )
        })
      }
    </div>
  )
}

export default Main
