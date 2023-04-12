import React, { useEffect, useState } from 'react';

import {
  InputDescription,
  InputDescriptionMainWrap,
  InputDescriptionWrap,
  SelectDescription,
  StyledOption,
} from './RecipeDescriptionFields.styled';
import axios from 'axios';

const time = [
  5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
  100, 105, 110, 115, 120,
];

export const RecipeDescriptionFields = ({ onInput, inputs }) => {
  const [categoryList, setCategoryList] = useState([]);

  const handleInputChange = e => {
    onInput(e);
  };

  useEffect(() => {
    const renderCategoryList = async () => {
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
    renderCategoryList();
  }, []);

  return (
    <>
      <InputDescriptionMainWrap>
        <InputDescriptionWrap>
          <InputDescription
            required
            autoComplete="off"
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
            required
            autoComplete="off"
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
              <StyledOption value={item} key={item}>
                {item}
              </StyledOption>
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
    </>
  );
};
