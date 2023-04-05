import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import { PagesWrapper } from 'components/PagesWrapper/PagesWrapper';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useLocation } from 'react-router-dom';
import { SearchedRecipesList } from 'components/SearchedRecipesList/SearchedRecipesList';
import { useState } from 'react';

const SearchPage = () => {
  const { state } = useLocation();
  const [searchList, setSearchList] = useState([]);
  if (state) {
    console.log(state.searchText);
  }

  const handleSearch = e => {
    e.preventDefault();
    setSearchList(e.target.value);
  };

  return (
    <PagesWrapper>
      <MainPageTitle title="Search" />
      <SearchBar handleSearch={handleSearch} />
      <SearchedRecipesList searchList={searchList} />
    </PagesWrapper>
  );
};

export default SearchPage;
