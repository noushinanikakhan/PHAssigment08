import React from 'react';
import logo from "./../../assets/logo-navbar.png"
import giticon from "./../../assets/Giticon.png"
import { Link, Links, NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
   <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li className='text-black hover:bg-gradient-to-br from-[#632EE3] to-[#9F62F2] hover:text-transparent hover:bg-clip-text'><a>Home</a></li>
        <li className='text-black hover:bg-gradient-to-br from-[#632EE3] to-[#9F62F2] hover:text-transparent hover:bg-clip-text'> <a>Apps</a> </li>
        <li className='text-black hover:bg-gradient-to-br from-[#632EE3] to-[#9F62F2] hover:text-transparent hover:bg-clip-text'><a>Installation</a></li>
      </ul>
    </div>
  
  <Link to='/'>    <a className="btn btn-ghost text-xl bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
       <img src={logo} alt="" /> 
        HERO.IO</a></Link>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <Link to='/'> <li className='text-black hover:bg-gradient-to-br from-[#632EE3] to-[#9F62F2] hover:text-transparent hover:bg-clip-text'><a>Home</a></li></Link>
      
    <Link to='/about'><li className='text-black hover:bg-gradient-to-br from-[#632EE3] to-[#9F62F2] hover:text-transparent hover:bg-clip-text'> <a>Apps</a> </li></Link>

      <li className='text-black hover:bg-gradient-to-br from-[#632EE3] to-[#9F62F2] hover:text-transparent hover:bg-clip-text'><a>Installation</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a href="https://github.com/noushinanikakhan"  className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white">
      <img src={giticon} alt="" />  
        Contribute</a>
  </div>
</div>
    );
};

export default Navbar;

