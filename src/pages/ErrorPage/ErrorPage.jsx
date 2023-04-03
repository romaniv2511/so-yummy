import { Container } from '../../components/Container/Container';
import { MainContainer } from '../../components/PreviewCategories/PreviewCategories.styled';
import { ContainerCategory } from '../Categories/Categories.styled';
import {Box, Title, Text} from './ErrorPage.styled';
import imgMob from '../../img/error-page-mob.png';
import imgMobX2 from '../../img/error-page-mob.png';
import imgTab from '../../img/error-page-tablet.png';
import imgTabX2 from '../../img/error-page-tablet@2x.png';
import imgDesk from '../../img/error-page-desktop.png';
import imgDeskX2 from '../../img/error-page-desktop@2x.png';


const ErrorPage = () => {
  return (
    <main>
      <ContainerCategory>
      <MainContainer>
        <Container>
          <Box>
            <img
              srcSet={`
              ${imgDeskX2} 2880w,
              ${imgDesk} 1440w,
              ${imgTabX2} 1356w,
              ${imgTab} 678w,
              ${imgMobX2} 750w,
              ${imgMob} 375w,
            `}
              sizes="
              (max-width: 677px) 375px,
              (max-width: 1439px) 678px,
              1440px
            "
              src={imgMob}
              alt="Error"
            />
            <Title>We are sorry,</Title>
            <Text>but the page you were looking for can’t be found...</Text>
          </Box>
        </Container>
      </MainContainer>
      </ContainerCategory>
    </main>
  )
}

export default ErrorPage;
