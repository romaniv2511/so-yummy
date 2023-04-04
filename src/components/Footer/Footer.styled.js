import styled from 'styled-components';
import bgMob from '../../img/footer-bg-mob.png';
import bgMobRetina from '../../img/footer-bg-mob@2x.png';
import bgTablet from '../../img/footer-bg-tablet.png';
import bgTabletRetina from '../../img/footer-bg-tablet@2x.png';
import bgDesktop from '../../img/footer-bg-desktop.png';
import bgDesktopRetina from '../../img/footer-bg-desktop@2x.png';

export const FooterContainer = styled.footer`
  /* padding-top: 35px; */
  width: 100%;
  background-image: url(${bgMob});
  background-size: 179px 155px;
  background-repeat: no-repeat;
  background-position: top 349px right 0;
  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bgMobRetina});
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    background-image: url(${bgTablet});
    background-repeat: no-repeat;
    background-size: 341px 261px;
    background-position: top 245px right 0;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgTabletRetina});
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}) {
      background-image: url(${bgDesktop});
      background-size: 419px 394px;
      background-repeat: no-repeat;
      background-position: right 0px top 139px;
      @media (min-device-pixel-ratio: 2),
        (-webkit-min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${bgDesktopRetina});
      }
    }
  }
`;

export const BacgroundFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-repeat: no-repeat;
  margin-bottom: 32px;
  padding-top: 144px;
  padding-bottom: 90px;
  height: 455px;
  background-size: 100%;
`;

export const FooterBg = styled.div`
  background-color: ${({ theme }) => theme.color.bgSecondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 28px;
  padding-bottom: 18px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    text-align: left;
    padding-top: 50px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}) {
    text-align: left;
    padding-top: 64px;
    padding-left: 100px;
    padding-right: 100px;
    padding-bottom: 50px;
  }
`;
export const FooterWrapTab = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    display: flex;
    gap: 175px;
    width: 100%;
    justify-content: center;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}) {
    margin-right: 250px;
    gap: 159px;
  }
`;
export const FooterWrapDesk = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}) {
    display: flex;
  }
`;
