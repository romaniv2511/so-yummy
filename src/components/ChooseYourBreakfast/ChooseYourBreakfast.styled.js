import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HealthyBlock = styled.div`
  position: absolute;
  bottom: 314px;
  right: 34px;
  width: 225px;
  height: 92px;
  border-radius: 8px;
  background-color: ${props => props.theme.color.bg};
  padding: 8px 8px 11px 8px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    width: 264px;
    height: 100px;
    padding: 11px;
    bottom: 240px;
    right: 43px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    width: 298px;
    height: 114px;
    padding: 16px;
    bottom: 324px;
    right: 122px;
  }
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.24px;
  margin-bottom: 7px;
  text-align: start;
  color: ${props => props.theme.color.text};

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    font-size: 14px;
    line-height: 1.29;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    line-height: 1.43;
  }
`;

export const GoToRecipe = styled(NavLink)`
  cursor: pointer;
  height: 12px;
  display: flex;
  justify-content: flex-end;
  gap: 7px;
  align-items: center;
  background-color: transparent;
  border-radius: 24px 44px;
  border: none;
  color: ${props => props.theme.color.text};
  font-family: inherit;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.2px;
  margin-left: auto;

  transition: ${props => props.theme.transitions.main};

  &:hover,
  &:focus {
    color: ${props => props.theme.color.accent};
  }
`;
