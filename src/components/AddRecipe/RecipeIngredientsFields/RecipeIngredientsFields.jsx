import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IoCloseOutline } from 'react-icons/io5';
import {
  InputIngredients,
  InputIngredientsWrap,
  SelectIngredients,
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

export const RecipeIngredientsFields = () => {
  const [count, setCount] = useState(0);

  const [ingredients, setIngredients] = useState([]);
  const [inputValue, setInputValue] = useState('');
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query' ?? '');

  useEffect(() => {
    if (query === '') {
      return;
    }
    const getIngredients = async () => {
      try {
        // setIsLoading(true);
        const data = await getIngredientsByQuery(query);
        setIngredients(data);

        // setIsLoading(false);
      } catch {
        // console.log(error)
      }
    };
    getIngredients();
  }, [query]);

  const updateQueryString = e => {
    setInputValue(e.target.value);
    setSearchParams(e.target.value !== '' ? { query: e.target.value } : {});
  };

  const handleIncrement = () => {
    setCount(state => state + 1);
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

      <InputIngredientsWrap>
        <div>
          <InputIngredients
            type="text"
            name="ingredients"
            id="ingredients"
            placeholder=""
            value={inputValue}
            onChange={e => updateQueryString(e)}
          />
          <ul>
            {ingredients.map(({ _id, ttl }) => (
              <li key={_id}>
                <p onClick={() => setInputValue(ttl)}>{ttl}</p>
              </li>
            ))}
          </ul>

          <SelectIngredients name="" id="">
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
    </>
  );
};
