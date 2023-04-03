import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle';
import { Header } from '../Header/Header';
import { Footer } from 'components/Footer/Footer';

const SharedLayout = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};
export default SharedLayout;
