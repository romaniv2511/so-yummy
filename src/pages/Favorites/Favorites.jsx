import { PagesWrapper } from 'components/PagesWrapper/PagesWrapper';
import { Title, Container, Text } from './Favorites.styled';
import imgMob from 'img/search-any-mob.png';
import imgMob2 from 'img/search-any-mob@2x.png';
import imgTab from 'img/search-any-tablet.png';
import imgTab2 from 'img/search-any-tablet@2x.png';
import imgDesk from 'img/search-any-desktop.png';
import imgDesk2 from 'img/search-any-desktop@2x.png';

const Favorites = () => {
  return (
    <main>
      <PagesWrapper>
        <Title>Favorites</Title>
        <Container>
          <picture>
            <source
              srcset={`${imgDesk} 1440w, ${imgDesk2} 2880w`}
              media="(min-width: 1440px)"
              sizes="(min-width: 1440px) 1440px"
            />
            <source
              srcset={`${imgTab} 768w, ${imgTab2} 1536w`}
              media="(min-width: 768px)"
              sizes="(min-width: 768px) 768px"
            />
            <source
              srcset={`${imgMob} 375w, ${imgMob2} 750w`}
              media="(max-width: 767px)"
              sizes="(max-width: 767px) 375px"
            />
            <img src={`${imgMob} 375w`} alt="there are no recipes" />
          </picture>
          <Text>
            You don't have recipes in favorites yet, add your first recipe!
          </Text>
        </Container>
      </PagesWrapper>
    </main>
  );
};

export default Favorites;
