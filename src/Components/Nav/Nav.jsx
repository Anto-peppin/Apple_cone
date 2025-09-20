import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoLogoApple } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { BsBag } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Nav1 from './Nav1';
import Search from '../MainComp/Search';

const Nav = ({windowWIdth}) => {
  const [smallNav,setSmallNav] = useState(false)
  const [search,setSearch] = useState(false)
  const handleSearch = ()=>{
    setSearch(!search)
  }

  const bigMenu = ()=>{
    setSmallNav(true)
   

  }


  return (
    
    <div className='w-full h-10 flex justify-center items-center sticky top-0 z-30'  style={{backdropFilter:`blur(2px)`,backgroundColor:`${search? 'black': '#000000ef'}` }}>
    {
      smallNav &&  windowWIdth < 600 && <Nav1 change ={setSmallNav}  />
    }
    {
      search &&  <Search search ={search} set ={setSearch} />

    }
      <ul className='flex gap-4 bg-transparent justify-between items-center w-[95%] md:w-[70%]' >
        
        <li className='flex justify-between items-center '> <Link className="text-gray-400 text-base hover:text-white" to='/' ><IoLogoApple /></Link> </li>
        <li className='justify-between items-center hidden md:flex '> <Link className="text-gray-400 text-[12px] hover:text-white"  to='/store' >Store</Link> </li>
        <li className='justify-between items-center hidden md:flex '> <Link className="text-gray-400 text-[12px] hover:text-white" to='/mac' >Mac</Link> </li>
        <li className='justify-between items-center hidden md:flex '> <Link className="text-gray-400 text-[12px] hover:text-white" to='/ipad' >Ipad</Link> </li>
        <li className='justify-between items-center hidden md:flex '> <Link className="text-gray-400 text-[12px] hover:text-white" to='/iphone' >Iphone</Link> </li>
        <li className='justify-between items-center hidden md:flex '> <Link className="text-gray-400 text-[12px] hover:text-white" to='/watch' >Watch</Link> </li>
        <li className='justify-between items-center hidden md:flex '> <Link className="text-gray-400 text-[12px] hover:text-white" to='/airpods' >Airpods</Link> </li>
        <li className='justify-between items-center hidden md:flex '> <Link className="text-gray-400 text-[12px] hover:text-white" to='/tvHome' >Tv&Home</Link> </li>
        <li className='justify-between items-center hidden md:flex '> <Link className="text-gray-400 text-[12px] hover:text-white" to='/entertainment' >Entertainment</Link> </li>
        <li className='justify-between items-center hidden md:flex '> <Link className="text-gray-400 text-[12px] hover:text-white" to='/accessories' >Accessories</Link> </li>
        <li className='justify-between items-center hidden md:flex '> <Link className="text-gray-400 text-[12px] hover:text-white" to='/support' >Support</Link> </li>
        <div className='flex gap-5 items-center'>
          <li onClick={handleSearch} className='flex justify-between items-center '> <Link className="text-gray-400 text-base hover:text-white"  ><IoIosSearch /></Link> </li>
        <li className='flex justify-between items-center '> <Link className="text-gray-400 text-base hover:text-white" ><BsBag /></Link> </li>
        <li onClick={bigMenu} className='flex justify-between items-center md:hidden '> <Link className="text-gray-400 text-base hover:text-white" ><HiOutlineMenuAlt4 /></Link> </li>

        </div>
        
      </ul>
    </div>
  )
}

export default Nav