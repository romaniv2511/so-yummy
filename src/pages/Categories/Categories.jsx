import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CategoryDishItem } from 'components/CategoryDishItem/CategoryDishItem';
import { ErrorMessage } from 'components/PreviewCategories/PreviewCategories.styled';
import { Loader } from 'components/Loader/Loader';
import {
  TitleCategory,
  ButtonsList,
  ButtonCategory,
  RecipesList,
  ScrollableContainer,
} from './Categories.styled';
import { PagesWrapper } from 'components/PagesWrapper/PagesWrapper';

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
    <main>
      <PagesWrapper>
        <TitleCategory>Categories</TitleCategory>

        <ScrollableContainer
          options={{ suppressScrollX: false, suppressScrollY: true }}
        >
          <ButtonsList>
            {menuList.map(item => {
              if (category === item) {
                return (
                  <ButtonCategory
                    type="button"
                    key={item}
                    active={true}
                    onClick={() => {
                      setCategory(item);
                    }}
                  >
                    {item}
                  </ButtonCategory>
                );
              }
              return (
                <ButtonCategory
                  type="button"
                  active={false}
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
        </ScrollableContainer>

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
      </PagesWrapper>
    </main>
  );
};
export default Categories;
