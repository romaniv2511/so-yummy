import styled from 'styled-components';
import bgMob from '../../img/main-bg-leaf-mob.png';
import bgMobRetina from '../../img/main-bg-leaf-mob@2x.png';
import bgTablet from '../../img/main-bg-leaf-tablet.png';
import bgTabletRetina from '../../img/main-bg-leaf-tablet@2x.png';
import bgDesktop from '../../img/main-bg-leaf-desktop.png';
import bgDesktopRetina from '../../img/main-bg-leaf-desktop@2x.png';
export const ContainerRecipe = styled.section`
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
export const TableRecipe = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  height: 42px;
  padding: 0 14px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.color.textSecondary};
  background-color: ${({ theme }) => theme.color.accent};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    height: 58px;
    margin-bottom: 32px;
    padding: 0px 32px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}) {
    height: 60px;
    padding: 0px 40px;
    margin-bottom: 50px;
  }
  p {
    font-weight: 600;
    font-size: 10px;
    line-height: 1.5;
    letter-spacing: 0.03em;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
      font-size: 18px;
      line-height: 1.5;
    }
  }
  span {
    margin-left: 16px;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
      margin-left: 38px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
     margin-left: 109px;
}
    }
  }
`;
