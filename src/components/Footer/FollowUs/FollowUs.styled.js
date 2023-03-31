import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const FollowUsContainer = styled.div`
  margin-top: 44px;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  svg {
    fill: ${({ theme }) => theme.color.socIcon};
    transition: ${({ theme }) => theme.transitions.main};
    :hover,
    :focus {
      fill: ${({ theme }) => theme.color.socIconHover};
    }
  }
`;

export const Link = styled(NavLink)``;
