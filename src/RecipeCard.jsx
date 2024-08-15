import React from 'react';
import Ingradients from './Ingradients';

const RecipeCard = ({recipe}) => {
    return (
        <div className=''>
           <div className="card bg-base-300 border-black shadow-xl">
  <figure>
    <img
      src={recipe.recipe_image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{recipe.recipe_name}</h2>
    <p>{recipe.short_description}</p> <hr />
    <p>Ingredients: {recipe.ingredients.length}</p> 

    <ul>
      <li>
      {
        recipe.ingredients.map(single=><Ingradients single={single}></Ingradients>)
    }
      </li>
    </ul>
    <div className="flex">
    <p>{recipe.preparing_time}</p> 
    <p>{recipe.calories}</p> 
    </div>
    

    <div className="card-actions justify-center">
      <button className="btn btn-primary">Want To Cook</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default RecipeCard;