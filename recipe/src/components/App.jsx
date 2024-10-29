import React from 'react';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';
import Favorites from './Favorites';
import SearchBar from './SearchBar';
import AddRecipeForm from './AddRecipeForm';

const App = () => {
  return (
    <div className='recipe__page'>
      <h1>Recipe Book</h1>
      <SearchBar />
      <AddRecipeForm />
      <RecipeList />
      <Favorites />
    </div>
  );
};

export default App;
