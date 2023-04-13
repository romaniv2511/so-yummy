import { IoCloseOutline } from 'react-icons/io5';
import styled from 'styled-components';

export const WrapIngredients = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    margin-bottom: 32px;
  }
`;

export const TitleIngredients = styled.h3`
  color: ${({ theme }) => theme.color.text};
  font-weight: ${({ theme }) => theme.fontWeights.l};

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    font-size: 24px;
    line-height: 1;
    letter-spacing: -0.24px;
  }
`;

export const InputIngredientsWrap = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InputIngredients = styled.input`
  text-transform: capitalize;
  margin-right: 14px;
  max-width: 194px;
  height: 53px;
  padding-left: 16px;
  color: ${props => props.theme.color.secondaryTextColor};
  border: ${({ theme }) => theme.color.borderSelect};
  background-color: ${({ theme }) => theme.color.bgButtonSelect};
  border-radius: 6px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    margin-right: 32px;
    max-width: none;
    width: 398px;
    height: 59px;
    padding-left: 18px;
  }
`;

export const SelectWrap = styled.div`
  float: left;
  width: 50%;
`;

export const CustomInput = styled.input`
  position: relative;
  left: 3px;
  width: 53px;
  height: 53px;
  color: ${props => props.theme.color.secondaryTextColor};
  border: ${({ theme }) => theme.color.borderSelect};
  background-color: ${({ theme }) => theme.color.bgButtonSelect};

  &:focus-within {
    outline: none;
  }

  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    height: 59px;
    text-align: center;
  }
`;

export const SelectIngredients = styled.select`
  position: absolute;
  height: 53px;
  color: ${props => props.theme.color.secondaryTextColor};
  border: ${({ theme }) => theme.color.borderSelect};
  border-left: none;
  background-color: ${({ theme }) => theme.color.bgButtonSelect};
  border-radius: 6px;

  & option {
    background-color: ${props => props.theme.color.bgSelectColor};
    color: ${props => props.theme.color.secondaryTextColor};
    opacity: 0.5;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    width: 97px;
    height: 59px;
    text-align: center;
  }
`;

export const DeleteBtn = styled(IoCloseOutline)`
  width: 20px;
  height: 20px;
  &:hover {
    color: ${({ theme }) => theme.color.accent};
  }
`;

export const QueryList = styled.ul`
  padding-left: 18px;
  background-color: ${({ theme }) => theme.color.bgLightEl};
  box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
  border-radius: 6px;
  max-width: 194px;
  max-height: 200px;
  overflow: auto;
  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    max-width: none;
    width: 348px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    max-width: none;
    width: 320px;
  }
`;

export const QueryItem = styled.li`
  cursor: pointer;
  margin-bottom: 6px;
  &:first-child {
    padding-top: 8px;
  }
  &:last-child {
    margin-bottom: 0;
    padding-bottom: 8px;
  }
  &:hover {
    color: ${({ theme }) => theme.color.accent};
  }
`;
