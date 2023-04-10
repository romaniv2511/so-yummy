import { RegistrationForm } from 'components/forms/RegistrationForm/RegistrationForm';
import { PageWrap, Link, ContainerRegister } from 'pages/SignIn/SignIn.styled';


export default function Register() {
  return (
    <PageWrap register="register">

      <ContainerRegister>
        <RegistrationForm />

        <Link to="/signin">Sign In</Link>
      </ContainerRegister>
    </PageWrap>
  );
}
