import styled from 'styled-components';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { NavLink } from 'react-router-dom';

export const ScrollableContainer = styled(PerfectScrollbar)`
  height: 55px;
  margin-bottom: 32px;

  .ps__rail-x {
    height: 5px;
    background-color: transparent;
    opacity: 1;
  }

  .ps__thumb-x {
    height: 5px;
    background-color: transparent;
    border-radius: 4px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    margin-bottom: 50px;
  }

  &:hover .ps__rail-x,
  &:focus .ps__rail-x {
    background-color: #f1f1f1;
  }

  &:hover .ps__thumb-x,
  &:focus .ps__thumb-x {
    background-color: #bdbdbd;
  }

  .ps__thumb-x:hover,
  .ps__thumb-x:focus {
    height: 7px;
  }
`;

export const ButtonsList = styled.ul`
  display: flex;
  flex-direction: row;
  width: 1160px;
  padding: 0 30px 30px 30px;

  gap: 28px;
  border-bottom: 1px solid #e0e0e0;

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    width: 1711px;
    gap: 55px;
  }
`;

export const ButtonCategory = styled(NavLink)`
  cursor: pointer;
  border: none;
  color: ${props => (props.active ? props.theme.color.accent : '#bdbdbd')};
  border-bottom: ${props =>
    props.active ? `2px solid ${props.theme.color.accent}` : 'none'};
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

  &.active {
    color: ${props => props.theme.color.accent};
    border-bottom: ${props => `2px solid ${props.theme.color.accent}`};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    font-size: 18px;
    padding: 0 0 27px 0;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
  }
`;
