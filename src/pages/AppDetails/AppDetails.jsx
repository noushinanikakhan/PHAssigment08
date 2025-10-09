import React from 'react';
import Downloadicon from "./../../assets/icon-downloads.png"
import ratingsicon from "./../../assets/icon-ratings.png"
import Review from "./../../assets/icon-review.png"
import { useLoaderData, useParams } from 'react-router-dom';

const AppDetails = () => {

   const {id} =useParams();
   const appId = parseInt(id);
   const data= useLoaderData();
   const singleApp = data.find(App=> App.id ===appId);

   const {image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings}= singleApp

   console.log(id)

    return (
    <div className='p-15 space-y-5'>
        
    <div className='flex gap-5'>
        <img src={image} className='w-48' alt="" />
        <div className='space-y-4'>
            <h1 className='font-bold text-4xl text-[#001931]'>{title}</h1>
            <p className='font-bold text-[#627382]'>Developed by <span className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text'>{companyName}</span></p>
           <div className='flex space-x-15 items-center'>
             <div className=' space-y-3'>
                <img src={Downloadicon} alt="" />
                <p>Downloads</p>
                <h1 className='font-bold text-4xl text-[#001931]'>{downloads}</h1>
            </div>
             <div className=' space-y-2'>
                <img src={ratingsicon} alt="" />
                <p>Average Ratings</p>
                <h1 className='font-bold text-4xl text-[#001931]'>{ratingAvg}</h1>
            </div>
             <div className=' space-y-1'>
                <img src={Review} alt="" />
                <p>Total Reviews</p>
                <h1 className='font-bold text-4xl text-[#001931]'>{reviews}</h1>
            </div>
           </div>
           <button className='btn bg-[#00D390] text-white font-bold text-xl'>Install Now ({size})</button>
        </div>
    </div>

   <div>
    <h1 className='font-bold text-xl text-[#001931]'>Ratings</h1>
   </div>

   <div>
    <h1 className='font-bold text-xl text-[#001931]'>Description</h1>
    <p className='text-[#627382]'>{description}
</p>
   </div>

    </div>
    );
};

export default AppDetails;