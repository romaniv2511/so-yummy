import { useEffect, useState, lazy  } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PublicRoute, PrivateRoute } from '../services/routes';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../redux/auth/authOperations';
import { useAuth } from '../hooks/useAuth';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../utils/theme';
import ScrollToTop from './ScrollToTop/ScrollToTop';
import { GlobalStyle } from './GlobalStyle';

import SharedLayout from './SharedLayout/SharedLayout';
import WelcomePage from '../pages/WelcomePage/WelcomePage';
import Register from '../pages/Register/Register';
import SignIn from '../pages/SignIn/SignIn'

const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const Categories = lazy(() => import('pages/Categories/Categories'));
const AddRecipes = lazy(() => import('pages/AddRecipes/AddRecipes'));
const MyRecipes = lazy(() => import('pages/MyRecipes/MyRecipes'));
const Recipe = lazy(() => import('pages/Recipe/Recipe'));
const Favorites = lazy(() => import('pages/Favorites/Favorites'));
const ShoppingList = lazy(() => import('pages/ShoppingList/ShoppingList'));
const SearchPage = lazy(() => import('pages/SearchPage/SearchPage'));
const ErrorPage = lazy(() => import('pages/ErrorPage/ErrorPage'));



export const App = () => {
  const dispatch = useDispatch();
  const [isToggleOn, setIsToggleOn] = useState(false);

  const handleClick = () => {
    setIsToggleOn(prevState => !prevState);
  };

  const { isRefreshing } = useAuth();

  useEffect(
    function () {
      dispatch(refreshUser());
    },
    [dispatch]
  );

  const themeValue = isToggleOn ? darkTheme : lightTheme;

  return isRefreshing ? (
    'Refreshing user ...'
  ) : (
    <ThemeProvider theme={themeValue}>
      <GlobalStyle />
      <ScrollToTop>
        <Routes>
          <Route
            path="welcome"
            element={<PublicRoute component={<WelcomePage />} />}
          />
          <Route
            path="register"
            element={<PublicRoute component={<Register />} />}
          />
          <Route
            path="signin"
            element={<PublicRoute component={<SignIn />} />}
          />
          <Route
            path="/"
            element={
              <SharedLayout
                onToggle={handleClick}
                isToggle={isToggleOn}
                pageMain={true}
              />
            }
          >
            <Route
              index
              element={
                <PrivateRoute component={<MainPage />} pageMain="Main" />
              }
            />
            <Route
              path="categories"
              element={<PrivateRoute component={<Categories />} />}
            />
            <Route
              path="categories/:categoryName"
              element={<PrivateRoute component={<Categories />} />}
            />
            <Route
              path="add-recipes"
              element={<PrivateRoute component={<AddRecipes />} />}
            />
            <Route
              path="my-recipes"
              element={<PrivateRoute component={<MyRecipes />} />}
            />
            <Route
              path="recipe/:recipeId"
              element={<PrivateRoute component={<Recipe />} />}
            />
            <Route
              path="favorites"
              element={<PrivateRoute component={<Favorites />} />}
            />
            <Route
              path="shopping-list"
              element={<PrivateRoute component={<ShoppingList />} />}
            />
            <Route
              path="search"
              element={<PrivateRoute component={<SearchPage />} />}
            />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </ThemeProvider>
  );
};
