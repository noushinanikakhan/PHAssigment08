import React, { useState, useEffect } from 'react';
// import Downloadsign from "./../../assets/Downloadsign.png"
// import Star from "./../../assets/Star.png";
import { Link, useLoaderData } from 'react-router';
import App from '../App/App';
import NotFound from '../NotFound/NotFound';

const About = () => {
  const data = useLoaderData();
  const [query, setQuery] = useState('');
  const [filteredApps, setFilteredApps] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [showNotFound, setShowNotFound] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false); 

  useEffect(() => {
    if (Array.isArray(data)) {
    setFilteredApps(data);
    setShowNotFound(false);
    setSearchLoading(false); 
    }
  }, [data]);


  useEffect(() => {
    if (!Array.isArray(data)) return;

      setSearchLoading(true); 


    const timer = setTimeout(() => {
      const searchTerm = query.trim().toLowerCase();
      setHasSearched(searchTerm.length > 0);
      
      if (searchTerm === '') {
      
        setFilteredApps(data);
        setSearchLoading(false);

        return;
      }

    
      const filtered = data.filter(app =>
        app.title.toLowerCase().includes(searchTerm)
      );
      
    setFilteredApps(filtered);
    setShowNotFound(filtered.length === 0 && searchTerm.length > 0);
    setSearchLoading(false);


    }, 300); 

    return () => clearTimeout(timer);
  }, [query, data]);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const clearSearch = () => {
    setQuery('');
    setHasSearched(false);
    setShowNotFound(false); 
    setSearchLoading(false);

  };


    return (
    <div className='p-10 bg-[#F1EFEF]'>
        <div className='w-5/12 mx-auto p-3 text-center space-y-4 '><h1 className='font-bold text-xl md:text-4xl text-[#001931]'>Our All Applications</h1>
        <p className='text-[#627382] text-xs md:text-sm'>Explore All Apps on the Market developed by us. We code for Millions</p>
        </div>


    
        <div className='flex items-center justify-between'>
            <h1 className='font-bold text-xs md:text-xl text-[#001931]'>({Array.isArray(filteredApps) ? filteredApps.length : 0}) Apps Found
         {hasSearched && query && (
            <span className="text-sm font-normal text-[#627382] ml-2">
             
            </span>
          )}
            </h1>
            <label className="input w-32 md:w-auto">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search"
              value={query}
            onChange={handleSearchChange}

  />
</label>
        </div>

        {searchLoading && (
        <div className="flex justify-center items-center py-8">
          <span className="loading loading-dots loading-xl"></span>
        </div>
      )}

     {showNotFound && !searchLoading && <NotFound />}


       {!searchLoading && Array.isArray(filteredApps) && filteredApps.length > 0 && (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 p-5'>
          {filteredApps.map((singleApp) => (
            <App key={singleApp.id} singleApp={singleApp}></App>
          ))}
        </div>
      )}

    </div>
    );
};

export default About;