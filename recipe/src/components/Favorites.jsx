import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../redux/actions';

const Favorites = () => {
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  return (
    <div className='favorites__container'>
      <h2 className='favorite__title'>Favorites</h2>
      <ul>
        {favorites.map(recipe => (
          <li className='recipe__name' key={recipe.id}>
            {recipe.name}
            <button className='btn' onClick={() => dispatch(removeFavorite(recipe.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
