import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 275px;
  height: 51px;
  padding: 14px 28px;
  background-color: ${props => props.theme.color.bg};
  box-shadow: 0px 4px 4px rgba(135, 135, 135, 0.2);
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

export const PaginationItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 27px;
  height: 27px;
  border-radius: 14px;
  background-color: ${props =>
    props.active ? props.theme.color.bgAccentEl : 'transparent'};

  & p {
    color: ${props =>
      props.active
        ? props.theme.color.textRights
        : props.theme.color.textPagination};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }
`;

export const ItemText = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.5;
`;
