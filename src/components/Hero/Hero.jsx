import { Container } from 'components/Container/Container';
import {
  HeroTitle,
  HeroContainer,
  TitleAccent,
  BottomText,
} from './Hero.styled';

import { ChooseYourBreakfast } from 'components/ChooseYourBreakfast/ChooseYourBreakfast';
import { Search } from 'components/Search/Search';

const Hero = () => {
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
        <Search />
        <ChooseYourBreakfast />
      </Container>
    </HeroContainer>
  );
};

export default Hero;
