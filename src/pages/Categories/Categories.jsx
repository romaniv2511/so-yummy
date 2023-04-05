import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
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
  ErrorImage,
} from './Categories.styled';
import { PagesWrapper } from 'components/PagesWrapper/PagesWrapper';
import imageErrorMob from '../../img/search-any-mob.png';
import imageErrorMobRetina from '../../img/search-any-mob@2x.png';
import imageErrorTab from '../../img/search-any-tablet.png';
import imageErrorTabRetina from '../../img/search-any-tablet@2x.png';
import imageErrorDesk from '../../img/search-any-desktop.png';
import imageErrorDeskRetina from '../../img/search-any-desktop@2x.png';
import { Pagination } from 'components/Pagination/Pagination';

const Categories = () => {
  const { categoryName } = useParams();
  const [menuList, setMenuList] = useState([]);
  const [category, setCategory] = useState(categoryName || 'Beef');
  const [categoriesList, setCategoriesList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const listItemRef = useRef();

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

  const handleScroll = () => {
    const listItem = listItemRef.current;
    listItem.scrollIntoView({ behavior: 'smooth' });
  };

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
        <TitleCategory>Categories</TitleCategory>

        <ScrollableContainer
          options={{ suppressScrollX: false, suppressScrollY: true }}
          onScrollX={handleScroll}
        >
          <ButtonsList>
            {menuList.map(item => {
              return (
                <ButtonCategory
                  to={`/categories/${item}`}
                  key={item}
                  ref={listItemRef}
                  onClick={() => {
                    setCategory(item);
                    setPage(1);
                  }}
                >
                  {item}
                </ButtonCategory>
              );
            })}
          </ButtonsList>
        </ScrollableContainer>

        {error && !loading && (
          <>
            <ErrorImage
              srcSet={`
              ${imageErrorDeskRetina} 2880w,
              ${imageErrorDesk} 1440w,
              ${imageErrorTabRetina} 1536w,
              ${imageErrorTab} 768w,
              ${imageErrorMobRetina} 750w,
              ${imageErrorMob} 375w,
            `}
              sizes="
              (max-width: 767px) 208px,
              (min-width: 768px) 350px, 100vw
            "
              src={imageErrorMob}
              alt="doesn't find"
            />
            <ErrorMessage>Doesn't find any recipes...</ErrorMessage>
          </>
        )}
        {!error && loading && <Loader />}
        {renderList.length > 0 && (
          <RecipesList>
            {renderList.map(({ _id, thumb, title }) => {
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
