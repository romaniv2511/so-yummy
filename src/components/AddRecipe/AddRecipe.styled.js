import styled from 'styled-components';

export const Wrapper = styled.div`
  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    display: flex;
    gap: 102px;
  }
`;
