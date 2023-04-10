import axios from 'axios';
import { useAuth } from '../../hooks/useAuth';

import { Loader } from 'components/Loader/Loader';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import { RecipeCard } from 'components/RecipeCard/RecipeCard';
import { ErrorImageContainer } from 'components/ErrorImageContainer/ErrorImageContainer';
import { PagesWrapper } from 'components/PagesWrapper/PagesWrapper';
import { useEffect, useState } from 'react';
import { Container, List, Item } from 'pages/Favorites/Favorites.styled';
import { Pagination } from 'components/Pagination/Pagination';
import placeholder from '../../img/placeholder.jpg';
import ErrorPage from 'pages/ErrorPage/ErrorPage';

const MyRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const { token } = useAuth();
  useEffect(() => {
    const fetchApi = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const res = await axios.get(
          'https://soyummy-tw3y.onrender.com/api/v1/own-recipes',
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const { data } = res.data;
        console.log(data);
        setRecipes(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchApi();
  }, [token]);

  const deleteRecipe = async id => {
    try {
      setIsLoading(true);
      setError(null);
      const res = await axios.delete(
        `https://soyummy-tw3y.onrender.com/api/v1/own-recipes/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setRecipes(prevRecipes =>
        prevRecipes.filter(recipe => recipe._id !== id)
      );
      return res.data;
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  console.log('recipes', recipes);

  const totalPages = recipes.length > 0 ? Math.ceil(recipes.length / 4) : 0;

  const perPage = 4;
  const lastIndex = perPage * page;
  const startIndex = lastIndex - perPage;
  const renderList = recipes.slice(startIndex, lastIndex);
  const handlePageChange = id => {
    setPage(id);
  };

  const handlePageChangeDecrement = () => {
    setPage(prevState => prevState + 1);
  };

  const handlePageChangeIncrement = () => {
    setPage(prevState => prevState - 1);
  };
  return (
    <>
      {isLoading && <Loader />}
      {error ? (
        <ErrorPage />
      ) : (
        <main>
          <PagesWrapper>
            <MainPageTitle title="My recipes" />
            {renderList && renderList.length > 0 ? (
              <List>
                {renderList.map(({ _id, thumb, title, time, description }) => (
                  <Item key={_id}>
                    <RecipeCard
                      key={_id}
                      thumb={thumb ? thumb : placeholder}
                      title={title ?? 'No title'}
                      id={_id}
                      description={description ?? 'No description'}
                      time={time ?? '--'}
                      page="My recipes"
                      onDelete={deleteRecipe}
                    />
                  </Item>
                ))}
              </List>
            ) : (
              <Container>
                <ErrorImageContainer title="You don't have recipes in favorites yet, add your first recipe!" />
              </Container>
            )}
            {totalPages > 1 && (
              <Pagination
                totalPages={totalPages}
                currentPage={page}
                onSelectPage={handlePageChange}
                onArrowLeftClick={handlePageChangeDecrement}
                onArrowRightClick={handlePageChangeIncrement}
              />
            )}
          </PagesWrapper>
        </main>
      )}
    </>
  );
};
export default MyRecipes;
