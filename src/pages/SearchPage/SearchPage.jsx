import { useLocation } from 'react-router-dom';

const SearchPage = () => {
  const { state } = useLocation();
  console.log(state.searchText);
  return <p>SearchPage</p>;
};

export default SearchPage;
