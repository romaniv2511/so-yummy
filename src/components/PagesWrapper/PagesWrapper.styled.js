import styled from 'styled-components';
import categoryLeftMob from '../../img/categories-left-mob.png';
import categoryLeftMobRetina from '../../img/categories-left-mob@2x.png';
import categoryLeftDesk from '../../img/categories-left-desktop.png';
import categoryLeftDeskRetina from '../../img/categories-left-desktop@2x.png';
import categoryRightMob from '../../img/categories-right-mob.png';
import categoryRightMobRetina from '../../img/categories-right-mob@2x.png';
import categoryRightDesk from '../../img/categories-right-desktop.png';
import categoryRightDeskRetina from '../../img/categories-right-desktop@2x.png';
import categoryCenterMob from '../../img/categories-center-mob.png';
import categoryCenterMobRetina from '../../img/categories-center-mob@2x.png';
import categoryCenterDesk from '../../img/categories-center-desktop.png';
import categoryCenterDeskRetina from '../../img/categories-center-desktop@2x.png';
import bgMob from '../../img/main-bg-leaf-mob.png';
import bgMobRetina from '../../img/main-bg-leaf-mob@2x.png';
import bgTablet from '../../img/main-bg-leaf-tablet.png';
import bgTabletRetina from '../../img/main-bg-leaf-tablet@2x.png';
import bgDesktop from '../../img/main-bg-leaf-desktop.png';
import bgDesktopRetina from '../../img/main-bg-leaf-desktop@2x.png';

export const MainContainerHeaderStyle = styled.div`
  padding-top: 114px;
  background-image: url(${categoryLeftMob}), url(${categoryCenterMob}),
    url(${categoryRightMob});
  background-size: 10px 10px, 7px 7px, 10px 10px;
  background-repeat: no-repeat;
  background-position: top 76px left 120px, top 142px left 247px,
    top 109px left 349px;
  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${categoryLeftMobRetina}),
      url(${categoryCenterMobRetina}), url(${categoryRightMobRetina});
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    padding-top: 136px;
    background-image: url(${categoryLeftDesk}), url(${categoryCenterDesk}),
      url(${categoryRightDesk});
    background-size: 18px 17px, 15px 15px, 18px 17px;
    background-position: top 85px left 219px, top 155px left 437px,
      top 98px left 726px;
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${categoryLeftDeskRetina}),
        url(${categoryCenterDeskRetina}), url(${categoryRightDeskRetina});
    }
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    padding-top: 164px;
    background-position: top 116px left 328px, top 200px left 807px,
      top 129px left 1250px;
  }
`;

export const MainContainerDownStyle = styled.section`
  padding-bottom: 100px;
  background-image: url(${bgMob});
  background-size: 315px 487px;
  background-repeat: no-repeat;
  background-position: bottom -225px left 0;
  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bgMobRetina});
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    background-image: url(${bgTablet});
    background-size: 500px 790px;
    background-repeat: no-repeat;
    background-position: bottom -380px left 0;
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgTabletRetina});
    }
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    padding-bottom: 118px;
    background-image: url(${bgDesktop});
    background-size: 696px 1037px;
    background-repeat: no-repeat;
    background-position: bottom -518px left 0;
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgDesktopRetina});
    }
  }
`;
