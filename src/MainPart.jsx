import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';

const MainPart = () => {

    const [recipes, setRecipes] = useState([]);
    useEffect(()=>{
        fetch('./public/Noor.json')
        .then(res => res.json())
        .then(data=>setRecipes(data))
    },[])

    return (
        <div className='md:flex'>
            <div className="w-3/5 md:grid grid-cols-2 gap-4">
                {
                    recipes.map(recipe=> <RecipeCard recipe={recipe}></RecipeCard>)
                }
            </div>
            <div>
                hellow
            </div>
        </div>
    );
};

export default MainPart;