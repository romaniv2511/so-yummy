import Hero from 'components/Hero/Hero';
import { BackgroundHero } from './MainPage.styles';
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
