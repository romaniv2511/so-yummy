import styled from 'styled-components';
import arrowTab from '../../img/hero-arrow-tab.png';
import arrowDesk from '../../img/hero-arrow-desk.png';
import heroLeftMob from '../../img/hero-left-bg-mob.png';
import heroRightMob from '../../img/hero-right-bg-mob.png';
import heroRightLeafMob from '../../img/hero-right-leaf-bg-mob.png';
import heroSaladMob from '../../img/hero-right-salad-bg-mob.png';
import heroLeftTab from '../../img/hero-left-bg-tablet.png';
import heroRightTab from '../../img/hero-right-bg-tablet.png';
import heroRightLeafTab from '../../img/hero-right-leaf-bg-tablet.png';
import heroSaladTab from '../../img/hero-right-salad-bg-tablet.png';
import heroLeftDesk from '../../img/hero-left-bg-desktop.png';
import heroRightDesk from '../../img/hero-right-bg-desktop.png';
import heroRightLeafDesk from '../../img/hero-right-leaf-bg-desktop.png';
import heroSaladDesk from '../../img/hero-right-salad-bg-desktop.png';

export const BackgroundHero = styled.div`
  background-image: url(${heroLeftMob}), url(${heroSaladMob}),
    url(${heroRightLeafMob}), url(${heroRightMob});
  background-size: 48px 202px, 320px 296px, 375px 814px, 269px 678px;
  background-repeat: no-repeat;
  background-position: top 48px left 0, top 322px center, top 50px right 0,
    top 140px right 0;

  @media (min-width: ${props => props.theme.breakpoints.tab}) {
    background-image: url(${arrowTab}), url(${heroLeftTab}),
      url(${heroSaladTab}), url(${heroRightLeafTab}), url(${heroRightTab});
    background-size: 186px 115px, 67px 323px, 368px 351px, 583px 640px,
      332px 640px;
    background-repeat: no-repeat;
    background-position: top 447px right 90px, top 0 left 0, top 159px right 0,
      top 0 right 0, top 0 right 0;
  }

  @media (min-width: ${props => props.theme.breakpoints.desk}) {
    background-image: url(${arrowDesk}), url(${heroLeftDesk}),
      url(${heroSaladDesk}), url(${heroRightLeafDesk}), url(${heroRightDesk});
    background-size: 220px 148px, 116px 398px, 578px 539px, 913px 800px,
      725px 689px;
    background-repeat: no-repeat;
    background-position: top 550px right 210px, top 0 left 0,
      top 126px right 184px, top 0 right 0, top 0 right 0;
  } ;
`;
