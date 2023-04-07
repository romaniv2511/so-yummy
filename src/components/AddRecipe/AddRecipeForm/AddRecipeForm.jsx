import React, { useState } from 'react';
// import { IoCloseOutline } from 'react-icons/io5';

import {
  Form,
  // TitleIngredients,
  // WrapIngredients,
  // InputIngredientsWrap,
  MainWrapIngredients,
  // InputIngredients,
  // SelectIngredients,
  TitlePreparation,
  WrapPreparation,
  TextAreaPreparation,
  ButtonAdd,
  WrapButtonAdd,
} from './AddRecipeForm.styled';

// import { Counter } from '../Counter/Counter';
import { RecipeDescriptionFields } from '../RecipeDescriptionFields/RecipeDescriptionFields';
import { RecipeIngredientsFields } from '../RecipeIngredientsFields/RecipeIngredientsFields';

export const AddRecipeForm = () => {
  // const [count, setCount] = useState(0);
  const [descriptionFields, setDescriptionFields] = useState({
    title: '',
    about: '',
    category: 'Breakfast',
    time: '40 min',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setDescriptionFields(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(descriptionFields);
    reset();
  };

  const reset = () => {
    setDescriptionFields({
      title: '',
      about: '',
      category: 'Breakfast',
      time: '40 min',
    });
  };

  // const handleIncrement = () => {
  //   setCount(state => state + 1);
  // };

  // const handleDecrement = () => {
  //   setCount(state => state - 1);
  // };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <RecipeDescriptionFields
          onInput={handleChange}
          inputs={descriptionFields}
        />

        <MainWrapIngredients>
          <RecipeIngredientsFields />
          {/* <WrapIngredients>
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
          </InputIngredientsWrap> */}

          <WrapPreparation>
            <TitlePreparation>Recipe Preparation</TitlePreparation>
            <TextAreaPreparation
              name=""
              id=""
              // cols="30"
              rows="7"
              placeholder="Enter recipe"
            ></TextAreaPreparation>
          </WrapPreparation>
        </MainWrapIngredients>
        <WrapButtonAdd>
          <ButtonAdd type="submit">Add</ButtonAdd>
        </WrapButtonAdd>
      </Form>
    </div>
  );
};
