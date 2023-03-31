import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle';
import { AppBar } from '../AppBar/AppBar';



const SharedLayout = ()=> {
  return (
    <>
      <GlobalStyle/>
      <AppBar/>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>)
}
export default SharedLayout;
