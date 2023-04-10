import React, { useState } from 'react';
import axios from 'axios';
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

const initialValues = {
  title: '',
  description: '',
  category: 'Breakfast',
  time: 40,
  ingredients: [],
  instructions: '',
};

export const AddRecipeForm = () => {
  const [descriptionFields, setDescriptionFields] = useState(initialValues);

  const addRecipe = async text => {
    try {
      const response = await axios.post(
        'https://soyummy-tw3y.onrender.com/api/v1/own-recipes',
        text
      );
      return response.data;
    } catch (error) {
      return error.message;
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setDescriptionFields(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSetValue = data => {
    const filteredFields = data.filter(({ field }) => field !== '');
    const fields = filteredFields.map(({ field }) => field);

    // console.log(fields);
    setDescriptionFields(prevState => ({
      ...prevState,
      ingredients: fields,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(descriptionFields);
    addRecipe(descriptionFields);
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
            handleSubmit={handleSubmit}
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
