import React from 'react';

const Nav = () => {
    return (
        <div className='text-center md:flex justify-evenly items-center mt-4'>
            <h1 className='md:font-bold text-2xl'>Recipe Calories</h1>
           <div className="text-center md:flex gap-3">
           <button>Home</button>
            <button>Recipes</button>
            <button>About</button>
            <button>Search</button>
           </div>
            <div className='flex items-center justify-center'>
            <label className="md:input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>

<div className='flex justify-center items-center ml-2 w-8'><button><img src="./public/img/Frame 5.png" alt="" srcset="" /></button></div>
            </div>
        </div>
    );
};

export default Nav;