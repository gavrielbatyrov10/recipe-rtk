import React from 'react';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';
import Favorites from './Favorites';
import SearchBar from './SearchBar';
import AddRecipeForm from './AddRecipeForm';
import Navbar from './Navbar';
import AdvancedCarousel from './AdvancedCarousel';
import FullscreenSlider from './FullscreenSlider';

const App = () => {
  return (
    <div className='recipe__page'>
      <Navbar />
      <FullscreenSlider />
      {/* <AdvancedCarousel /> */}
      <h1 className='title'>Recipe Book</h1>
      <SearchBar />
      <AddRecipeForm />
      <RecipeList />
      <Favorites />
    </div>
  );
};

export default App;
