import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  CustomInput,
  DeleteBtn,
  InputIngredients,
  InputIngredientsWrap,
  SelectIngredients,
  SelectWrap,
  TitleIngredients,
  WrapIngredients,
} from './RecipeIngredientsFields.styled';
import { Counter } from '../Counter/Counter';
import { useSearchParams } from 'react-router-dom';
import { nanoid } from 'nanoid';

const getIngredientsByQuery = async query => {
  const response = await axios.get(
    `https://soyummy-tw3y.onrender.com/api/v1/ingredients?query=${query}`
  );
  const { data } = response.data;
  return data;
};

export const RecipeIngredientsFields = ({ onInput, onSetValue }) => {
  const [count, setCount] = useState(0);
  const [ingredients, setIngredients] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const [inputFields, setInputFields] = useState([]);

  const [activeInputIndex, setActiveInputIndex] = useState(-1);

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
    setActiveInputIndex(index);
    if (event.target.name !== 'measure') {
      updateQueryString(event);
    }
  };

  const handleAddFields = () => {
    setInputFields([...inputFields, { id: nanoid(), field: '', measure: '' }]);
  };

  const handleRemoveFields = index => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const query = searchParams.get('query' ?? '');

  useEffect(() => {
    if (query === '') {
      return;
    }
    const getIngredients = async () => {
      try {
        const data = await getIngredientsByQuery(query);
        setIngredients(data);
      } catch {}
    };
    getIngredients();
  }, [query]);

  const updateQueryString = e => {
    const { value } = e.target;
    onInput(e);
    setSearchParams(value !== '' ? { query: value } : {});
  };

  const handleIncrement = () => {
    setCount(state => state + 1);
    handleAddFields();
  };

  const handleDecrement = () => {
    setCount(state => state - 1);
    handleRemoveFields();
  };

  const handleDelete = fieldId => {
    const newFields = inputFields.filter(({ id }) => id !== fieldId);

    setInputFields(newFields);
    onSetValue(newFields);
    setCount(state => state - 1);
  };

  return (
    <>
      <WrapIngredients>
        <TitleIngredients>Ingredients</TitleIngredients>
        <Counter
          count={count}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      </WrapIngredients>

      {inputFields.map((inputField, index) => (
        <div key={inputField.id}>
          <InputIngredientsWrap>
            <InputIngredients
              autoComplete="off"
              name="field"
              id={inputField.id}
              value={inputField.field}
              onChange={event => handleChangeInput(index, event)}
            />
            <SelectWrap>
              <span>
                <CustomInput
                  autoComplete="off"
                  type="text"
                  name="measure"
                  id={inputField.id}
                  value={inputField.measure}
                  onChange={event => handleChangeInput(index, event)}
                />
                <SelectIngredients>
                  <option value="Beef">tbs</option>
                  <option value="Breakfast">tsp</option>
                  <option value="Dessert">kg</option>
                  <option value="Goat">g</option>
                </SelectIngredients>
              </span>
            </SelectWrap>
            <DeleteBtn onClick={() => handleDelete(inputField.id)} />
          </InputIngredientsWrap>
          {activeInputIndex === index && (
            <ul>
              {ingredients.map(({ _id, ttl }) => {
                return (
                  <li
                    key={_id}
                    id={_id}
                    onClick={() => {
                      inputField.field = ttl;
                      setActiveInputIndex(-1);
                      inputFields.map(item => {
                        if (item.id === inputField.id) {
                          inputField.id = _id;
                        }
                        return item;
                      });
                      onSetValue(inputFields);
                      // setSearchParams(null);
                    }}
                  >
                    <p>{ttl}</p>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      ))}
    </>
  );
};
