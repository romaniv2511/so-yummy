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
  margin-right: 14px;
  max-width: 194px;
  height: 53px;
  padding-left: 16px;
  border: none;
  background: ${({ theme }) => theme.color.gbCancel};
  border-radius: 6px;
  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    margin-right: 32px;
    max-width: none;
    width: 398px;
    height: 59px;
    padding-left: 18px;
  }
`;

export const SelectIngredients = styled.select`
  height: 53px;
  border: none;
  background: ${({ theme }) => theme.color.gbCancel};
  border-radius: 6px;
  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    width: 97px;
    height: 59px;
    text-align: center;
  }
`;
