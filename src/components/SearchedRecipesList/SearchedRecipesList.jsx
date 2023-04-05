import { ErrorImageContainer } from 'components/ErrorImageContainer/ErrorImageContainer';
import { RecipesList } from 'components/RecipesList/RecipesList';

export const SearchedRecipesList = ({ searchList }) => {
  console.log(searchList);
  return (
    <>
      {searchList.length > 0 ? (
        <RecipesList list={searchList} />
      ) : (
        <ErrorImageContainer title="Try looking for something else.." />
      )}
    </>
  );
};
