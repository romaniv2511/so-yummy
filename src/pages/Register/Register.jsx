import { RegistrationForm } from 'components/forms/RegistrationForm/RegistrationForm';
import { PageWrap, Link, ContainerRegister } from 'pages/SignIn/SignIn.styled';
import { LoginWithGoogle } from '../../components/LoginWithGoogle/LoginWithGoogle';


export default function Register() {
  return (
    <PageWrap register="register">

      <ContainerRegister>
        <RegistrationForm />
        <LoginWithGoogle/>
        <Link to="/signin">Sign In</Link>
      </ContainerRegister>
    </PageWrap>
  );
}
