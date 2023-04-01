import React from 'react';
// import { MdOutlineAddAPhoto } from 'react-icons/md';
import uploadImg from '../../../src/img/add-recipe-placeholder.png';
import { InputUpload } from './AddRecipe.styles';

export const AddRecipe = () => {
  return (
    <>
      <div class="row">
        <span class="label">Select Text</span>
        <span class="box">
          <input type="text" name="data" class="datatext" id="datatext" />
          <select class="contentselect" id="contentselect">
            <option></option>
            <option value="one">test1</option>
            <option value="two">test2</option>
          </select>
        </span>
      </div>
      <div>
        <h2>Add recipe</h2>
        <form>
          <div class="image-upload">
            <label for="file-input">
              <img src={uploadImg} alt="upload-img" />
            </label>

            <InputUpload id="file-input" type="file" />
          </div>
        </form>
      </div>
    </>
  );
};
