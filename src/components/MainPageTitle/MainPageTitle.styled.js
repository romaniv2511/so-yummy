import styled from 'styled-components';

export const MainTitlePage = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
  margin-bottom: 60px;
  color: ${props => props.theme.color.title};

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    font-size: 32px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    margin-bottom: 110px;
    font-size: 44px;
  }
`;
