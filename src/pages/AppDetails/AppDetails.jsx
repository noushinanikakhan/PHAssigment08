import React, { useState } from 'react';
import Downloadicon from "./../../assets/icon-downloads.png"
import ratingsicon from "./../../assets/icon-ratings.png"
import Review from "./../../assets/icon-review.png"
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { addToStoredDB } from '../../Utility/AddtoDB';



const MySwal = withReactContent(Swal)

const AppDetails = () => {

   const {id} =useParams();
   const appId = parseInt(id);
   const data= useLoaderData();
   const singleApp = data.find(App=> App.id ===appId);

   const {image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings}= singleApp

   console.log(id)

    const [isInstalled, setIsInstalled] = useState(false);

    const handleInstall = (id) => {
    setIsInstalled(true);
    addToStoredDB(id);

  };

    return (
    <div className='p-15 space-y-5 bg-[#F1EFEF]'>
        
    <div className='flex gap-10'>
        <img src={image} className='w-48 bg-white' alt="" />
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
<button
  onClick={()=>{
     handleInstall(id);
     if (!isInstalled) {  
  Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your app has been installed",
  showConfirmButton: false,
  timer: 1500
});
 }}}
 
 disabled={isInstalled}
  className={`btn font-bold text-xl ${
    isInstalled
      ? 'bg-[#00D390] text-white'
      : 'bg-[#00D390] text-white hover:bg-[#00b377]'
  }`}
>
  {isInstalled ? 'Installed': `Install Now (${size})`}
</button>

        </div>
    </div>

   <div>
    <h1 className='font-bold text-xl text-[#001931]'>Ratings</h1>
     
     
  <div className="h-64"> 
    <ResponsiveContainer width="80%" height="100%">
      <BarChart  layout="vertical"  width={300} height={40} data={ratings} 
      margin={{ top: 20, right: 30, left: 60, bottom: 5 }}>


    <XAxis type="number" />  
      <YAxis 
        type="category" 
        dataKey="name"  
        width={80}  
      />
        <Bar dataKey="count"  
          fill="#FF8811" 
          barSize={20}
                 radius={[0, 4, 4, 0]}  
 />
      </BarChart>
    </ResponsiveContainer>  
   </div>
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