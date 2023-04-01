import { Container } from 'components/Container/Container';
import {
  HeroTitle,
  HeroContainer,
  TitleAccent,
  BottomText,
  FormContainer,
  FieldContainer,
  ButtonSearch,
} from './Hero.styled';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ChooseYourBreakfast } from 'components/ChooseYourBreakfast/ChooseYourBreakfast';

const SearchSchema = Yup.object().shape({
  searchText: Yup.string()
    .min(1, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const Hero = () => {
  const onFormSubmit = values => {
    console.log(values);
  };

  return (
    <HeroContainer>
      <Container>
        <HeroTitle>
          <TitleAccent>So</TitleAccent>Yummy
        </HeroTitle>
        <BottomText>
          "What to cook?" is not only a recipe app, it is, in fact, your
          cookbook. You can add your own recipes to save them for the future.
        </BottomText>
        <Formik
          initialValues={{
            searchText: '',
          }}
          validationSchema={SearchSchema}
          onSubmit={onFormSubmit}
        >
          <FormContainer>
            <FieldContainer
              id="searchText"
              name="searchText"
              placeholder="Beef"
            />
            <ButtonSearch type="submit">Search</ButtonSearch>
          </FormContainer>
        </Formik>
        <ChooseYourBreakfast />
      </Container>
    </HeroContainer>
  );
};

export default Hero;
