import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  & img {
    width: 40px;
    height: 40px;
    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

    @media (min-width: ${props => props.theme.breakpoints.tab}) {
      width: 44px;
      height: 44px;
    }
  }
  &:hover img {
    transform: scale(1.2);
  }
`;

export const LogoContainer = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.desk}) {
    margin-right: 187px;
  }
`;
