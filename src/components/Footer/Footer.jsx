import { Nav } from './Nav/Nav';
import { FollowUs } from './FollowUs/FollowUs';
import { FooterRights } from './FooterRights/FooterRights';
import { FooterLogo } from './FooterLogo/FooterLogo';
import { SubscribeForm } from './SubscribeForm/SubscribeForm';
import { FooterContainer, FooterBg, FooterWrapTab } from './Footer.styled';
export const Footer = () => {
  return (
    <FooterContainer>
      <FooterBg>
        <FooterWrapTab>
          <FooterLogo />
          <Nav />
        </FooterWrapTab>
        <SubscribeForm />
        <FollowUs />
      </FooterBg>
      <FooterRights />
    </FooterContainer>
  );
};
