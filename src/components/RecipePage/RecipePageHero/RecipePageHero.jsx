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

  const data = useSelector(selectFavorites);
  const { recipeId } = useParams();

  useEffect(() => {
    if (!data) {
      dispatch(fetchFavorites());
    }
  }, [dispatch, data]);

  function deleteFromFav() {
    dispatch(deleteFavorite(id));
    setBtnText(false);
    return;
  }

  function getFavorite(recipeId) {
    if (data) {
      const recipe = data.some(fav => fav._id === recipeId);
      return recipe;
    }
    return false;
  }

  function addToFavorite() {
    dispatch(addFavorite(id));
    setBtnText(true);
    return;
  }

  return (
    <RecipePageHeroContainer>
      <RecipePageHeroTitle>{title}</RecipePageHeroTitle>
      <RecipePageHeroText>{description}</RecipePageHeroText>
      {btnText || getFavorite(recipeId) ? (
        <RecipeBtnFavorite
          type="button"
          text={'Remove from favorite recipes'}
          onClick={deleteFromFav}
        />
      ) : (
        <RecipeBtnFavorite
          type="button"
          text="Add to favorite recipes"
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
