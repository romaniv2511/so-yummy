import { Container } from 'components/Container/Container';
import {
  MainContainerDownStyle,
  MainContainerHeaderStyle,
} from './PagesWrapper.styled';

export const PagesWrapper = ({ children }) => {
  return (
    <MainContainerDownStyle>
      <MainContainerHeaderStyle>
        <Container>{children}</Container>
      </MainContainerHeaderStyle>
    </MainContainerDownStyle>
  );
};
