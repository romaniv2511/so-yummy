import React, { useEffect, useState } from 'react';

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
import axios from 'axios';

const time = [
  5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
  100, 105, 110, 115, 120,
];

export const RecipeDescriptionFields = ({ onInput, inputs }) => {
  const [categoryList, setCategoryList] = useState([]);
  // const [timeList, setTimeList] = useState(time);
  // const [error, setError] = useState(null);

  const handleInputChange = e => {
    onInput(e);
  };

  useEffect(() => {
    const renderList = async () => {
      try {
        const response = await axios.get(
          `https://soyummy-tw3y.onrender.com/api/v1/recipes/category-list`
        );
        const { data } = response.data;
        if (response) {
          setCategoryList(data);
        }
      } catch (error) {
        console.log(error);
        setCategoryList([]);
      }
    };
    renderList();
  }, []);

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
            {categoryList.map(item => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
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
            {time.map(item => (
              <option value={Number(item)} key={item}>
                {`${item} min`}
              </option>
            ))}
          </SelectDescription>
        </InputDescriptionWrap>
      </InputDescriptionMainWrap>
    </Description>
  );
};
