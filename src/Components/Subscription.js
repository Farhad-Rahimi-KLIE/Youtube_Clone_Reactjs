import React from 'react'
import {useGlobalContext} from '../Components/ContextApi/UserData'
const Subscription = () => {
  const {data} = useGlobalContext()
  return (
    <div className='grid grid-cols-3'>
      {
        data.map((curElem)=>{
          return (
            <div className='w-[22rem] ml-[5rem] h-[15rem] mt-[6rem] bg-white shadow-2xl '>
              <img src={curElem.main_img} className='w-[40rem] h-[15rem]' alt="" />
            </div>
          )
        })
      }
    </div>
  )
}

export default Subscription
