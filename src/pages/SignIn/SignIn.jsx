// import { Helmet } from 'react-helmet-async';
import { LoginPageWrap } from './SignIn.styled';
import { LoginForm } from 'components/forms/LogInForm/LogInForm';

export default function Login() {
  return (
    <LoginPageWrap>
      {/*<Helmet>*/}
        <title>Login</title>
      {/*</Helmet>*/}
      <h2>
        Login form
        <br />
        for registered Users
      </h2>
      <LoginForm />
    </LoginPageWrap>
  );
}
