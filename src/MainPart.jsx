import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';
import Cook from './Cook';


const MainPart = ({wantToCook,cooks}) => {
console.log(cooks)
    const [recipes, setRecipes] = useState([]);
    useEffect(()=>{
        fetch('./public/Noor.json')
        .then(res => res.json())
        .then(data=>setRecipes(data))
    },[])

    return (
        <div className='md:flex gap-5'>
            <div className=" w-3/5 md:grid grid-cols-2 gap-4">
                {
                    recipes.map(recipe=> <RecipeCard wantToCook={wantToCook} recipe={recipe}></RecipeCard>)
                }
            </div>
            <div>
               <h1 className="text-3xl">Want to Cook: {cooks.length}</h1>
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
 
  </table>
</div>

{
            cooks.map(cook=><Cook cook={cook}></Cook>)
           }

            </div>
        </div>
    );
};

export default MainPart;