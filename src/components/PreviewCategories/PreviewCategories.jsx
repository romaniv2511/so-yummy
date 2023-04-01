import axios from 'axios';
import { CategoryDishItem } from 'components/CategoryDishItem/CategoryDishItem';
import { Container } from 'components/Container/Container';
import { useEffect, useState } from 'react';
import {
  MainList,
  TitleList,
  CategoriesList,
  Link,
  ButtonOtherCategory,
  MainContainer,
} from './PreviewCategories.styled';

export const PreviewCategories = () => {
  const [dishes, setDishes] = useState([]);
  console.log('dishes', dishes);

  async function getDishes() {
    try {
      const response = await axios.get(
        'https://soyummy-tw3y.onrender.com/api/v1/recipes/main-page'
      );
      const { data } = response.data;

      console.log(data);
      const newData = data.filter(
        item =>
          item._id === 'Breakfast' ||
          item._id === 'Miscellaneous' ||
          item._id === 'Vegan' ||
          item._id === 'Dessert'
      );
      console.log(newData);
      setDishes(newData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDishes();
  }, []);

  return (
    <MainContainer>
      <Container>
        <MainList>
          {dishes.map(({ _id, documents }) => {
            return (
              <li key={_id}>
                <TitleList>{_id}</TitleList>
                <CategoriesList>
                  {documents.map(({ _id, thumb, title }) => {
                    return (
                      <CategoryDishItem key={_id} thumb={thumb} title={title} />
                    );
                  })}
                </CategoriesList>
                <Link>See all</Link>
              </li>
            );
          })}
        </MainList>
        <ButtonOtherCategory type="button">
          Other categories
        </ButtonOtherCategory>
      </Container>
    </MainContainer>
  );
};
