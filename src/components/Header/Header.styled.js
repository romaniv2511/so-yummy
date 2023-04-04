import styled, { createGlobalStyle } from 'styled-components';

import bgMenuMob from '../../img/bg-menu-mob.png';
import bgMenuMob2x from '../../img/bg-menu-mob@2x.png';
import bgMenuTablet from '../../img/bg-menu-tablet.png';
import bgMenuTablet2x from '../../img/bg-menu-tablet@2x.png';

export const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${({ isOpen }) => (isOpen ? 'hidden' : 'auto')};
  }
`;

export const HeaderBox = styled.header`
  position: absolute;
  width: 100%;
  z-index: 7;
  box-sizing: border-box;
  top: 0;
  left: 0;
  padding-top: 18px;
  background: transparent;
  @media (min-width: ${props => props.theme.breakpoints.desk}) {
    padding-top: 14px;
  }
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
`;
export const UserBox = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  @media (min-width: ${props => props.theme.breakpoints.tab}) {
    gap: 50px;
  }
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0;
  cursor: pointer;
  background: transparent;
  & svg {
    stroke: currentColor;
    fill: transparent;
    transition: ${p => p.theme.transitions.main};
    :hover,
    :focus {
      stroke: ${({ theme }) => theme.color.accent};
      fill: transparent;
    }
  }
`;

export const Modal = styled.div`
  position: fixed;
  box-sizing: border-box;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  transform: ${p => (p.isOpen ? 'translateY(0)' : 'translateY(-100vh)')};
  transition: transform 0.8s cubic-bezier(0, 0, 0.58, 1);
  background-color: rgba(235, 243, 212, 1);
  background-image: url(${bgMenuMob});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom right;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bgMenuMob2x});
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tab}) {
    padding: 18px 32px;
    background-image: url(${bgMenuTablet});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgMenuTablet2x});
    }
  }
`;

export const HeaderModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 124px;
`;
