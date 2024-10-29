const initialState = {
  recipes: [],
  favorites: [],
  searchTerm: '',
  selectedCategory: 'all',
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RECIPES':
      return { ...state, recipes: action.payload };
    case 'ADD_FAVORITE':
      return { ...state, favorites: [...state.favorites, action.payload] };
    case 'REMOVE_FAVORITE':
      return { ...state, favorites: state.favorites.filter(recipe => recipe.id !== action.payload) };
    case 'SET_SEARCH_TERM':
      return { ...state, searchTerm: action.payload };
    case 'SET_CATEGORY':
      return { ...state, selectedCategory: action.payload };
    case 'ADD_RECIPE':
      return { ...state, recipes: [...state.recipes, action.payload] };
    default:
      return state;
  }
};

export default recipeReducer;
