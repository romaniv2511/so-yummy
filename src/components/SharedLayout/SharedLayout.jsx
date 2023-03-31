import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle';
import { AppBar } from '../AppBar/AppBar';
import { Footer } from 'components/Footer/Footer';
import { AddRecipe } from 'components/AddRecipe/AddRecipe';

const SharedLayout = () => {
  return (
    <>
      <GlobalStyle />
      <AppBar />
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
      <AddRecipe />
      <Footer />
    </>
  );
};
export default SharedLayout;
