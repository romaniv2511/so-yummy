import { Container } from 'components/Container/Container';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CategoryDishItem } from 'components/CategoryDishItem/CategoryDishItem';
import {
  ErrorMessage,
  MainContainer,
} from 'components/PreviewCategories/PreviewCategories.styled';
import { Loader } from 'components/Loader/Loader';
import {
  TitleCategory,
  ContainerCategory,
  ButtonsList,
  ButtonCategory,
  RecipesList,
  ActiveButton,
} from './Categories.styled';

const Categories = () => {
  const { categoryName } = useParams();
  const [menuList, setMenuList] = useState([]);
  const [category, setCategory] = useState(categoryName || 'Beef');
  const [categoriesList, setCategoriesList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchCategory = async category => {
    setLoading(true);
    setCategoriesList([]);
    try {
      const response = await axios.get(
        `https://soyummy-tw3y.onrender.com/api/v1/recipes/category/${category}`
      );

      const { data } = response.data;

      setCategoriesList(data);

      if (response) {
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
      setCategoriesList([]);
      console.log(error);
    }
  };

  const searchMenuList = async () => {
    const results = await axios.get(
      `https://soyummy-tw3y.onrender.com/api/v1/recipes/category-list`
    );
    console.log(results);
    const { data } = results.data;

    setMenuList(data);
  };

  useEffect(() => {
    searchMenuList();
  }, []);

  useEffect(() => {
    searchCategory(category);
  }, [category]);

  return (
    <ContainerCategory>
      <MainContainer>
        <Container>
          <TitleCategory>Categories</TitleCategory>
          <ButtonsList>
            {menuList.map(item => {
              if (category === item) {
                return (
                  <ActiveButton type="button" key={item}>
                    {item}
                  </ActiveButton>
                );
              }
              return (
                <ButtonCategory
                  type="button"
                  key={item}
                  onClick={() => {
                    setCategory(item);
                  }}
                >
                  {item}
                </ButtonCategory>
              );
            })}
          </ButtonsList>
          {error && !loading && (
            <ErrorMessage>Doesn't find any recipes...</ErrorMessage>
          )}
          {!error && loading && <Loader />}
          {categoriesList.length > 0 && (
            <RecipesList>
              {categoriesList.map(({ _id, thumb, title }) => {
                return (
                  <CategoryDishItem
                    key={_id}
                    id={_id}
                    thumb={thumb}
                    title={title}
                  />
                );
              })}
            </RecipesList>
          )}
        </Container>
      </MainContainer>
    </ContainerCategory>
  );
};
export default Categories;
