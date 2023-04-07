import React from 'react';
import {
  TextAreaPreparation,
  TitlePreparation,
} from './RecipePreparationFields.styled';

export const RecipePreparationFields = ({ onInput, inputs }) => {
  const handleInputChange = e => {
    onInput(e);
  };

  return (
    <>
      <TitlePreparation>Recipe Preparation</TitlePreparation>
      <TextAreaPreparation
        name="preparation"
        value={inputs.preparation}
        id="preparation"
        rows="7"
        placeholder="Enter recipe"
        onChange={handleInputChange}
      ></TextAreaPreparation>
    </>
  );
};
