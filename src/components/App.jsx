import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import {PublicRoute, PrivateRoute} from '../services/routes';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../redux/auth/authOperations';
import { useAuth } from '../hooks/useAuth';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../utils/theme';

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
import ShoppingList from '../pages/ShoppingList/ShoppingList';
import SearchPage from 'pages/SearchPage/SearchPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import ScrollToTop from './ScrollToTop/ScrollToTop';



export const App = () => {
  const dispatch = useDispatch();
  const {isRefreshing} = useAuth();

  useEffect(function() {
    dispatch(refreshUser());
  },[dispatch])

  return (
    isRefreshing
      ? 'Refreshing user ...'
      : <ThemeProvider theme={lightTheme}>
          <ScrollToTop>
            <Routes>
              <Route path="welcome" element={<PublicRoute component={<WelcomePage />}/>}/>
              <Route path="register" element={<PublicRoute component={<Register />}/>}/>
              <Route path="signin" element={<PublicRoute component={<SignIn />}/>}/>
              <Route path="/" element={<SharedLayout />}>
                <Route index element={ <PrivateRoute component={<MainPage />} />}/>
                <Route path="categories" element={<PrivateRoute component={<Categories />} />} />
                <Route path="categories/:categoryName" element={<PrivateRoute component={<Categories />} />} />
                <Route path="add-recipes" element={<PrivateRoute component={<AddRecipes />} />} />
                <Route path="my-recipes" element={<PrivateRoute component={<MyRecipes />} />} />
                <Route path="recipe/:recipeId" element={<PrivateRoute component={<Recipe />} />} />
                <Route path="favorites" element={<PrivateRoute component={<Favorites />} />} />
                <Route path="shopping-list" element={<PrivateRoute component={<ShoppingList />} />} />
                <Route path="search" element={<PrivateRoute component={<SearchPage />} />} />
                <Route path="*" element={<ErrorPage />} />
              </Route>
            </Routes>
          </ScrollToTop>
        </ThemeProvider>
  );
};
