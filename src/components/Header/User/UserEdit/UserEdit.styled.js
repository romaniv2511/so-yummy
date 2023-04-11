import styled from 'styled-components';

export const Box = styled.div`
  padding: 32px 24px;
  text-align: center;

  @media screen and (min-width: ${p => p.theme.breakpoints.tab}) {
    padding: 50px 40px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desk}) {
    padding: 60px 50px;
  }
`;

export const Form = styled.form``;
