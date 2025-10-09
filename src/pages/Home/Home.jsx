import React from 'react';
import Crome from "./../../assets/Crome.png"
import Downloadappicon from "./../../assets/Downloadappicon.png"
import hero from "./../../assets/hero.png"
import Downloadsign from "./../../assets/Downloadsign.png"
import Star from "./../../assets/Star.png"
import Apps from "../Apps/Apps"
import { useLoaderData } from 'react-router';



const Home = () => {

  const data=useLoaderData();
  console.log(data);


    return (

  <div> 
  <div className='bg-[#F1EFEF]  flex flex-col items-center pt-8 md:pt-15'>
   <h1 className='font-bold text-4xl md:text-6xl text-[#001931]  text-center p-3'>We Build <br /> <span className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text'>Productive</span> Apps</h1>
   <p className='p-5 text-center text-[#627382]'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <span className='hidden md:inline '><br /></span> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
  <div className='gap-5 '>
       <button className='btn m-5 text-[#001931] '>
    <img className='py-4' src={Crome} alt="" />
    Google Play</button>
    <button className='btn text-[#001931] '>
        <img className='py-4' src={Downloadappicon} alt="" />
        App Store</button>
  </div>
  <img className='w-5/12' src={hero} alt="" />
  </div>

{/* rating */}
<div className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white w-full flex flex-col items-center p-10'>
    <div>
        <h1 className='font-bold text-xl md:text-4xl p-3 md:p-5'>Trusted by Millions, Built for You</h1>
    </div>
<div className='flex gap-5'>
        <div className='p-2 md:p-5 space-y-2'>
        <p className='text-xs md:text-xl font-thin'>Total Downloads</p>
        <h1 className='font-bold text-2xl md:text-5xl '>29.6M</h1>
        <p className='text-xs md:text-xl font-thin'>21% more than last month</p>
    </div>
        <div className='p-2 md:p-5 space-y-2'>
        <p className='text-xs md:text-xl font-thin'>Total Reviews</p>
        <h1 className='font-bold text-2xl md:text-5xl '>906K</h1>
        <p className='text-xs md:text-xl font-thin'>46% more than last month</p>
    </div>
        <div className='p-2 md:p-5 space-y-2'>
        <p className='text-xs md:text-xl font-thin'>Active Apps</p>
        <h1 className='font-bold text-2xl md:text-5xl '>132+</h1>
        <p className='text-xs md:text-xl font-thin'>31% more will Launch</p>
    </div>
</div>
        </div>



   
 <Apps data={data}></Apps>
        </div>
    );
};

export default Home;

