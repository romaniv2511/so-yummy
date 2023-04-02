import React, { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import uploadImg from '../../../src/img/add-recipe-placeholder.png';
import {
  InputUpload,
  Title,
  Wrap,
  Form,
  ImgUploadWrap,
  InputDescriptionWrap,
  InputDescription,
  SelectDescription,
} from './AddRecipeForm.styled';
import { Wrapper } from 'components/Container/Container.styles';

export const AddRecipe = () => {
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
          <div>
            <div>
              <h2>Ingredients</h2>

              <button
                type="button"
                onClick={handleDecrement}
                disabled={count === 0}
              >
                -
              </button>
              <span>{count}</span>
              <button type="button" onClick={handleIncrement}>
                +
              </button>
            </div>

            <div>
              <input type="text" name="" id="" placeholder="chicken" />
              <select name="ingredients" id="ingredients">
                <option value="Beef">tbs</option>
                <option value="Breakfast">tsp</option>
                <option value="Dessert">kg</option>
                <option value="Goat">g</option>
              </select>
              <button type="button">
                <IoCloseOutline />
              </button>
            </div>
            <div>
              {' '}
              <input type="text" name="" id="" placeholder="avocado" />
              <select name="ingredients" id="ingredients">
                <option value="Beef">tbs</option>
                <option value="Breakfast">tsp</option>
                <option value="Dessert">kg</option>
                <option value="Goat">g</option>
              </select>
              <button type="button">
                <IoCloseOutline />
              </button>
            </div>
            <div>
              <input type="text" name="" id="" placeholder="cucumber" />
              <select name="ingredients" id="ingredients">
                <option value="Beef">tbs</option>
                <option value="Breakfast">tsp</option>
                <option value="Dessert">kg</option>
                <option value="Goat">g</option>
              </select>
              <button type="button">
                <IoCloseOutline />
              </button>
            </div>
            <div>
              <h2>Recipe Preparation</h2>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Enter recipe"
              ></textarea>
            </div>
          </div>
          <button type="submit">Add</button>
        </Form>
      </Wrap>
    </Wrapper>
  );
};
