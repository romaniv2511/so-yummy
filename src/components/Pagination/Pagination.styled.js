import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 275px;
  height: 51px;
  padding: 14px 28px;
  background-color: ${props => props.theme.color.bgPagination};
  box-shadow: 0px 4px 4px ${props => props.theme.color.footerInput};
  border-radius: 26px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    width: 324px;
    height: 55px;
    padding: 14px 24px;
    gap: 40px;
  }
`;

export const ArrowButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: none;
  background-color: transparent;

  svg {
    opacity: 0.6;
    fill: rgba(169, 169, 169, 0.73);
    transition: ${({ theme }) => theme.transitions.main};
    :hover,
    :focus {
      opacity: 1;
    }
  }
`;

export const PaginationList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    gap: 24px;
  }
`;

export const ButtonPage = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: ${props => (props.active ? '27px' : '14px')};
  height: 27px;
  border-radius: 14px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.5;
  border: none;
  background-color: ${props =>
    props.active ? props.theme.color.bgPaginationActive : 'transparent'};

  color: ${props =>
    props.active
      ? props.theme.color.btnColorSecondary
      : props.theme.color.textPagination};
`;
