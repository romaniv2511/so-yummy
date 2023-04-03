import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../utils/theme';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import WelcomePage from '../pages/WelcomePage/WelcomePage';
import Register from '../pages/Register/Register';
import SignIn from '../pages/SignIn/SignIn';
import MainPage from '../pages/MainPage/MainPage';
import Categories from '../pages/Categories/Categories';
import AddRecipes from '../pages/AddRecipes/AddRecipes';
import MyRecipes from '../pages/MyRecipes/MyRecipes';
import Recipe from '../pages/Recipe/Recipe';
import Favorites from '../pages/Favorites/Favorites';
import ShopingList from '../pages/ShopingList/ShopingList';
import SearchPage from 'pages/SearchPage/SearchPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import ScrollToTop from './ScrollToTop/ScrollToTop';

export const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<MainPage />} />
            <Route path="welcome" element={<WelcomePage />} />
            <Route path="register" element={<Register />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="categories" element={<Categories />} />
            <Route path="categories/:categoryName" element={<Categories />} />
            <Route path="add-recipes" element={<AddRecipes />} />
            <Route path="my-recipes" element={<MyRecipes />} />
            <Route path="recipe/:recipeId" element={<Recipe />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="shopping-list" element={<ShopingList />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </ThemeProvider>
  );
};
