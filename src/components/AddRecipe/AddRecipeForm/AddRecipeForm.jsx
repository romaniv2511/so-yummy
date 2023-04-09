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
import { nanoid } from 'nanoid';

const initialValues = {
  title: 'chicken',
  description: 'description chicken',
  category: 'Breakfast',
  time: '40 min',
  ingredients: '',
  instructions: '',
};

export const AddRecipeForm = () => {
  const [descriptionFields, setDescriptionFields] = useState(initialValues);

  const [userIngredients, setUserIngredients] = useState([]);

  const unitIncrement = () => {
    // console.log(userIngredients);
    setUserIngredients(prev => [
      ...prev,
      { id: nanoid(), ingredient: '', unitValue: 100, qty: 'g' },
    ]);
  };

  const handleChange = event => {
    console.log(event.target);
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
    setDescriptionFields(initialValues);
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
            unitIncrement={unitIncrement}
            userIngredients={userIngredients}
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
