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
        name="instructions"
        value={inputs.instructions}
        id="instructions"
        rows="7"
        placeholder="Enter recipe"
        onChange={handleInputChange}
      ></TextAreaPreparation>
    </>
  );
};
