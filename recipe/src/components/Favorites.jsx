import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../redux/actions';

const Favorites = () => {
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Favorites</h2>
      <ul>
        {favorites.map(recipe => (
          <li key={recipe.id}>
            {recipe.name}
            <button onClick={() => dispatch(removeFavorite(recipe.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
