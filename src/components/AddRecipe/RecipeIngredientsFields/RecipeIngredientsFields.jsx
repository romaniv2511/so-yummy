import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { IoCloseOutline } from 'react-icons/io5';
import {
  InputIngredients,
  // InputIngredientsWrap,
  // SelectIngredients,
  TitleIngredients,
  WrapIngredients,
} from './RecipeIngredientsFields.styled';
import { Counter } from '../Counter/Counter';
import { useSearchParams } from 'react-router-dom';

const getIngredientsByQuery = async query => {
  const response = await axios.get(
    `https://soyummy-tw3y.onrender.com/api/v1/ingredients?query=${query}`
  );
  const { data } = response.data;
  return data;
};

// const measure = ['tbs', 'tsp', 'kg', 'g'];

export const RecipeIngredientsFields = ({
  userIngredients,
  unitIncrement,
  onInput,
  inputs,
  onSetValue,
}) => {
  const [count, setCount] = useState(0);
  const [ingredients, setIngredients] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const [inputFields, setInputFields] = useState([]);

  const [activeInputIndex, setActiveInputIndex] = useState(-1);

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   console.log('InputFields', inputFields);
  // };

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
    console.log(index);
    console.log(event.target.id);
    if ((index = event.target.id)) {
      updateQueryString(event);
    }

    // updateQueryString(event);
  };

  const handleAddFields = () => {
    setInputFields([...inputFields, { firstName: '', lastName: '' }]);
  };

  // const handleRemoveFields = index => {
  //   const values = [...inputFields];
  //   values.splice(index, 1);
  //   setInputFields(values);
  // };

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
    // unitIncrement();
    handleAddFields();
  };

  const handleDecrement = () => {
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
        <div key={index}>
          <InputIngredients
            name="ingredient"
            id={index}
            value={inputField[index]}
            onChange={event => {
              if ((index = event.target.id)) {
                handleChangeInput(index, event);
              }
            }}
          />
          <ul>
            {ingredients.map(({ _id, ttl }) => {
              console.log(ingredients);
              return (
                <li key={_id}>
                  <p
                    onClick={() => {
                      onSetValue(ttl);
                    }}
                  >
                    {ttl}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      {/* <ul>
        {ingredients.map(({ id }) => (
          <li key={id}>
           
            <div>
              <InputIngredients
                type="text"
                name="ingredients"
                id="ingredients"
                placeholder=""
                value={inputs.ingredients}
                onChange={e => updateQueryString(e)}
              />

              <ul>
                {ingredients.map(({ _id, ttl }) => (
                  <li key={_id}>
                    <p
                      onClick={() => {
                        onSetValue(ttl);
                      }}
                    >
                      {ttl}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
           
          </li>
        ))}
      </ul> */}
    </>
  );
};
