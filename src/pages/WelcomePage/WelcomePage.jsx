import { Container } from '../../components/Container/Container';
import { Link } from 'react-router-dom';
import {
  Logo,
  Title,
  Description,
  Background,
  ButtonsContainer,
  Button,
} from './WelcomePage.styled';

import logo from 'img/logo.svg';
import { token } from '../../redux/auth/authOperations';
import { updateToken } from '../../redux/auth/authSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const WelcomePage = () => {
  const dispatch = useDispatch();
  useEffect(()=> {
    const urlSearchParams = new URLSearchParams(window.location.search);
    console.log(urlSearchParams);
    const params = Object.fromEntries(urlSearchParams.entries());
    console.log('params', params);
    const newToken = params.token;
    console.log('newToken',newToken);
    if(newToken) {
      token.set(newToken);
      dispatch(updateToken(newToken));
    }
  },[dispatch])

  return (
    <Background>
      <header>
        <Container>
          <Link to="/">
            <Logo src={logo} alt="logo" />
          </Link>
        </Container>
      </header>
      <main>
        <Container>
          <Title>Welcome to the app!</Title>
          <Description>
            This app offers more than just a collection of recipes - it is
            designed to be your very own digital cookbook. You can easily save
            and retrieve your own recipes at any time.
          </Description>
          <ButtonsContainer>
            <Button register="true" to={'/register'}>
              Registration
            </Button>
            <Button to={'/signin'}>Sign in</Button>
          </ButtonsContainer>
        </Container>
      </main>
    </Background>
  );
};
export default WelcomePage;
