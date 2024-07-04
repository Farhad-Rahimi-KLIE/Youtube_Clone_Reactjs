import React, { useState } from "react";
import web from '../logos/img.png';
import jan from '../logos/img9.png';
import khan from '../logos/images.png';
import san from '../logos/images (5).png';
import ban from '../logos/images (3).png';
import kan from '../logos/lio (1).jpg';
import LiftBar2 from "./LiftBar2";
import LiftBar from "./LiftBar";
import Notification from "./Notification";
import Plus from "./Plus";
import {useGlobalContext} from '../Components/ContextApi/UserData'

const Navbar = () => {
  const {data, setData} = useGlobalContext()
  const [open,setOpen] =useState(false);
  const [notification,setNotification] =useState(false);
  const [plus,setPlus] =useState(false);
  const [search,setSearch] = useState("");
 console.log(data)
  const handlejan = (event)=>{
    setSearch(event.target.value)
    const res = data.filter((curElem)=>{
      if (search === "") {
        return curElem;
      }else if(curElem.title.toLowerCase().includes(search.toLowerCase())){
        return curElem
      }
    })
    setData(res)
  }

  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-white shadow-md fixed w-full navbar-white">
        <img src={web} alt="" onClick={()=>setOpen(!open)} className="w-9 cursor-pointer" />
        <a className="navbar-brand flex" href="/">
            <img src={jan} alt="" className="w-12" /> <span className="mt-2 ml-1 text-2xl font-bold">Youtube</span>
        </a>
        <input type="text" placeholder="Enter for Search" value={search} onChange={handlejan} className="p-2.5 font-bold ml-32 rounded-3xl px-40 border border-r-slate-600 border-spacing-10 outline-none text-center" />
        <img src={khan} alt="" className="w-7 ml-2" />
        <img src={san} alt="" className="w-9 ml-52 cursor-pointer" onClick={()=>setPlus(!plus)}/>
        <img src={ban} onClick={()=>setNotification(!notification)} alt="" className="w-9 ml-12 cursor-pointer"/>
        <img src={kan} alt="" className="w-9 h-9 ml-12 cursor-pointer rounded-full"/>
      </nav>
      { open && <LiftBar2/>}
      { notification && <Notification/> }
      { plus &&  <Plus/> }
      <LiftBar/>
    </div>
  );
};

export default Navbar;
