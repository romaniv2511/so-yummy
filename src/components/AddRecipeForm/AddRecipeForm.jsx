import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import uploadImg from '../../../src/img/add-recipe-placeholder.png';
import { InputUpload } from './AddRecipeForm.styles';

// const ingredients = [];

export const AddRecipe = () => {
  return (
    <>
      <div>
        <h2>Add recipe</h2>
        <form>
          <div class="image-upload">
            <label for="file-input">
              <img src={uploadImg} alt="upload-img" />
            </label>

            <InputUpload id="file-input" type="file" />
          </div>
          <div>
            <input type="text" name="" id="" placeholder="Enter item title" />
            <input type="text" name="" id="" placeholder="Enter about recipe" />
            <input type="text" name="" id="" placeholder="Category" />
            <select name="categories" id="categories">
              <option value="Beef">Beef</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Dessert">Dessert</option>
              <option value="Goat">Goat</option>
              <option value="Lamb">Lamb</option>
              <option value="Miscellaneous">Miscellaneous</option>
            </select>
            <input
              type="text"
              name=""
              id="cooking-time"
              placeholder="Cooking time"
            />
            <select name="cooking-time" id="cooking-time">
              <option value="">40 min</option>
              <option value="">30 min</option>
              <option value="">20 min</option>
              <option value="">15 min</option>
              <option value="">10 min</option>
              <option value="">5 min</option>
            </select>
          </div>
          <div>
            <h2>Ingredients</h2>
            <button type="button">-</button>
            <span>0</span>
            <button type="button">+</button>
            <input type="text" name="" id="" placeholder="chicken" />
            <select name="ingredients" id="ingredients">
              <option value="Beef">tbs</option>
              <option value="Breakfast">tsp</option>
              <option value="Dessert">kg</option>
              <option value="Goat">g</option>
            </select>
            <IoCloseOutline />
            <input type="text" name="" id="" placeholder="avocado" />
            <select name="ingredients" id="ingredients">
              <option value="Beef">tbs</option>
              <option value="Breakfast">tsp</option>
              <option value="Dessert">kg</option>
              <option value="Goat">g</option>
            </select>
            <IoCloseOutline />
            <input type="text" name="" id="" placeholder="cucumber" />
            <select name="ingredients" id="ingredients">
              <option value="Beef">tbs</option>
              <option value="Breakfast">tsp</option>
              <option value="Dessert">kg</option>
              <option value="Goat">g</option>
            </select>
            <IoCloseOutline />
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
        </form>
      </div>
    </>
  );
};
