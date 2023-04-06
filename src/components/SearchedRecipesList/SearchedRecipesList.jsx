import { RecipesList } from 'components/RecipesList/RecipesList';

export const SearchedRecipesList = ({ searchList }) => {
  return (
    <div>
      <RecipesList list={searchList} />
    </div>
  );
};
