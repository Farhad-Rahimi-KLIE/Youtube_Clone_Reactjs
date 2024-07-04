import React, { useState } from 'react'
import hhh from '../logos/images (18).png'
import {useGlobalContext} from '../Components/ContextApi/UserData'
import './style.css'
const Notification = () => {
    const {data} = useGlobalContext()
  return (
    <>
    <div className='fixed'>
       <div className=" container w-[35vw] h-[85vh] rounded-md overflow-y-scroll flex flex-col bg-black absolute top-20 left-[45rem]">
        <div className='flex justify-between mt-2 cursor-pointer'>
            <img src={hhh} alt="" className='w-7 bg-black rounded-lg border-black border-r-black' />
            <p className='text-white'>Notifications</p>
        </div>
        <hr className='text-white' />
        {
            data.map((curElem,index)=>{
                return (
                <div className="flex justify-between cursor-pointer" key={index}>
                <img src={curElem.main_img} className="w-32 h-20 ml-2 mt-2" alt="" />
                <p className="text-white font-bold mt-9">{curElem.title}</p>
                <span className="text-white mt-9">{curElem.watch}</span>
                <img src={curElem.short_img} alt="" className="w-8 h-8 rounded-full mt-8"  />
                </div>
                )
            })
        }
      </div>
      </div>
    </>
  )
}

export default Notification
