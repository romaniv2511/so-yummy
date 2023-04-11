import logo from 'img/logo.svg';
import { Link, LogoContainer } from './Logo.styled';

export const Logo = ({ onClick }) => {
  //   const { isLoggedIn } = useAuth();

  return (
    <LogoContainer>
      <Link to="/" onClick={onClick}>
        <img src={logo} alt="logo" />
      </Link>
    </LogoContainer>
  );
};
