import React, { useState } from 'react';
import {
  Form,
  MainWrapIngredients,
  WrapPreparation,
  ButtonAdd,
  WrapButtonAdd,
} from './AddRecipeForm.styled';
import { RecipeDescriptionFields } from '../RecipeDescriptionFields/RecipeDescriptionFields';
import { RecipeIngredientsFields } from '../RecipeIngredientsFields/RecipeIngredientsFields';
import { RecipePreparationFields } from '../RecipePreparationFields/RecipePreparationFields';

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
      preparation: '',
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
            <RecipePreparationFields
              onInput={handleChange}
              inputs={descriptionFields}
            />
          </WrapPreparation>
        </MainWrapIngredients>
        <WrapButtonAdd>
          <ButtonAdd type="submit">Add</ButtonAdd>
        </WrapButtonAdd>
      </Form>
    </div>
  );
};
