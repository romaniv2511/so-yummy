import { RecipeBtn } from './RecipeBtnFavorite.styled';

export const RecipeBtnFavorite = ({ onClick, text }) => {
  return <RecipeBtn onClick={onClick}>{text}</RecipeBtn>;
};
