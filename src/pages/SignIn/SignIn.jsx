// import { Helmet } from 'react-helmet-async';
import { Link, PageWrap, ContainerRegister } from './SignIn.styled';
import { LoginForm } from 'components/forms/LogInForm/LogInForm';

export default function Login() {
  return (
    <PageWrap>
      <ContainerRegister>
        <LoginForm />
        <Link to="/register">Registration</Link>
      </ContainerRegister>
    </PageWrap>
  );
}
