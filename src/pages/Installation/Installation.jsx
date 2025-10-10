    import React from 'react';
    import Footer from '../../components/Footer/Footer';
    import Navbar from '../../components/Header/Navbar';
    import Downloadsign from "./../../assets/Downloadsign.png"
    import Star from "./../../assets/Star.png";


    const Installation = () => {

        return (
        <div className='bg-[#F1EFEF] p-4'>
            <div className='w-10/12 mx-auto'>
            <div className='p-20'>
                <h1 className='font-bold text-4xl text-[#001931] text-center'>Your Installed Apps</h1>
                <p className='text-[#627382] text-center'>Explore All Trending Apps on the Market developed by us</p>
            </div>

    <div className='flex justify-between items-center p-5'>
        <h1 className='font-bold text-xl text-[#001931] text-center'>{} App Found</h1>
        <fieldset className="fieldset">

    <select defaultValue="Sort by size" className="select">
        <option className='text-[#627382]' disabled={true}>High-Low</option>
        <option className='text-[#627382]'>Low-High</option>
    </select>
    </fieldset>
            </div>

        <div className='bg-white p-3 flex justify-between items-center '>
            <div>
                <img src="" alt="" />
                <div>
                    <h1 className='font-bold text-md text-[#001931]'>Forest: Focus for Productivity</h1>
        <div className='flex items-center space-x-6 pt-2'>
                    <div className='flex items-center space-x-1'>
                        <img src={Downloadsign} alt="" />
                        <p className='text-[#627382]'>9M</p>
                    </div>
                        <div className='flex items-center space-x-1'>
                        <img src={Star} alt="" />
                        <p className='text-[#627382]'>5</p>
                    </div>
                        <div>
                        <p className='text-[#627382]'>258 MB</p>
                    </div>
        </div>
                </div>
            </div>

        <button className='btn bg-[#00D390] text-white font-bold'>uninstall</button>
        </div>
            </div>
        </div>
        );
    };

    export default Installation;

