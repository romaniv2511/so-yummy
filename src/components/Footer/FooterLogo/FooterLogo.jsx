import { Link } from './FooterLogo.styled';
import logo from '../../../img/logo-footer.svg';
export const FooterLogo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="logo" />
      So Yummy
    </Link>
  );
};
