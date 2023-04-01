import Hero from 'components/Hero/Hero';
import { BackgroundHero } from './WelcomePage.styled';
import { PreviewCategories } from 'components/PreviewCategories/PreviewCategories';

const WelcomePage = () => {
  return (
    <BackgroundHero>
      <Hero />
      <PreviewCategories />
    </BackgroundHero>
  );
};
export default WelcomePage;
