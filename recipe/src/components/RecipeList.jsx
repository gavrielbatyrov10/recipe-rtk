import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite } from '../redux/actions';

const RecipeList = () => {
  const recipes = useSelector(state => state.recipes);
  const searchTerm = useSelector(state => state.searchTerm);
  const category = useSelector(state => state.selectedCategory);
  const dispatch = useDispatch();

  const filteredRecipes = recipes
    .filter(recipe => recipe.name.includes(searchTerm))
    .filter(recipe => category === 'all' || recipe.category === category);

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {filteredRecipes.map(recipe => (
          <li key={recipe.id}>
            {recipe.name}
            <button onClick={() => dispatch(addFavorite(recipe))}>Add to Favorites</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
