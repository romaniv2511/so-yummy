import styled from 'styled-components';
import bgMob from '../../img/main-bg-leaf-mob.png';
import bgMobRetina from '../../img/main-bg-leaf-mob@2x.png';
import bgTablet from '../../img/main-bg-leaf-tablet.png';
import bgTabletRetina from '../../img/main-bg-leaf-tablet@2x.png';
import bgDesktop from '../../img/main-bg-leaf-desktop.png';
import bgDesktopRetina from '../../img/main-bg-leaf-desktop@2x.png';
import { NavLink } from 'react-router-dom';

export const MainContainer = styled.section`
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

export const MainList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 40px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    gap: 50px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    gap: 100px;
    margin-bottom: 14px;
  }
`;

export const TitleList = styled.p`
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${props => props.theme.color.title};
  margin-bottom: 32px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    font-size: 44px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    margin-bottom: 50px;
  }
`;

export const CategoriesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-bottom: 24px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    margin-bottom: 40px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    margin-bottom: 50px;
    flex-wrap: nowrap;
    gap: 14px;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 94px;
  height: 38px;
  background-color: ${props => props.theme.color.accent};
  border: none;
  color: ${props => props.theme.color.bg};
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  border-radius: 6px;
  margin-left: auto;

  transition: ${props => props.theme.transitions.main};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.color.bgSecondary};
  }
`;

export const ButtonOtherCategory = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 195px;
  height: 46px;
  background-color: transparent;
  border-radius: 24px 44px;
  border: 2px solid ${props => props.theme.color.accent};
  color: ${props => props.theme.color.bgSecondary};
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  margin-left: auto;
  margin-right: auto;

  transition: ${props => props.theme.transitions.main};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.color.accent};
    color: ${props => props.theme.color.bgLightEl};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    width: 239px;
    height: 61px;
    font-size: 16px;
  }
`;

export const ErrorMessage = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${props => props.theme.color.title};
  margin-bottom: 100px;
  text-align: center;

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    font-size: 36px;
    margin-bottom: 140px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    font-size: 44px;
    margin-bottom: 180px;
  }
`;
