    import React, { useEffect, useState } from 'react';
    import Footer from '../../components/Footer/Footer';
    import Navbar from '../../components/Header/Navbar';
    import Downloadsign from "./../../assets/Downloadsign.png"
    import Star from "./../../assets/Star.png";
import { useLoaderData } from 'react-router-dom';
import { getStoredApp } from '../../Utility/AddtoDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


    const Installation = () => {

        const MySwal = withReactContent(Swal)
        

        const data = useLoaderData();
            const [myAppList, setMyAppList] = useState([]); 
            const [sort, setsort]= useState([]);

           const handleUninstall = (appId) => {
    
        const storedAppData = getStoredApp();
        const updatedApps = storedAppData.filter(id => parseInt(id) !== appId);
        localStorage.setItem("appList", JSON.stringify(updatedApps));

     setMyAppList(prev => prev.filter(app => app.id !== appId));

    }

        useEffect(()=>{
            const storedAppData=getStoredApp();
            const ConvertedStoredApps=storedAppData.map(id=>parseInt(id))
            const myAppList = data.filter(app=>ConvertedStoredApps.includes(app.id));
            setMyAppList(myAppList)
                }, [data])
        

        const handlesort = (order)=>{

          const  setsortApps = [...myAppList];

          if (order==='high-low') {
            setsortApps.sort((a,b)=> b.downloads-a.downloads)
          }
          else if (order==='low-high') {
        
            setsortApps.sort((a,b)=> a.downloads-b.downloads)
}
        setMyAppList(setsortApps);
        }

        return (
        <div className='bg-[#F1EFEF] p-4'>
            <div className='w-10/12 mx-auto'>
            <div className='p-20'>
                <h1 className='font-bold text-4xl text-[#001931] text-center'>Your Installed Apps</h1>
                <p className='text-[#627382] text-center'>Explore All Trending Apps on the Market developed by us</p>
            </div>

    <div className='flex justify-between items-center p-5'>
        <h1 className='font-bold text-xl text-[#001931] text-center'>{myAppList.length} App Found</h1>
       <div className="dropdown dropdown-start">
  <div tabIndex={0} role="button" className="btn m-1">Sort By Size ⬇️</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={()=>handlesort('high-low')}><a>High-Low</a></li>
    <li onClick={()=>handlesort('low-high')}><a>Low-High</a></li>
  </ul>
</div>
            </div>
     

       {myAppList.map(app => (
        <div key={app.id} className='bg-white p-3 flex justify-between items-center mb-4 rounded-lg'>
            <div className='flex items-center space-x-3'>
                <img src={app.image} alt="" />
                <div>
                    <h1 className='font-bold text-md text-[#001931]'>{app.title}</h1>
        <div className='flex items-center space-x-6 pt-2'>
                    <div className='flex items-center space-x-1'>
                        <img src={Downloadsign} alt="" />
                        <p className='text-[#627382]'>{app.downloads}</p>
                    </div>
                        <div className='flex items-center space-x-1'>
                        <img src={Star} alt="" />
                        <p className='text-[#627382]'>{app.ratingAvg}</p>
                    </div>
                        <div>
                        <p className='text-[#627382]'>{app.size}MB</p>
                    </div>
        </div>
                </div>
            </div>

        <button   onClick={() =>{ handleUninstall(app.id)
    
    Swal.fire({
  title: "App Uninstalled",
  html: "App will uninstalled in <b></b> milliseconds.",
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
    } }) 
}}
 

        className='btn bg-[#00D390] text-white font-bold'>uninstall</button>
        </div>
           ))}
            </div>
        </div>
        );
    };

    export default Installation;

