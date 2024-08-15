import React from 'react';
import "./banner.css"
const Banner = () => {
    return (
      
        <div className='container'>
            <div className='text-center flex mx-auto mt-5 w-4/5 '>
                <img className='' src="./public/img/Rectangle 1.png" alt="" />
            </div>
           
                <div className="center_text md:text-2xl">
           <div className=" text-white">
           Discover An Exceptional Cooking <br />Class Tailored For You 

        <div className="md:mt-2">Learn and Master With Us </div>
           </div>

           <div className="md:mt-4">
           <button className='btn btn-accent'>Explore Now</button> 
            <button className='btn btn-outline text-yellow-300'>Our Feedback</button> 
           </div>

            </div>   
        </div>
    );
};

export default Banner;