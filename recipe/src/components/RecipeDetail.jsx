import React from 'react';

const RecipeDetail = ({ recipe }) => {
  if (!recipe) return <p>Select a recipe to see details.</p>;

  return (
    <div className='recipe__detail--container'>
      <h2 className='recipe__name'>{recipe.name}</h2>
      <p className='ingredients'>Ingredients: {recipe.ingredients}</p>
      <p className='instructions'>Instructions: {recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
