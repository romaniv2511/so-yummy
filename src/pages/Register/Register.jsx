import { RegistrationForm } from 'components/forms/RegistrationForm/RegistrationForm';
import {
  BoxForAuth,
  BoxForImage,
  AuthImage,
  Container,
} from 'pages/SignIn/SignIn.styled';
import registerGirlMob from '../../img/register-mob.png';
import registerGirlMob2X from '../../img/register-mob@2x.png';
import registerGirlTab from '../../img/register-tablet.png';
import registerGirlTab2X from '../../img/register-tablet@2x.png';
import registerGirlDesk from '../../img/register-desktop.png';
import registerGirlDesk2X from '../../img/register-desktop@2x.png';
// import { LoginWithGoogle } from '../../components/LoginWithGoogle/LoginWithGoogle';

export default function Register() {
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
        <RegistrationForm />
      </Container>
    </BoxForAuth>
  );
}
