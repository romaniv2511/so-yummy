import axios from 'axios';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import { PagesWrapper } from 'components/PagesWrapper/PagesWrapper';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useSearchParams } from 'react-router-dom';
import { SearchedRecipesList } from 'components/SearchedRecipesList/SearchedRecipesList';
import { useEffect, useState } from 'react';
import { ErrorImageContainer } from 'components/ErrorImageContainer/ErrorImageContainer';
import { Loader } from 'components/Loader/Loader';

const SearchPage = () => {
  const [selectValue, setSelectValue] = useState('Title');
  const [searchList, setSearchList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [state, setState] = useState('start');

  const valueName = selectValue === 'Title' ? 'query' : 'ingredient';
  const value = searchParams.get(`${valueName}`) ?? '';

  const handleSearch = (searchText, actions) => {
    const nextParams =
      searchText !== '' ? { [valueName]: searchText.searchText } : {};
    setSearchParams(nextParams);
    setSearchList([]);
    actions.resetForm({ values: { searchText: '' } });
  };

  const handleSelect = select => {
    setSelectValue(select);
  };

  const getSearchList = async (categoryValue, categoryName) => {
    setLoading(true);

    console.log(categoryValue, categoryName);
    try {
      const response = await axios.get(
        `https://soyummy-tw3y.onrender.com/api/v1//search?page=1&limit=20&query=${categoryValue}&type=${categoryName}`
      );
      const { data } = response.data;

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

  useEffect(() => {
    if (value === '' || selectValue === '') return;
    getSearchList(value, selectValue);
  }, [value, selectValue]);

  console.log('state', state);
  console.log('searchList', searchList);
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
      {state === 'start' && searchList.length === 0 && (
        <ErrorImageContainer title="Please, enter value to input..." />
      )}
      {searchList.length > 0 && state === 'end' && (
        <SearchedRecipesList searchList={searchList} />
      )}
      {searchList.length === 0 && state === 'end' && (
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
