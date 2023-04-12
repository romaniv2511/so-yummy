import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from 'components/Footer/Footer';
import { Loader } from '../Loader/Loader';

const SharedLayout = ({ onToggle, isToggle }) => {
  const location = useLocation();
  const [headerColor, setHeaderColor] = useState('');

  useEffect(() => {
    if (location.pathname === '/') {
      setHeaderColor('colorMain');
    } else if (location.pathname.includes('/recipe/')) {
      setHeaderColor('recipe');
    } else {
      setHeaderColor('else');
    }
  }, [location]);

  return (
    <>
      <Header onToggle={onToggle} isToggle={isToggle} color={headerColor} />
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};
export default SharedLayout;
