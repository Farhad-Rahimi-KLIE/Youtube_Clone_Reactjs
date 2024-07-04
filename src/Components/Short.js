import React from 'react'
import {useGlobalContext} from '../Components/ContextApi/UserData'
const Short = () => {
  const {data} = useGlobalContext()
  return (
    <div className='grid grid-rows m-auto'>
      {
        data.map((curElem)=>{
          return (
            <div className='w-[40rem] ml-[33rem] h-[30rem] mt-[8rem]'>
              <h2 className='text-white font-bold ml-28 -mt-6'>{curElem.title}</h2>
            <img src={curElem.main_img} className='w-[18rem] h-[26rem] mt-4' alt="" />
            <span className='font-bold ml-[15rem] text-white'>{curElem.watch}</span>
            <span className='font-bold flex -mt-6 text-lime-500'>{curElem.time}</span>
          </div>
          )
        })
      }
    </div>
  )
}

export default Short
