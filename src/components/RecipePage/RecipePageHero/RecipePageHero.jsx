import {
  RecipePageHeroContainer,
  RecipePageHeroTitle,
  RecipePageHeroText,
  RecipePageHeroCookingTime,
} from './RecipePageHero.styled';
import sprite from '../../../img/sprite.svg';
import { RecipeBtnFavorite } from '../RecipeBtnFavorite/RecipeBtnFavorite';
import { useParams } from 'react-router-dom';
import { selectFavorites } from 'redux/favorites/favoritesSelectors';
import {
  fetchFavorites,
  addFavorite,
  deleteFavorite,
} from 'redux/favorites/favoritesOperations';
import { useEffect } from 'react';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
export const RecipePageHero = ({ title, description, time, id }) => {
  const dispatch = useDispatch();
  const [btnText, setBtnText] = useState(false);

  const { data: favorites } = useSelector(selectFavorites);
  console.log(favorites);
  const { recipeId } = useParams();
  // const addFavorite = async () => {
  //   try {
  //     const results = await axios.post(
  //       `https://soyummy-tw3y.onrender.com/api/v1/favorites`,
  //       { _id: recipeId },
  //       {
  //         headers: { Authorization: `Bearer ${token}` },
  //       }
  //     );
  //     console.log(results);
  //     return results.data;
  //   } catch (error) {
  //     throw new Error(error.response.status);
  //   }
  // };
  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  // const handleFavoriteClick = () => {
  //   const isFavorite = favorites.some(fav => fav._id === recipeId);
  //   if (isFavorite) {
  //     dispatch(deleteFavorite(recipeId));
  //   } else {
  //     dispatch(addFavorite(recipeId));
  //   }
  // };

  function deleteFromFav() {
    dispatch(deleteFavorite(id));
    setBtnText(false);
    return;
  }
  function getFavorite(recipeId) {
    if (favorites !== undefined) {
      const recipe = favorites.some(fav => fav._id === recipeId);
      return recipe;
    }
    return false;
  }
  function addToFavorite() {
    dispatch(addFavorite(id));
    setBtnText(true);
  }
  return (
    <RecipePageHeroContainer>
      <RecipePageHeroTitle>{title}</RecipePageHeroTitle>
      <RecipePageHeroText>{description}</RecipePageHeroText>
      {btnText || getFavorite(recipeId) ? (
        <RecipeBtnFavorite
          type="button"
          text={'Remove from favorite recipes'}
          styled="other"
          location="recipes"
          onClick={deleteFromFav}
        />
      ) : (
        <RecipeBtnFavorite
          type="button"
          text="Add to favorite recipes"
          styled="other"
          location="recipes"
          onClick={addToFavorite}
        />
      )}
      <RecipePageHeroCookingTime>
        <svg>
          <use href={sprite + `#icon-clock`} />
        </svg>
        <span>{time + ` min`}</span>
      </RecipePageHeroCookingTime>
    </RecipePageHeroContainer>
  );
};
