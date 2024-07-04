import React from 'react'

const LiftBar2 = () => {
  return (
    <>
     <div className='w-80 h-[577px] bg-white shadow-lg ml-[3rem] fixed mt-[4.6rem]'>
     <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link flex" href="/">
        <p className='font-bold text-lg mt-[10px] ml-14'>Home</p>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link flex" href="/short">
        <p className='font-bold text-lg mt-[13px] ml-12'> Yuotube Short Videos </p>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link flex" href="/subscription">
        <p className='font-bold text-lg mt-[10px] ml-11'>Subscription</p>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link flex" href="#">
        <p className='font-bold text-lg ml-11 mt-[10px]'>Library</p>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link flex" href="#">
        <p className='font-bold text-lg ml-11 mt-[10px]'>Explore</p>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link flex" href="#">
        <p className='font-bold text-lg ml-11 mt-[10px]'>History</p>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link flex" href="#">
        <p className='font-bold text-lg ml-11 mt-[10px]'>Your Videos</p>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link flex" href="#">
        <p className='font-bold text-lg ml-11 mt-[10px]'>Liked Videos</p>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link flex" href="#">
        <p className='font-bold text-lg ml-11 mt-[50px] text-red-600'> Settings </p>
      </a>
    </li>
  </ul>
     </div>
    </>
  )
}

export default LiftBar2

