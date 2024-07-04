import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Short from './Components/Short';
import Subscription from './Components/Subscription';
const App = () => {
   
  return (
    <div className='bg-black'>
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/short" element={<Short/>}/>
        <Route path="/subscription" element={<Subscription/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
