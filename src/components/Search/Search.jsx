import {
  FormContainer,
  FieldContainer,
  ButtonSearch,
  ContainerError,
} from './Search.styled';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const SearchSchema = Yup.object().shape({
  searchText: Yup.string()
    .min(1, 'Too Short!')
    .max(50, 'Too Long!')
    .required('You must enter some text'),
});

export const Search = () => {
  const navigate = useNavigate();

  const onFormSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();

    navigate(`/search`, { state: values });
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
          <ButtonSearch type="submit">Search</ButtonSearch>
        </FormContainer>
      )}
    </Formik>
  );
};
