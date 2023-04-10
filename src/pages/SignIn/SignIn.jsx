// import { Helmet } from 'react-helmet-async';
import { Container, BoxForAuth, BoxForImage, AuthImage } from './SignIn.styled';
import { LoginForm } from 'components/forms/LogInForm/LogInForm';
import registerGirlMob from '../../img/register-mob.png';
import registerGirlMob2X from '../../img/register-mob@2x.png';
import registerGirlTab from '../../img/register-tablet.png';
import registerGirlTab2X from '../../img/register-tablet@2x.png';
import registerGirlDesk from '../../img/register-desktop.png';
import registerGirlDesk2X from '../../img/register-desktop@2x.png';
export default function Login() {
  return (
    <BoxForAuth>
      <Container>
        <BoxForImage>
          <AuthImage alt="girl">
            <source
              media="(min-width: 1440px)"
              srcSet={`${registerGirlDesk}, ${registerGirlDesk2X} 2x`}
            />
            <source
              media="(min-width: 768px)"
              srcSet={`${registerGirlTab},
                        ${registerGirlTab2X} 2x`}
            />
            <img
              src={registerGirlDesk}
              srcSet={`${registerGirlMob},
                        ${registerGirlMob2X} 2x`}
              alt="girl"
            />
          </AuthImage>
        </BoxForImage>
        <LoginForm />
      </Container>
    </BoxForAuth>
  );
}
