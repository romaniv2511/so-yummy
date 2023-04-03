import { useEffect, useState } from 'react';
import axios from 'axios';
import { CategoryDishItem } from 'components/CategoryDishItem/CategoryDishItem';
import { Container } from 'components/Container/Container';
import {
  MainList,
  TitleList,
  CategoriesList,
  Link,
  ButtonOtherCategory,
  MainContainer,
  ErrorMessage,
} from './PreviewCategories.styled';
import { useMediaQuery } from 'react-responsive';
import { Loader } from 'components/Loader/Loader';

export const PreviewCategories = () => {
  const [dishes, setDishes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const isDesktop = useMediaQuery({
    query: '(min-width: 1440px)',
  });
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isMobile = useMediaQuery({ query: '(min-width: 320px)' });

  async function getDishes() {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://soyummy-tw3y.onrender.com/api/v1/recipes/main-page'
      );
      const { data } = response.data;

      if (response) {
        setLoading(false);
      }

      const newData = data.filter(
        item =>
          item._id === 'Breakfast' ||
          item._id === 'Miscellaneous' ||
          item._id === 'Vegan' ||
          item._id === 'Dessert'
      );

      setDishes(newData);
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error);
    }
  }

  useEffect(() => {
    getDishes();
  }, []);

  return (
    <MainContainer>
      <Container>
        {dishes.length > 0 && (
          <MainList>
            {dishes.map(({ _id, documents }) => {
              let dishesList;
              if (isMobile) {
                dishesList = [documents[0]];
              }
              if (isTablet) {
                dishesList = [documents[0], documents[1]];
              }
              if (isDesktop) {
                dishesList = documents;
              }
              return (
                <li key={_id}>
                  <TitleList>{_id}</TitleList>
                  <CategoriesList>
                    {dishesList.map(({ _id, thumb, title }) => {
                      return (
                        <CategoryDishItem
                          key={_id}
                          thumb={thumb}
                          title={title}
                          id={_id}
                        />
                      );
                    })}
                  </CategoriesList>
                  <Link to={`/categories/${_id}`}>See all</Link>
                </li>
              );
            })}
          </MainList>
        )}
        {error && !loading && (
          <ErrorMessage>Something wrong! Reload the page...</ErrorMessage>
        )}
        {loading && <Loader />}
        <ButtonOtherCategory to="/categories">
          Other categories
        </ButtonOtherCategory>
      </Container>
    </MainContainer>
  );
};
