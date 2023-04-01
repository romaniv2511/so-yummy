import {
  FormContainer,
  FieldContainer,
  ButtonSearch,
  ContainerError,
} from './Search.styled';
import { Formik } from 'formik';
// import { Link } from 'react-router-dom';
import * as Yup from 'yup';

const SearchSchema = Yup.object().shape({
  searchText: Yup.string()
    .min(1, 'Too Short!')
    .max(50, 'Too Long!')
    .required('You must enter some text'),
});

export const Search = () => {
  const onFormSubmit = values => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{
        searchText: '',
      }}
      validationSchema={SearchSchema}
      onSubmit={onFormSubmit}
    >
      {({ errors, touched }) => (
        <FormContainer>
          <FieldContainer
            id="searchText"
            name="searchText"
            placeholder="Beef"
          />
          {errors.searchText && touched.searchText ? (
            <ContainerError>{errors.searchText}</ContainerError>
          ) : null}
          <ButtonSearch type="submit">
            {/* <Link to="/search">Search</Link> */}
            Search
          </ButtonSearch>
        </FormContainer>
      )}
    </Formik>
  );
};
