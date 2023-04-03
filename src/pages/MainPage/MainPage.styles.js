import styled from 'styled-components';
import arrowTab from '../../img/hero-arrow-tab.png';
import arrowTabRetina from '../../img/hero-arrow-tab@2x.png';
import arrowDesk from '../../img/hero-arrow-desk.png';
import arrowDeskRetina from '../../img/hero-arrow-desk@2x.png';
import heroLeftMob from '../../img/hero-left-bg-mob.png';
import heroLeftMobRetina from '../../img/hero-left-bg-mob@2x.png';
import heroRightMob from '../../img/hero-right-bg-mob.png';
import heroRightMobRetina from '../../img/hero-right-bg-mob@2x.png';
import heroRightLeafMob from '../../img/hero-right-leaf-bg-mob.png';
import heroRightLeafMobRetina from '../../img/hero-right-leaf-bg-mob@2x.png';
import heroSaladMob from '../../img/hero-right-salad-bg-mob.png';
import heroSaladMobRetina from '../../img/hero-right-salad-bg-mob@2x.png';
import heroLeftTab from '../../img/hero-left-bg-tablet.png';
import heroLeftTabRetina from '../../img/hero-left-bg-tablet@2x.png';
import heroRightTab from '../../img/hero-right-bg-tablet.png';
import heroRightTabRetina from '../../img/hero-right-bg-tablet@2x.png';
import heroRightLeafTab from '../../img/hero-right-leaf-bg-tablet.png';
import heroRightLeafTabRetina from '../../img/hero-right-leaf-bg-tablet@2x.png';
import heroSaladTab from '../../img/hero-right-salad-bg-tablet.png';
import heroSaladTabRetina from '../../img/hero-right-salad-bg-tablet@2x.png';
import heroLeftDesk from '../../img/hero-left-bg-desktop.png';
import heroLeftDeskRetina from '../../img/hero-left-bg-desktop@2x.png';
import heroRightDesk from '../../img/hero-right-bg-desktop.png';
import heroRightDeskRetina from '../../img/hero-right-bg-desktop@2x.png';
import heroRightLeafDesk from '../../img/hero-right-leaf-bg-desktop.png';
import heroRightLeafDeskRetina from '../../img/hero-right-leaf-bg-desktop@2x.png';
import heroSaladDesk from '../../img/hero-right-salad-bg-desktop.png';
import heroSaladDeskRetina from '../../img/hero-right-salad-bg-desktop@2x.png';

export const BackgroundHero = styled.div`
  background-image: url(${heroLeftMob}), url(${heroSaladMob}),
    url(${heroRightLeafMob}), url(${heroRightMob});
  background-size: 48px 202px, 320px 296px, 375px 814px, 269px 678px;
  background-repeat: no-repeat;
  background-position: top 48px left 0, top 322px center, top 50px right 0,
    top 140px right 0;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${heroLeftMobRetina}), url(${heroSaladMobRetina}),
      url(${heroRightLeafMobRetina}), url(${heroRightMobRetina});
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    background-image: url(${arrowTab}), url(${heroLeftTab}),
      url(${heroSaladTab}), url(${heroRightLeafTab}), url(${heroRightTab});
    background-size: 186px 115px, 67px 323px, 368px 351px, 583px 640px,
      332px 640px;
    background-repeat: no-repeat;
    background-position: top 442px right 60px, top 0 left 0, top 159px right 0,
      top 0 right 0, top 0 right 0;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${arrowTabRetina}), url(${heroLeftTabRetina}),
        url(${heroSaladTabRetina}), url(${heroRightLeafTabRetina}),
        url(${heroRightTabRetina});
    }
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    background-image: url(${arrowDesk}), url(${heroLeftDesk}),
      url(${heroSaladDesk}), url(${heroRightLeafDesk}), url(${heroRightDesk});
    background-size: 220px 148px, 116px 398px, 578px 539px, 913px 800px,
      725px 689px;
    background-repeat: no-repeat;
    background-position: top 540px right 170px, top 0 left 0,
      top 126px right 184px, top 0 right 0, top 0 right 0;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${arrowDeskRetina}), url(${heroLeftDeskRetina}),
        url(${heroSaladDeskRetina}), url(${heroRightLeafDeskRetina}),
        url(${heroRightDeskRetina});
    }
  } ;
`;
