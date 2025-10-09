import React from "react";
import Downloadsign from "./../../assets/Downloadsign.png"
import Star from "./../../assets/Star.png"
import { Link } from "react-router";

const App = ({singleApp}) => {

    console.log(singleApp)

   const {title, ratingAvg, downloads, image,id } = singleApp

    return (
            
    <Link to={`/appDetails/${id}`}>
    <div className="card bg-base-100 shadow-sm">
          <figure className="px-10 pt-10">
            <img 
              src={image}
              alt="Shoes"
              referrerPolicy="no-referrer"
              className="rounded-xl " />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{title}</h2>
            <div className=" flex w-11/12 items-center justify-between">
              <button className="btn text-[#00D390]">
                <img src={Downloadsign} alt="" />
                {downloads}</button>
              <button className="btn text-[#FF8811]">
                <img src={Star} alt="" />
                {ratingAvg}</button>
            </div>
          </div>
        </div>
     
    </Link>


      
    );
};

export default App;

