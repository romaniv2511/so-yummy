import React, { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

import uploadImg from 'img/add-recipe-placeholder.png';
import {
  InputUpload,
  Title,
  Wrap,
  Form,
  ImgUploadWrap,
  InputDescriptionWrap,
  InputDescription,
  SelectDescription,
  TitleIngredients,
  WrapIngredients,
  InputIngredientsWrap,
  MainWrapIngredients,
  InputIngredients,
  SelectIngredients,
  TitlePreparation,
  WrapPreparation,
  TextAreaPreparation,
  ButtonAdd,
  WrapButtonAdd,
  Description,
} from './AddRecipeForm.styled';
import { Wrapper } from 'components/Container/Container.styles';
import { Counter } from '../Counter/Counter';

export const AddRecipeForm = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(state => state + 1);
  };

  const handleDecrement = () => {
    setCount(state => state - 1);
  };

  return (
    <Wrapper>
      <Wrap>
        <Title>Add recipe</Title>
        <Form>
          <Description>
            <ImgUploadWrap>
              <label htmlFor="file-input">
                <img src={uploadImg} alt="upload-img" />
              </label>

              <InputUpload id="file-input" type="file" />
            </ImgUploadWrap>
            <div>
              <InputDescriptionWrap>
                <InputDescription
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter item title"
                />
              </InputDescriptionWrap>
              <InputDescriptionWrap>
                <InputDescription
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter about recipe"
                />
              </InputDescriptionWrap>
              <InputDescriptionWrap>
                <InputDescription
                  type="text"
                  name=""
                  id=""
                  placeholder="Category"
                  disabled
                />
                <SelectDescription name="categories" id="categories">
                  <option value="Breakfast">Breakfast</option>
                  <option value="Beef">Beef</option>
                  <option value="Dessert">Dessert</option>
                  <option value="Goat">Goat</option>
                  <option value="Lamb">Lamb</option>
                  <option value="Miscellaneous">Miscellaneous</option>
                </SelectDescription>
              </InputDescriptionWrap>
              <InputDescriptionWrap>
                <InputDescription
                  type="text"
                  name=""
                  id="cooking-time"
                  placeholder="Cooking time"
                  disabled
                />
                <SelectDescription name="cooking-time" id="cooking-time">
                  <option value="">40 min</option>
                  <option value="">30 min</option>
                  <option value="">20 min</option>
                  <option value="">15 min</option>
                  <option value="">10 min</option>
                  <option value="">5 min</option>
                </SelectDescription>
              </InputDescriptionWrap>
            </div>
          </Description>
          <MainWrapIngredients>
            <WrapIngredients>
              <TitleIngredients>Ingredients</TitleIngredients>
              <Counter
                count={count}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
              />
            </WrapIngredients>

            <InputIngredientsWrap>
              <div>
                <InputIngredients type="text" name="" id="" placeholder="" />
                <SelectIngredients name="ingredients" id="ingredients">
                  <option value="Beef">tbs</option>
                  <option value="Breakfast">tsp</option>
                  <option value="Dessert">kg</option>
                  <option value="Goat">g</option>
                </SelectIngredients>
              </div>
              <IoCloseOutline size={18} />
            </InputIngredientsWrap>
            <InputIngredientsWrap>
              <div>
                <InputIngredients type="text" name="" id="" placeholder="" />
                <SelectIngredients name="ingredients" id="ingredients">
                  <option value="Beef">tbs</option>
                  <option value="Breakfast">tsp</option>
                  <option value="Dessert">kg</option>
                  <option value="Goat">g</option>
                </SelectIngredients>
              </div>
              <IoCloseOutline size={18} />
            </InputIngredientsWrap>

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
      </Wrap>
    </Wrapper>
  );
};
