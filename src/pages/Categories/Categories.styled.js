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

export const ContainerCategory = styled.section`
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

export const TitleCategory = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
  margin-bottom: 60px;
  color: ${props => props.theme.color.title};

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    font-size: 32px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    margin-bottom: 110px;
    font-size: 44px;
  }
`;

export const ButtonsList = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 28px;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 32px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    margin-bottom: 50px;
    gap: 55px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    flex-wrap: nowrap;
  }
`;

export const ButtonCategory = styled.button`
  cursor: pointer;
  color: #bdbdbd;
  border: none;
  padding: 0 0 32px 0;
  background-color: transparent;
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  transition: ${props => props.theme.transitions.main};

  &:hover,
  &:focus {
    color: ${props => props.theme.color.accent};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    font-size: 18px;
    padding: 0 0 27px 0;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
  }
`;

export const RecipesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    row-gap: 100px;
    column-gap: 13px;
  }
`;

export const ActiveButton = styled.button`
  cursor: pointer;
  border: none;
  padding: 0 0 32px 0;
  background-color: transparent;
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  color: ${props => props.theme.color.accent};
  border-bottom: 2px solid ${props => props.theme.color.accent};

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    font-size: 18px;
    padding: 0 0 27px 0;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
  }
`;
