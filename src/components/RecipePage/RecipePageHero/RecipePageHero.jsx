import {
  RecipePageHeroContainer,
  // RecipePageHeroTitle,
  // RecipePageHeroText,
  // RecipePageHeroCookingTime,
} from './RecipePageHero.styled';
import axios from 'axios';
// import sprite from '../../../img/sprite.svg';
import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

export const RecipePageHero = () => {
  const [recept, setRecept] = useState([]);
  console.log('recept', recept);

  async function getRecipe() {
    try {
      const response = await axios.get(
        'https://soyummy-tw3y.onrender.com/api/v1/recipes/:id'
      );
      const { data } = response.data;

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRecipe();
  }, []);

  return <RecipePageHeroContainer></RecipePageHeroContainer>;
};
