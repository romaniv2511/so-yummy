import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import { AddRecipeForm } from './AddRecipeForm/AddRecipeForm';
import { PopularRecipe } from './PopularRecipe/PopularRecipe';
import { Wrapper } from './AddRecipe.styled';

export const AddRecipe = () => {
  return (
    <>
      <MainPageTitle title="Add recipe" />
      <Wrapper>
        <AddRecipeForm />
        <PopularRecipe />
      </Wrapper>
    </>
  );
};
