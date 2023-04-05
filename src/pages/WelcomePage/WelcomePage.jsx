import { Container } from '../../components/Container/Container';
import { Logo, Title, Description } from './WelcomePage.styled';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <Container>
      <Logo src={'../../logo.svg'} alt="logo" />
      <Title>Welcome to the app!</Title>
      <Description>
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time.
      </Description>
      <Link to={'/register'}>Register</Link>
      <br/>
      <Link to={"/signin"}>Sign In</Link>
    </Container>
  );
};
export default WelcomePage;
