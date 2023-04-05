import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import { PagesWrapper } from 'components/PagesWrapper/PagesWrapper';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useSearchParams } from 'react-router-dom';
import { SearchedRecipesList } from 'components/SearchedRecipesList/SearchedRecipesList';
import { useEffect, useState } from 'react';
import axios from 'axios';

const SearchPage = () => {
  const [searchList, setSearchList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const valueName = 'query'; // "ingredient"
  const value = searchParams.get(`${valueName}`) ?? '';

  const handleSearch = (searchText, actions) => {
    const nextParams =
      searchText !== '' ? { [valueName]: searchText.searchText } : {};
    setSearchParams(nextParams);
    setSearchList([]);
    actions.resetForm({ values: { searchText: '' } });
  };

  const getSearchList = async (value, valueName) => {
    const response = await axios.get(
      `https://soyummy-tw3y.onrender.com/api/v1//search?page=1&limit=20&query=${value}&type=${valueName}`
    );
    const { data } = response.data;
    setSearchList(data);
    console.log(data);
  };

  useEffect(() => {
    getSearchList(value, valueName);
  }, [value, valueName]);

  return (
    <PagesWrapper>
      <MainPageTitle title="Search" />
      <SearchBar value={value} handleSearch={handleSearch} />
      <SearchedRecipesList searchList={searchList} />
    </PagesWrapper>
  );
};

export default SearchPage;
