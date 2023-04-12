import axios from 'axios';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import { PagesWrapper } from 'components/PagesWrapper/PagesWrapper';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { SearchedRecipesList } from 'components/SearchedRecipesList/SearchedRecipesList';
import { useEffect, useState } from 'react';
import { ErrorImageContainer } from 'components/ErrorImageContainer/ErrorImageContainer';
import { Loader } from 'components/Loader/Loader';
import { Pagination } from 'components/Pagination/Pagination';

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchList, setSearchList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectValue, setSelectValue] = useState(
    searchParams.has('ingredient') ? 'Ingredients' : 'Title'
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [state, setState] = useState('start');
  const [pageNumber, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const perPage = 8;

  const valueName = selectValue === 'Title' ? 'query' : 'ingredient';
  const value = searchParams.get(`${valueName}`) ?? '';
  const pageValue = searchParams.get('page') ?? 1;

  const handleSearch = (text, actions) => {
    const { searchText } = text;
    const normalizedValue = searchText.toLowerCase().trim();

    const nextParams =
      normalizedValue !== ''
        ? { [valueName]: normalizedValue, page: pageValue }
        : {};
    setSearchParams(nextParams);
    setSearchList([]);
    setPage(1);
    setTotalPages(0);
    actions.resetForm({ values: { searchText: '' } });
  };

  const handleSelect = select => {
    setSelectValue(select);
    setSearchParams({});
    setSearchList([]);
  };

  const getSearchList = async (categoryValue, categoryName, page = 1) => {
    setLoading(true);
    let response;
    try {
      if (categoryName === 'Title') {
        response = await axios.get(
          `https://soyummy-tw3y.onrender.com/api/v1/search/by-title?page=${page}&query=${categoryValue}&limit=${perPage}`
        );
      } else {
        response = await axios.get(
          `https://soyummy-tw3y.onrender.com/api/v1/search/by-ingredient?page=${page}&query=${categoryValue}&limit=${perPage}`
        );
      }
      const { data, quantity, total } = response.data;
      const pages = quantity > 0 ? Math.ceil(total / perPage) : 0;

      setTotalPages(pages);
      setState('end');
      setSearchList(data);
      setLoading(false);
    } catch (error) {
      setState('end');
      setLoading(false);
      setSearchList([]);
      setError(error.message);
    }
  };

  const handlePageChange = id => {
    setPage(id);
  };

  const handlePageChangeDecrement = () => {
    setPage(prevState => prevState + 1);
  };

  const handlePageChangeIncrement = () => {
    setPage(prevState => prevState - 1);
  };

  useEffect(() => {
    if ((value === '' && pageNumber === 1) || selectValue === '') {
      setSearchParams({});
      return;
    }
    getSearchList(value, selectValue, pageNumber);
  }, [value, selectValue, pageNumber, setSearchParams]);

  useEffect(() => {
    if (
      searchParams.has('page') &&
      parseInt(searchParams.get('page')) !== pageNumber
    ) {
      searchParams.set('page', pageNumber);
      navigate(`${location.pathname}?${searchParams.toString()}`);
    }
  }, [pageNumber, searchParams, location, navigate]);

  return (
    <PagesWrapper>
      <MainPageTitle title="Search" />

      <SearchBar
        searchResult={searchList.length > 0}
        value={value}
        handleSearch={handleSearch}
        title={selectValue}
        handleSelect={handleSelect}
      />
      {state === 'start' && searchList.length === 0 && !loading && (
        <ErrorImageContainer title="Please, enter value to input..." />
      )}
      {searchList.length > 0 && state === 'end' && (
        <>
          <SearchedRecipesList searchList={searchList} />
          {totalPages > 1 && (
            <Pagination
              totalPages={totalPages}
              currentPage={pageNumber}
              onSelectPage={handlePageChange}
              onArrowLeftClick={handlePageChangeDecrement}
              onArrowRightClick={handlePageChangeIncrement}
            />
          )}
        </>
      )}
      {searchList.length === 0 && state === 'end' && !loading && (
        <ErrorImageContainer title="Try looking for something else.." />
      )}

      {error && !loading && (
        <ErrorImageContainer title="Something wrong! Reload page or enter another value..." />
      )}
      {!error && loading && <Loader />}
    </PagesWrapper>
  );
};

export default SearchPage;
