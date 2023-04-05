import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import { AddRecipeForm } from './AddRecipeForm/AddRecipeForm';
import { PopularRecipe } from './PopularRecipe/PopularRecipe';

export const AddRecipe = () => {
  return (
    <>
      <MainPageTitle title="Add recipe" />
      <AddRecipeForm />
      <PopularRecipe />
    </>
  );
};
