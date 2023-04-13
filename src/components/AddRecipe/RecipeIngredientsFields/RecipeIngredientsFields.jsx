import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  CustomInput,
  DeleteBtn,
  InputIngredients,
  InputIngredientsWrap,
  QueryItem,
  QueryList,
  SelectIngredients,
  SelectWrap,
  TitleIngredients,
  WrapIngredients,
} from './RecipeIngredientsFields.styled';
import { Counter } from '../Counter/Counter';
import { useSearchParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';

const getIngredientsByQuery = async query => {
  const response = await axios.get(
    `https://soyummy-tw3y.onrender.com/api/v1/ingredients?query=${query}`
  );
  const { data } = response.data;
  return data;
};

export const RecipeIngredientsFields = ({
  onInput,
  onSetValue,
  fieldsVisibility,
  toggleVisibility,
}) => {
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
    onSetValue(inputFields);
    if (event.target.name !== 'measure') {
      updateQueryString(event);
    }
  };

  const handleAddFields = () => {
    setInputFields([...inputFields, { id: nanoid(), field: '', measure: '' }]);
  };

  const handleRemoveFields = () => {
    const values = [...inputFields];
    values.splice(-1, 1);
    setInputFields(values);
    onSetValue(values);
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
    setSearchParams(value !== '' && value.length > 1 ? { query: value } : {});
  };

  const onceAddFields = () => {
    setInputFields([{ id: nanoid(), field: '', measure: '' }]);
  };

  const handleIncrement = () => {
    if (fieldsVisibility === false) {
      toggleVisibility();
      setCount(1);
      onceAddFields();
      return;
    }
    setCount(state => state + 1);
    handleAddFields();
  };

  const handleDecrement = () => {
    setCount(state => state - 1);
    handleRemoveFields();
    setSearchParams('');
  };

  const handleDelete = fieldId => {
    setSearchParams('');
    const newFields = inputFields.filter(({ id }) => id !== fieldId);

    setInputFields(newFields);
    onSetValue(newFields);
    setCount(state => state - 1);
  };

  return (
    <>
      <WrapIngredients>
        <TitleIngredients>Ingredients</TitleIngredients>
        {fieldsVisibility === false ? (
          <Counter
            count={0}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
        ) : (
          <Counter
            count={count}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
        )}
      </WrapIngredients>
      {fieldsVisibility === true &&
        inputFields.map((inputField, index) => (
          <div key={inputField.id}>
            <InputIngredientsWrap>
              <InputIngredients
                required
                autoComplete="off"
                name="field"
                id={inputField.id}
                value={inputField.field}
                onChange={event => handleChangeInput(index, event)}
              />
              <SelectWrap>
                <span>
                  <CustomInput
                    required
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
              <QueryList>
                {ingredients.map(({ _id, ttl }) => {
                  return (
                    <QueryItem
                      key={_id}
                      id={_id}
                      onClick={() => {
                        const theSameIngredient = inputFields.find(
                          item => item.field === ttl
                        );

                        if (theSameIngredient) {
                          toast.warn("you've already added such ingredient");
                          return;
                        }

                        inputField.field = ttl;
                        setActiveInputIndex(-1);
                        inputFields.map(item => {
                          if (item.id === inputField.id) {
                            inputField.id = _id;
                          }
                          return item;
                        });
                        onSetValue(inputFields);
                        setSearchParams('');
                      }}
                    >
                      <p>{ttl}</p>
                    </QueryItem>
                  );
                })}
              </QueryList>
            )}
          </div>
        ))}
    </>
  );
};
