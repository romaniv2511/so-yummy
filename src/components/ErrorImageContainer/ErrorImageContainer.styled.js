import styled from 'styled-components';

export const ErrorImage = styled.img`
  display: block;
  margin-bottom: 24px;
  margin-left: auto;
  margin-right: auto;
  width: 208px;
  height: 133px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    width: 350px;
    height: 225px;
    margin-bottom: 32px;
  }
`;
