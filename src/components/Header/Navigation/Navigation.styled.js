import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  color: ${props => {
    return props.colorProp === 'recipe'
      ? props.theme.color.textCancel
      : props.theme.color.primaryTextColor;
  }};

  @media (min-width: ${props => props.theme.breakpoints.tab}) {
    gap: 40px;
  }

  @media (min-width: ${props => props.theme.breakpoints.desk}) {
    display: flex;
    flex-direction: row;
    gap: 30px;
    margin-right: auto;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  gap: 8px;
  align-items: center;
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: inherit;

  & svg {
    width: 20px;
    height: 20px;
    stroke: currentColor;
    fill: transparent;

    :hover {
      stroke: ${props => props.theme.color.accent};
    }
    @media (min-width: ${props => props.theme.breakpoints.tab}) {
      width: 24px;
      height: 24px;
    }
  }

  :hover {
    color: ${props => props.theme.color.accent};
  }

  &.active {
    color: ${props => props.theme.color.accent};
    font-weight: 600;
  }

  @media (min-width: ${props => props.theme.breakpoints.tab}) {
    font-size: 24px;
  }

  @media (min-width: ${props => props.theme.breakpoints.desk}) {
    font-size: 14px;
    line-height: 1.6;
  } ;
`;
