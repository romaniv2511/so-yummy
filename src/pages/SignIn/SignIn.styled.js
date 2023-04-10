import styled from 'styled-components';
import registerMob from '../../img/register-bg-mob.png';
import registerMob2X from '../../img/register-bg-mob@2x.png';
import registerTab from '../../img/register-bg-tablet.png';
import registerTab2X from '../../img/register-bg-tablet@2x.png';
import registerDesk from '../../img/register-bg-desktop.png';
import registerDesk2X from '../../img/register-bg-desktop@2x.png';
import { NavLink } from 'react-router-dom';
export const BoxForAuth = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  width: 100%;
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100%;
  background-image: url(${registerMob});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px 10px;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${registerMob2X});
  }
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    background-image: url(${registerTab});
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${registerTab2X});
    }
  }
  @media screen and (min-width: 1440px) {
    background-image: url(${registerDesk});
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${registerDesk2X});
    }
  }
`;

export const BoxForImage = styled.div`
  width: 285px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 769px) and (max-width: 1440px) {
    width: 410px;
    height: 360px;
  }
  @media screen and (min-width: 1441px) {
    width: 532px;
    height: 468px;
  }
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 115px;
  }
`;

export const AuthImage = styled.picture`
  width: 100%;
  display: block;
`;
// export const PageWrap = styled.div`
//   padding-top: 305px;
//   padding-bottom: ${props => (props.register ? '118px' : '153px')};
//   background-image: url(${registerGirlMob}), url(${registerMob});
//   /* background-size: 285px 250px, 100% 490px; */
//   background-size: 100%;
//   background-repeat: no-repeat;
//   background-position: center bottom;
//   margin: 0px auto;
//   min-height: 100vh;
//   width: 100%;

//   @media (min-device-pixel-ratio: 2),
//     (-webkit-min-device-pixel-ratio: 2),
//     (min-resolution: 192dpi),
//     (min-resolution: 2dppx) {
//     background-image: url(${registerGirlMob2X}), url(${registerMob2X});
//   }

//   @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
//     background-image: url(${registerGirlTab}), url(${registerTab});
//     padding-top: 444px;
//     padding-bottom: ${props => (props.register ? '59px' : '120px')};
//     background-size: 409px 359px, 100% 606px;
//     background-position: center top 96px, center bottom 0;

//     @media (min-device-pixel-ratio: 2),
//       (-webkit-min-device-pixel-ratio: 2),
//       (min-resolution: 192dpi),
//       (min-resolution: 2dppx) {
//       background-image: url(${registerGirlTab2X}), url(${registerTab2X});
//     }
//   }

//   @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
//     /* padding-top: ${props => (props.register ? '122px' : '155px')}; */
//     /* padding-bottom: ${props => (props.register ? '163px' : '196px')}; */
//     background-image: url(${registerGirlDesk}), url(${registerDesk});
//     background-size: 532px 468px, 100% 325px;
//     background-position: left 113px top 115px, center bottom 0;

//     @media (min-device-pixel-ratio: 2),
//       (-webkit-min-device-pixel-ratio: 2),
//       (min-resolution: 192dpi),
//       (min-resolution: 2dppx) {
//       background-image: url(${registerGirlDesk2X}), url(${registerDesk2X});
//     }
//   } ;
// `;

export const ContainerRegister = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  min-width: 320px;
  margin: -35px auto 0px;
  @media screen and (max-width: ${p => p.theme.breakpoints.mobMax}) {
    max-width: ${p => p.theme.breakpoints.mob};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tab}) {
    width: ${p => p.theme.breakpoints.tab};
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desk}) {
    width: ${p => p.theme.breakpoints.desk};
    padding-left: 760px;
    padding-right: 180px;
  }
`;

export const Link = styled(NavLink)`
  display: block;
  font-family: inherit;
  text-align: center;
  font-weight: 400;
  position: absolute;
  bottom: -25px;
  font-size: 14px;
  line-height: 1.5;
  right: 143px;
  color: ${props => props.theme.color.titleStartPage};
  text-decoration: underline;

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    font-size: 16px;
    bottom: -30px;
    right: 220px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    right: 220px;
  }
`;
export const LinkRegister = styled(NavLink)`
  display: block;
  font-family: inherit;
  text-align: center;
  font-weight: 400;
  position: absolute;
  bottom: -25px;
  font-size: 14px;
  line-height: 1.5;
  right: 121px;
  color: ${props => props.theme.color.titleStartPage};
  text-decoration: underline;

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    font-size: 16px;
    bottom: -30px;
    right: 197px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    right: 197px;
  }
`;
