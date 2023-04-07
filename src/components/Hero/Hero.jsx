import { Container } from 'components/Container/Container';
import {
  HeroTitle,
  HeroContainer,
  TitleAccent,
  BottomText,
} from './Hero.styled';

import { ChooseYourBreakfast } from 'components/ChooseYourBreakfast/ChooseYourBreakfast';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
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
        <SearchForm
          initialValue=""
          handleSubmit={(text, actions) => {
            const { searchText } = text;
            navigate(`/search/?query=${searchText}`);
          }}
        />
        <ChooseYourBreakfast />
      </Container>
    </HeroContainer>
  );
};

export default Hero;
