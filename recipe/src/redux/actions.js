export const setRecipes = (recipes) => ({ type: 'SET_RECIPES', payload: recipes });
export const addFavorite = (recipe) => ({ type: 'ADD_FAVORITE', payload: recipe });
export const removeFavorite = (id) => ({ type: 'REMOVE_FAVORITE', payload: id });
export const setSearchTerm = (term) => ({ type: 'SET_SEARCH_TERM', payload: term });
export const setCategory = (category) => ({ type: 'SET_CATEGORY', payload: category });
export const addRecipe = (recipe) => ({ type: 'ADD_RECIPE', payload: recipe });
