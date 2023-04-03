import styled from 'styled-components';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

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
  display: flex;
  flex-direction: row;
  width: 1160px;
  padding-left: 30px;
  padding-right: 30px;

  gap: 28px;
  border-bottom: 1px solid #e0e0e0;

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    width: 1711px;
    gap: 55px;
  }
`;

export const ButtonCategory = styled.button`
  cursor: pointer;
  color: ${props => (props.active ? props.theme.color.accent : '#bdbdbd')};
  border: none;
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
