import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PagesWrapper } from 'components/PagesWrapper/PagesWrapper';
import { Container, List, Item } from './Favorites.styled';
import { Loader } from 'components/Loader/Loader';
import { RecipeCard } from 'components/RecipeCard/RecipeCard';
import {
  selectError,
  selectFavorites,
  selectIsLoading,
} from 'redux/favorites/favoritesSelectors';
import { fetchFavorites } from 'redux/favorites/favoritesOperations';
import { ErrorImageContainer } from 'components/ErrorImageContainer/ErrorImageContainer';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import { Pagination } from 'components/Pagination/Pagination';

const Favorites = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const data = useSelector(selectFavorites);

  useEffect(() => {
    if (!data) {
      console.log('dispatch');
      dispatch(fetchFavorites());
    }
  }, [data, dispatch]);

  const totalPages = data?.length > 0 ? Math.ceil(data?.length / 4) : 0;

  const perPage = 4;
  const lastIndex = perPage * page;
  const startIndex = lastIndex - perPage;
  const renderList = data?.slice(startIndex, lastIndex);
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
      {error && <p>Something went wrong. Try again.</p>}
      <main>
        <PagesWrapper>
          <MainPageTitle title="Favorites" />
          {renderList && renderList.length > 0 ? (
            <List>
              {renderList.map(({ _id, thumb, title, time, description }) => (
                <Item key={_id}>
                  <RecipeCard
                    thumb={
                      thumb ? thumb : 'https://via.placeholder.com/124x124'
                    }
                    title={title ?? 'No title'}
                    id={_id}
                    description={description ?? 'No description'}
                    time={time ?? '--'}
                    page="Favorites"
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
    </>
  );
};

export default Favorites;
