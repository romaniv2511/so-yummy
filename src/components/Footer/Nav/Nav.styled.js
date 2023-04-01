import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// Добавити навігацію коли все буде готово

export const Link = styled(NavLink)`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.color.textSecondary};
  transition: ${({ theme }) => theme.transitions.main};
  /* &.active {
    color: ${({ theme }) => theme.color.textRights};
  } */
  :hover,
  :focus {
    color: ${({ theme }) => theme.color.accent};
  }
`;

export const NavContainer = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    gap: 20px;
    margin: 0;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}) {
    gap: 24px;
  }
`;
