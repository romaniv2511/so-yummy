import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../utils/theme';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import WelcomePage from '../pages/WelcomePage/WelcomePage';
import Register from '../pages/Register/Register';
import SignIn from '../pages/SignIn/SignIn';
import Categories from '../pages/Categories/Categories';
import AddRecipes from '../pages/AddRecipes/AddRecipes';
import MyRecipes from '../pages/MyRecipes/MyRecipes';
import Favorites from '../pages/Favorites/Favorites';

export const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Categories />} />
          <Route path="welcome" element={<WelcomePage />} />
          <Route path="register" element={<Register />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="categories" element={<Categories />} />
          <Route path="add-recipes" element={<AddRecipes />} />
          <Route path="my-recipes" element={<MyRecipes />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
