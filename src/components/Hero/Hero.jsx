import { Container } from 'components/Container/Container';
import {
  HeroTitle,
  HeroContainer,
  TitleAccent,
  BottomText,
  FormContainer,
  FieldContainer,
  ButtonSearch,
  HealthyBlock,
  Text,
  GoToRecipe,
} from './Hero.styled';
import { BsArrowRight } from 'react-icons/bs';
import { Formik } from 'formik';

import * as Yup from 'yup';

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
        <HealthyBlock>
          <Text>
            <TitleAccent>Delicious and healthy</TitleAccent> way to enjoy a
            variety of fresh ingredients in one satisfying meal
          </Text>
          <GoToRecipe type="button">
            See recipes <BsArrowRight size={12} />
          </GoToRecipe>
        </HealthyBlock>
      </Container>
    </HeroContainer>
  );
};

export default Hero;
