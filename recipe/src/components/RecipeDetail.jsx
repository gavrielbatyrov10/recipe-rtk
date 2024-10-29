import React from 'react';

const RecipeDetail = ({ recipe }) => {
  if (!recipe) return <p>Select a recipe to see details.</p>;

  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>Ingredients: {recipe.ingredients}</p>
      <p>Instructions: {recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
