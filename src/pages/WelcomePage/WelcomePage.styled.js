import styled from 'styled-components';
import bgImageMob from '../../img/start-page-mob.jpg';
import bgImageMob2X from '../../img/start-page-mob@2x.jpg';
import bgImageTab from '../../img/start-page-tablet.jpg';
import bgImageTab2X from '../../img/start-page-tablet@2x.jpg';
import bgImageDesk from '../../img/start-page-desktop.jpg';
import bgImageDesk2X from '../../img/start-page-desktop@2x.jpg';
import { NavLink } from 'react-router-dom';

export const Background = styled.div`
  padding-top: 275px;
  padding-bottom: 261px;
  background-image: url(${bgImageMob});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top 0 left 0;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bgImageMob2X});
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    background-image: url(${bgImageTab});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgImageTab2X});
    }
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    background-image: url(${bgImageDesk});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgImageDesk2X});
    }
  } ;
`;

export const Logo = styled.img`
  display: block;
  width: 54px;
  height: 54px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 12px;
  margin-bottom: 28px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    width: 68px;
    height: 68px;
    margin-bottom: 44px;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${props => props.theme.color.titleStartPage};
  text-align: center;
  margin-bottom: 14px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    font-size: 28px;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  text-align: center;
  letter-spacing: -0.02em;
  margin-bottom: 44px;
  color: ${props => props.theme.color.titleStartPage};

  @media screen and (min-width: ${props => props.theme.breakpoints.mob}) {
    width: 305px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    width: 505px;
    font-size: 18px;
    line-height: 1.33;
    margin-bottom: 40px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    width: 540px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    gap: 18px;
  }
`;

export const Button = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: ${props => (props.register ? '132px' : '95px')};
  height: 45px;
  padding: 12px 21px;
  background-color: ${props =>
    props.register ? props.theme.color.accentStartPage : 'transparent'};
  border-radius: 24px 44px;
  border: ${props =>
    props.register
      ? `2px solid ${props.theme.color.accentStartPage}`
      : `2px solid ${props.theme.color.titleStartPage}`};
  color: ${props => props.theme.color.titleStartPage};
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  &.active: ${props => props.theme.color.accentStartPage};

  transition: ${props => props.theme.transitions.main};

  &:hover,
  &:focus {
    background-color: ${props =>
      props.register ? 'transparent' : 'transparent'};
    border: ${props => `2px solid ${props.theme.color.accentStartPage}`};
    color: ${props => props.theme.color.accentStartPage};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    width: ${props => (props.register ? '184px' : '141px')};
    height: 67px;
    padding: 22px 42px;
    font-size: 16px;
  }
`;
