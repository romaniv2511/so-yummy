import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle';
import { AppBar } from '../AppBar/AppBar';
import { Footer } from 'components/Footer/Footer';
import { AddRecipe } from 'components/AddRecipeForm/AddRecipeForm';

const SharedLayout = () => {
  return (
    <>
      <GlobalStyle />
      <AppBar />
      <AddRecipe />
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};
export default SharedLayout;
