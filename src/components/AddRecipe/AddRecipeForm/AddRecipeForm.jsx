import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  Form,
  MainWrapIngredients,
  WrapPreparation,
  ButtonAdd,
  WrapButtonAdd,
  Description,
  ImgUploadWrap,
  InputUpload,
} from './AddRecipeForm.styled';
import { RecipeDescriptionFields } from '../RecipeDescriptionFields/RecipeDescriptionFields';
import { RecipeIngredientsFields } from '../RecipeIngredientsFields/RecipeIngredientsFields';
import { RecipePreparationFields } from '../RecipePreparationFields/RecipePreparationFields';

import placeholder from 'img/add-recipe-placeholder.png';

const initialValues = {
  title: '',
  description: '',
  category: 'Breakfast',
  time: 40,
  ingredients: [],
  instructions: '',
};

export const AddRecipeForm = () => {
  const [recipes, setRecipes] = useState(initialValues);
  const [image, setImage] = useState('');
  const [imagePreviewUrl, setImagePreviewUrl] = useState(placeholder);
  const [fieldsVisibility, setFieldsVisibility] = useState(true);

  const makeFormDataToSend = (recipes, image) => {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', recipes.title);
    formData.append('description', recipes.description);
    formData.append('instructions', recipes.instructions);
    formData.append('category', recipes.category);
    formData.append('time', recipes.time);
    recipes.ingredients.forEach((ingredient, index) => {
      formData.append(`ingredients[${index}][_id]`, ingredient._id);
      formData.append(`ingredients[${index}][measure]`, ingredient.measure);
    });
    return formData;
  };

  const onImageChange = event => {
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);

    setImage(event.target.files[0]);
  };

  const addRecipe = async data => {
    try {
      const response = await axios.post(
        'https://soyummy-tw3y.onrender.com/api/v1/own-recipes',
        data
      );
      toast.success('the recipe has been added successfully');
      return response.data;
    } catch (error) {
      return error.message;
    }
  };

  const toggleVisibilityIngrFields = () => {
    setFieldsVisibility(true);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setRecipes(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSetIngrValue = data => {
    const fields = data.map(({ id, measure }) => {
      const _id = id;
      return { _id, measure };
    });

    setRecipes(prevState => ({
      ...prevState,
      ingredients: fields,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (recipes.ingredients.length === 0) {
      toast.warn('add at least one ingredient!');
      return;
    }

    if (image === '') {
      toast.warn("add recipe's picture!");
      return;
    }

    // const formData = new FormData();
    // formData.append('image', image);
    // formData.append('title', recipes.title);
    // formData.append('description', recipes.description);
    // formData.append('instructions', recipes.instructions);
    // formData.append('category', recipes.category);
    // formData.append('time', recipes.time);
    // recipes.ingredients.forEach((ingredient, index) => {
    //   formData.append(`ingredients[${index}][_id]`, ingredient._id);
    //   formData.append(`ingredients[${index}][measure]`, ingredient.measure);
    // });

    // makeFormDataToSend(recipes, image);

    addRecipe(makeFormDataToSend(recipes, image));

    reset();
  };

  const reset = () => {
    setFieldsVisibility(false);
    setRecipes(initialValues);
    setImage(placeholder);
    setImagePreviewUrl(placeholder);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Description>
          <ImgUploadWrap>
            <label htmlFor="file-input">
              <img
                src={imagePreviewUrl}
                alt="upload-img"
                width={279}
                height={268}
              />
            </label>
            <InputUpload id="file-input" type="file" onChange={onImageChange} />
          </ImgUploadWrap>
          <RecipeDescriptionFields onInput={handleChange} inputs={recipes} />
        </Description>

        <MainWrapIngredients>
          <RecipeIngredientsFields
            toggleVisibility={toggleVisibilityIngrFields}
            fieldsVisibility={fieldsVisibility}
            onInput={handleChange}
            onSetValue={handleSetIngrValue}
          />
          <WrapPreparation>
            <RecipePreparationFields onInput={handleChange} inputs={recipes} />
          </WrapPreparation>
        </MainWrapIngredients>
        <WrapButtonAdd>
          <ButtonAdd type="submit">Add</ButtonAdd>
        </WrapButtonAdd>
      </Form>
    </div>
  );
};
