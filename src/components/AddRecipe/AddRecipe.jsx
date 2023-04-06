import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import { AddRecipeForm } from './AddRecipeForm/AddRecipeForm';
import { PopularRecipe } from './PopularRecipe/PopularRecipe';
import { FollowUs } from 'components/Footer/FollowUs/FollowUs';
import MediaQuery from 'react-responsive';

export const AddRecipe = () => {
  return (
    <>
      <MainPageTitle title="Add recipe" />
      <AddRecipeForm />
      <MediaQuery minWidth={1440}>
        <FollowUs />
      </MediaQuery>
      <PopularRecipe />
    </>
  );
};
