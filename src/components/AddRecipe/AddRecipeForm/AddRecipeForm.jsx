import React, { useEffect, useState } from 'react';
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
import {
  Description,
  ImgUploadWrap,
  InputUpload,
} from '../RecipeDescriptionFields/RecipeDescriptionFields.styled';
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
  const [image, setImage] = useState(uploadImg);
  const [descriptionFields, setDescriptionFields] = useState(initialValues);

  const onImageChange = event => {
    setImage(event.target.files[0]);
    // if (event.target.files && event.target.files[0]) {
    //   setImage(URL.createObjectURL(event.target.files[0]));
    // }
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

  const handleChange = event => {
    const { name, value } = event.target;
    setDescriptionFields(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSetValue = data => {
    const fields = data.map(({ id, measure }) => {
      const _id = id;
      return { _id, measure };
    });

    setDescriptionFields(prevState => ({
      ...prevState,
      ingredients: fields,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    descriptionFields.thumb = image;
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
        <Description>
          <ImgUploadWrap>
            <label htmlFor="file-input">
              <img src={image} alt="upload-img" width={279} height={268} />
            </label>
            <InputUpload id="file-input" type="file" onChange={onImageChange} />
          </ImgUploadWrap>
          <RecipeDescriptionFields
            onInput={handleChange}
            inputs={descriptionFields}
          />
        </Description>

        <MainWrapIngredients>
          <RecipeIngredientsFields
            onInput={handleChange}
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
