import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRecipe } from '../redux/actions';

const AddRecipeForm = () => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = { id: Date.now(), name, ingredients, instructions };
    dispatch(addRecipe(newRecipe));
    setName('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input type="text" placeholder="Recipe Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
      <input type="text" placeholder="Instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} />
      <button className='add__btn' type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
