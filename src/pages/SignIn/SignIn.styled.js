import styled from 'styled-components';
import registerGirlMob from '../../img/register-mob.png';
import registerGirlMob2X from '../../img/register-mob@2x.png';
import registerGirlTab from '../../img/register-tablet.png';
import registerGirlTab2X from '../../img/register-tablet@2x.png';
import registerGirlDesk from '../../img/register-desktop.png';
import registerGirlDesk2X from '../../img/register-desktop@2x.png';
import registerMob from '../../img/register-bg-mob.png';
import registerMob2X from '../../img/register-bg-mob@2x.png';
import registerTab from '../../img/register-bg-tablet.png';
import registerTab2X from '../../img/register-bg-tablet@2x.png';
import registerDesk from '../../img/register-bg-desktop.png';
import registerDesk2X from '../../img/register-bg-desktop@2x.png';
import { NavLink } from 'react-router-dom';

export const PageWrap = styled.div`
  padding-top: 305px;
  padding-bottom: ${props => (props.register ? '118px' : '153px')};
  background-image: url(${registerGirlMob}), url(${registerMob});
  background-size: 285px 250px, 100% 490px;
  background-repeat: no-repeat;
  background-position: center top 87px, center bottom 0;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${registerGirlMob2X}), url(${registerMob2X});
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    background-image: url(${registerGirlTab}), url(${registerTab});
    padding-top: 444px;
    padding-bottom: ${props => (props.register ? '59px' : '120px')};
    background-size: 409px 359px, 100% 606px;
    background-position: center top 96px, center bottom 0;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${registerGirlTab2X}), url(${registerTab2X});
    }
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    padding-top: ${props => (props.register ? '122px' : '155px')};
    padding-bottom: ${props => (props.register ? '163px' : '196px')};
    background-image: url(${registerGirlDesk}), url(${registerDesk});
    background-size: 532px 468px, 100% 325px;
    background-position: left 113px top 115px, center bottom 0;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${registerGirlDesk2X}), url(${registerDesk2X});
    }
  } ;
`;

export const ContainerRegister = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  min-width: 320px;

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
  font-size: 14px;
  line-height: 1.5;
  color: ${props => props.theme.color.titleStartPage};
  text-decoration: underline;

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    font-size: 16px;
  }
`;
