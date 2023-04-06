import { SearchForm } from 'components/SearchForm/SearchForm';
import { SearchTypeSelector } from 'components/SearchTypeSelector/SearchTypeSelector';
import { FormContainer } from './SearchBar.styled';

export const SearchBar = ({
  searchResult,
  value,
  handleSearch,
  title,
  handleSelect,
}) => {
  return (
    <FormContainer search={searchResult}>
      <SearchForm initialValue={value} handleSubmit={handleSearch} />
      <SearchTypeSelector title={title} onChooseVariant={handleSelect} />
    </FormContainer>
  );
};
