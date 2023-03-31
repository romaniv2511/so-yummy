import { Nav } from './Nav/Nav';
import { FollowUs } from './FollowUs/FollowUs';
import { FooterRights } from './FooterRights/FooterRights';
import { FooterLogo } from './FooterLogo/FooterLogo';
import { SubscribeForm } from './SubscribeForm/SubscribeForm';
import { FooterContainer, FooterBg } from './Footer.styled';
export const Footer = () => {
  return (
    <FooterContainer>
      <FooterBg>
        <FooterLogo />
        <Nav />
        <SubscribeForm />
        <FollowUs />
      </FooterBg>
      <FooterRights />
    </FooterContainer>
  );
};
