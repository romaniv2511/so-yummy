import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import {
  ButtonsList,
  ButtonCategory,
  ScrollableContainer,
} from './Categories.styled';
import { PagesWrapper } from 'components/PagesWrapper/PagesWrapper';
import { Pagination } from 'components/Pagination/Pagination';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import { ErrorImageContainer } from 'components/ErrorImageContainer/ErrorImageContainer';
import { RecipesList } from 'components/RecipesList/RecipesList';

const Categories = () => {
  const { categoryName } = useParams();
  const [menuList, setMenuList] = useState([]);
  const [category, setCategory] = useState(categoryName || 'Beef');
  const [categoriesList, setCategoriesList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const activeRef = useRef();

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

  const handleScrollbar = () => {
    console.log('рендер');
    const elList = activeRef.current;
    const el = elList.querySelector('.active');
    console.log('el', el);
    if (el) {
      el.scrollIntoView({ block: 'start' });
    }
  };

  useEffect(() => {
    searchMenuList();
  }, []);

  useEffect(() => {
    handleScrollbar();
  }, [menuList]);

  useEffect(() => {
    searchCategory(category);
  }, [category]);

  const totalPages =
    categoriesList.length > 0 ? Math.ceil(categoriesList.length / 8) : 0;

  const perPage = 8;
  const lastIndex = perPage * page;
  const startIndex = lastIndex - perPage;
  const renderList = categoriesList.slice(startIndex, lastIndex);

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
    <main>
      <PagesWrapper>
        <MainPageTitle title="Categories" />

        <ScrollableContainer
          options={{
            suppressScrollX: false,
            suppressScrollY: true,
          }}
        >
          <ButtonsList ref={activeRef}>
            {menuList.map(item => {
              return (
                <li key={item}>
                  <ButtonCategory
                    to={`/categories/${item}`}
                    onClick={() => {
                      setCategory(item);
                      setPage(1);
                    }}
                  >
                    {item}
                  </ButtonCategory>
                </li>
              );
            })}
          </ButtonsList>
        </ScrollableContainer>

        {error && !loading && (
          <ErrorImageContainer title="Doesn't find any recipes..." />
        )}
        {!error && loading && <Loader />}
        {renderList.length > 0 && <RecipesList list={renderList} />}
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
  );
};

export default Categories;
