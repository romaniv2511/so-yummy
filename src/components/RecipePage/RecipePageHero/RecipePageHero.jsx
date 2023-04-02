import {
  RecipePageHeroContainer,
  RecipePageHeroTitle,
  RecipePageHeroText,
  RecipePageHeroCookingTime,
} from './RecipePageHero.styled';
import sprite from '../../../img/sprite.svg';
import { RecipeBtnFavorite } from '../RecipeBtnFavorite/RecipeBtnFavorite';

export const RecipePageHero = ({ title, description, time }) => {
  return (
    <RecipePageHeroContainer>
      <RecipePageHeroTitle>{title}</RecipePageHeroTitle>
      <RecipePageHeroText>{description}</RecipePageHeroText>
      <RecipeBtnFavorite />
      <RecipePageHeroCookingTime>
        <svg>
          <use href={sprite + `#icon-clock`} />
        </svg>
        <span>{time + ` min`}</span>
      </RecipePageHeroCookingTime>
    </RecipePageHeroContainer>
  );
};
