import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  & svg {
    width: 40px;
    height: 40px;
    stroke: white;
    fill: #8baa36;
    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
    @media (min-width: ${props => props.theme.breakpoints.tab}) {
      width: 44px;
      height: 44px;
    }
  }
  &:hover svg {
    transform: scale(1.2);
  }
`;
