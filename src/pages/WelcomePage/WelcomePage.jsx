import Hero from 'components/Hero/Hero';
import { BackgroundHero } from './WelcomePage.styled';

const WelcomePage = () => {
  return (
    <BackgroundHero>
      <Hero />
    </BackgroundHero>
  );
};
export default WelcomePage;
