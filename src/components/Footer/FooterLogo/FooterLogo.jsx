import {
  Link,
  FooterAdvantagesList,
  FooterAdvantagesContainer,
} from './FooterLogo.styled';
import logo from '../../../img/logo-footer.svg';
import MediaQuery from 'react-responsive';

export const FooterLogo = () => {
  return (
    <FooterAdvantagesContainer>
      <Link to="/">
        <img src={logo} alt="logo" />
        So Yummy
      </Link>
      <MediaQuery minWidth={768}>
        <FooterAdvantagesList>
          <li>Database of recipes that can be replenished </li>
          <li>Flexible search for desired and unwanted ingredients</li>
          <li>Ability to add your own recipes with photos</li>
          <li>Convenient and easy to use</li>
        </FooterAdvantagesList>
      </MediaQuery>
    </FooterAdvantagesContainer>
  );
};
