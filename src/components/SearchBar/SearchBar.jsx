import { SearchForm } from 'components/SearchForm/SearchForm';
import { SearchTypeSelector } from 'components/SearchTypeSelector/SearchTypeSelector';

export const SearchBar = ({ value, handleSearch }) => {
  return (
    <div>
      <SearchForm initialValue={value} handleSubmit={handleSearch} />
      <SearchTypeSelector />
    </div>
  );
};
