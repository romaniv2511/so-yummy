import { useLocation } from 'react-router-dom';

const SearchPage = () => {
  const { state } = useLocation();
  if (state) {
    console.log(state.searchText);
  }

  return <p>SearchPage</p>;
};

export default SearchPage;
