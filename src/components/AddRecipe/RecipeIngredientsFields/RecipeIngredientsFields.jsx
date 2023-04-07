import React, { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import {
  InputIngredients,
  InputIngredientsWrap,
  SelectIngredients,
  TitleIngredients,
  WrapIngredients,
} from './RecipeIngredientsFields.styled';
import { Counter } from '../Counter/Counter';

export const RecipeIngredientsFields = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(state => state + 1);
  };

  const handleDecrement = () => {
    setCount(state => state - 1);
  };

  return (
    <>
      <WrapIngredients>
        <TitleIngredients>Ingredients</TitleIngredients>
        <Counter
          count={count}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      </WrapIngredients>

      <InputIngredientsWrap>
        <div>
          <InputIngredients type="text" name="" id="" placeholder="" />
          <SelectIngredients name="ingredients" id="ingredients">
            <option value="Beef">tbs</option>
            <option value="Breakfast">tsp</option>
            <option value="Dessert">kg</option>
            <option value="Goat">g</option>
          </SelectIngredients>
        </div>
        <IoCloseOutline size={18} />
      </InputIngredientsWrap>
      <InputIngredientsWrap>
        <div>
          <InputIngredients type="text" name="" id="" placeholder="" />
          <SelectIngredients name="ingredients" id="ingredients">
            <option value="Beef">tbs</option>
            <option value="Breakfast">tsp</option>
            <option value="Dessert">kg</option>
            <option value="Goat">g</option>
          </SelectIngredients>
        </div>
        <IoCloseOutline size={18} />
      </InputIngredientsWrap>
    </>
  );
};
