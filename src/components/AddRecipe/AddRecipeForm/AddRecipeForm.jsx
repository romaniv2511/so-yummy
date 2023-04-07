import React, { useState } from 'react';
import {
  Form,
  MainWrapIngredients,
  TitlePreparation,
  WrapPreparation,
  TextAreaPreparation,
  ButtonAdd,
  WrapButtonAdd,
} from './AddRecipeForm.styled';
import { RecipeDescriptionFields } from '../RecipeDescriptionFields/RecipeDescriptionFields';
import { RecipeIngredientsFields } from '../RecipeIngredientsFields/RecipeIngredientsFields';

export const AddRecipeForm = () => {
  const [descriptionFields, setDescriptionFields] = useState({
    title: '',
    about: '',
    category: 'Breakfast',
    time: '40 min',
    ingredients: '',
    // ingredients: [{ ttl: '', quantity: '' }],
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setDescriptionFields(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSetValue = data => {
    setDescriptionFields(prevState => ({ ...prevState, ingredients: data }));
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
      ingredients: '',
    });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <RecipeDescriptionFields
          onInput={handleChange}
          inputs={descriptionFields}
        />

        <MainWrapIngredients>
          <RecipeIngredientsFields
            onInput={handleChange}
            inputs={descriptionFields}
            onSetValue={handleSetValue}
          />
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
