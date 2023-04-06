import {
  FormContainer,
  FieldContainer,
  ButtonSearch,
  ContainerError,
} from './SearchForm.styled';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SearchSchema = Yup.object().shape({
  searchText: Yup.string()
    .min(1, 'Too Short!')
    .max(50, 'Too Long!')
    .required('You must enter some text'),
});

export const SearchForm = ({ initialValue, handleSubmit }) => {
  return (
    <Formik
      initialValues={{
        searchText: !initialValue ? '' : initialValue,
      }}
      validationSchema={SearchSchema}
      onSubmit={handleSubmit}
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
          <ButtonSearch type="submit">Search</ButtonSearch>
        </FormContainer>
      )}
    </Formik>
  );
};
