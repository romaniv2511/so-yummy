import { RecipesList } from 'components/RecipesList/RecipesList';

export const SearchedRecipesList = ({ searchList }) => {
  console.log(searchList);
  return <RecipesList list={searchList} />;
};
