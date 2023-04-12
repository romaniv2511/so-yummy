import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from 'components/Footer/Footer';
import { Loader } from '../Loader/Loader';


const SharedLayout = ({ onToggle, isToggle, pageMain }) => {
  return (
    <>
      <Header onToggle={onToggle} isToggle={isToggle} pageMain={pageMain} />
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};
export default SharedLayout;
