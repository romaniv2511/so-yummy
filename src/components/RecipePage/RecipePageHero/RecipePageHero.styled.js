import styled from 'styled-components';
import bgMob from '../../../img/recipe-bg-mob.png';
import bgMobRetina from '../../../img/recipe-bg-mob@2x.png';
import bgTablet from '../../../img/recipe-bg-tablet.png';
import bgTabletRetina from '../../../img/recipe-bg-tablet.@2x.png';
import bgDesktop from '../../../img/recipe-bg-desktop.jpg';
import bgDesktopRetina from '../../../img/recipe-bg-desktop@2x.jpg';

export const RecipePageHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-repeat: no-repeat;
  margin-bottom: 32px;
  padding-top: 97px;
  padding-bottom: 80px;
  background-size: 100%;
  background-image: url(${bgMob});

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bgMobRetina});
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    padding-bottom: 32px;
    margin-bottom: 50px;
    padding-top: 136px;
    background-image: url(${bgTablet});
    background-repeat: no-repeat;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgTabletRetina});
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}) {
    padding-top: 170px;
    background-image: url(${bgDesktop});
    background-repeat: no-repeat;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgDesktopRetina});
    }
  }
`;

export const RecipePageHeroTitle = styled.title`
  display: block;
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.3;
  margin-bottom: 24px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.color.accent};
  max-width: 330px;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-y: clip;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    max-width: 680px;
    font-size: 44px;
    margin-bottom: 24px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}) {
    max-width: 1000px;
  }
`;
export const RecipePageHeroText = styled.p`
  font-weight: 400;
  text-align: center;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  width: 303px;
  margin-bottom: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-y: clip;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    width: 506px;
    font-size: 18px;
    line-height: 1.33;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}) {
    margin-bottom: 30px;
    width: 656px;
  }
`;
export const RecipePageHeroCookingTime = styled.div`
  display: flex;
  color: #23262a;
  height: 14px;
  margin-top: 42px;
  letter-spacing: -0.24px;
  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;
  align-items: center;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    height: 20px;
    margin-top: 60px;
    font-size: 14px;
    line-height: 20px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}) {
    margin-top: 48px;
  }
  & svg {
    display: inline-block;
    margin-right: 5px;
    width: 14px;
    height: 14px;
    stroke: black;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }
`;
