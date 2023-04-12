import React, { useEffect, useState } from 'react';
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

import uploadImg from 'img/add-recipe-placeholder.png';

const initialValues = {
  thumb: '',
  title: '',
  description: '',
  category: 'Breakfast',
  time: 40,
  ingredients: [],
  instructions: '',
};

export const AddRecipeForm = () => {
  const [recipes, setRecipes] = useState(initialValues);
  const [image, setImage] = useState(uploadImg);
  const [fieldsVisibility, setFieldsVisibility] = useState(true);

  const onImageChange = event => {
    setImage(event.target.files[0]);
  };

  useEffect(() => {
    const handleApiImage = () => {
      if (image === uploadImg) {
        return;
      }
      const formData = new FormData();
      formData.append('image', image);
      try {
        axios
          .patch(
            'https://soyummy-tw3y.onrender.com/api/v1/own-recipes/upload',
            formData
          )
          .then(({ data }) => {
            setImage(data.data);
          });
      } catch (error) {
        console.log(error.message);
      }
    };
    handleApiImage();
  }, [image]);

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

  const toggleVisibility = () => {
    setFieldsVisibility(true);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setRecipes(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSetValue = data => {
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
    recipes.thumb = image;
    if (recipes.ingredients.length === 0) {
      toast.warn('add at least one ingredient!');
      return;
    }
    toast.success('the recipe has been added successfully');
    console.log(recipes);
    addRecipe(recipes);
    reset();
  };

  const reset = () => {
    setFieldsVisibility(false);
    setRecipes(initialValues);
    setImage(uploadImg);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Description>
          <ImgUploadWrap>
            <label htmlFor="file-input">
              <img src={image} alt="upload-img" width={279} height={268} />
            </label>
            <InputUpload id="file-input" type="file" onChange={onImageChange} />
          </ImgUploadWrap>
          <RecipeDescriptionFields onInput={handleChange} inputs={recipes} />
        </Description>

        <MainWrapIngredients>
          <RecipeIngredientsFields
            toggleVisibility={toggleVisibility}
            fieldsVisibility={fieldsVisibility}
            onInput={handleChange}
            onSetValue={handleSetValue}
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
