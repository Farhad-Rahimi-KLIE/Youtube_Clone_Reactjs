import React from 'react'
import two from '../logos/img2.png'
import three from '../logos/images (9).png'
import four from '../logos/images (1).jpeg'
import five from '../logos/img4.png'
import six from '../logos/images (3).jpeg'
import seven from '../logos/images (12).png'
import eight from '../logos/images.jpeg'
import nine from '../logos/images (4).jpeg'
import ten from '../logos/images (18).png'

const LiftBar = () => {

  return (
    <>
    <div className='w-16 h-[577px] bg-white shadow-lg fixed mt-[4.6rem]'>
    <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link flex" href="/">
        <img src={two} alt="" className='w-8 h-8 mt-1 ml-6'/>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link flex" href="/short">
      <img src={three} alt="" className='w-9 h-9 mt-2 ml-6'/>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link flex" href="/subscription">
      <img src={four} alt="" className='w-8 h-8 mt-2 ml-6'/>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link flex" href="#">
      <img src={five} alt="" className='w-8 h-8 mt-2 ml-6'/>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link flex" href="#">
      <img src={six} alt="" className='w-8 h-8 mt-2 ml-6'/>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link flex" href="#">
      <img src={seven} alt="" className='w-8 h-8 mt-2 ml-6'/>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link flex" href="#">
      <img src={eight} alt="" className='w-8 h-8 mt-2 ml-6'/>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link flex" href="#">
      <img src={nine} alt="" className='w-8 h-8 mt-2 ml-6'/>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link flex" href="#">
      <img src={ten} alt="" className='w-8 h-8 mt-12 ml-6'/>
      </a>
    </li>
  </ul>
     </div> 
    </>
  )
}

export default LiftBar
