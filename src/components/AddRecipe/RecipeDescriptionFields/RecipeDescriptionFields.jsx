import React from 'react';

import uploadImg from 'img/add-recipe-placeholder.png';
import {
  Description,
  ImgUploadWrap,
  InputDescription,
  InputDescriptionMainWrap,
  InputDescriptionWrap,
  InputUpload,
  SelectDescription,
} from './RecipeDescriptionFields.styled';

export const RecipeDescriptionFields = ({ onInput, inputs }) => {
  const handleInputChange = e => {
    onInput(e);
  };

  return (
    <Description>
      <ImgUploadWrap>
        <label htmlFor="file-input">
          <img src={uploadImg} alt="upload-img" />
        </label>
        <InputUpload id="file-input" type="file" />
      </ImgUploadWrap>
      <InputDescriptionMainWrap>
        <InputDescriptionWrap>
          <InputDescription
            type="text"
            name="title"
            value={inputs.title}
            id="description"
            onChange={handleInputChange}
            placeholder="Enter item title"
          />
        </InputDescriptionWrap>
        <InputDescriptionWrap>
          <InputDescription
            type="text"
            name="description"
            value={inputs.description}
            id="description"
            onChange={handleInputChange}
            placeholder="Enter about recipe"
          />
        </InputDescriptionWrap>
        <InputDescriptionWrap>
          <InputDescription type="text" placeholder="Category" disabled />
          <SelectDescription
            name="category"
            value={inputs.category}
            id="category"
            onChange={handleInputChange}
          >
            <option value="Breakfast">Breakfast</option>
            <option value="Beef">Beef</option>
            <option value="Dessert">Dessert</option>
            <option value="Goat">Goat</option>
            <option value="Lamb">Lamb</option>
            <option value="Miscellaneous">Miscellaneous</option>
          </SelectDescription>
        </InputDescriptionWrap>
        <InputDescriptionWrap>
          <InputDescription type="text" placeholder="Cooking time" disabled />
          <SelectDescription
            name="time"
            id="time"
            value={inputs.time}
            onChange={handleInputChange}
          >
            <option value="40 min">40 min</option>
            <option value="30 min">30 min</option>
            <option value="20 min">20 min</option>
            <option value="15 min">15 min</option>
            <option value="10 min">10 min</option>
            <option value="5 min">5 min</option>
          </SelectDescription>
        </InputDescriptionWrap>
      </InputDescriptionMainWrap>
    </Description>
  );
};
