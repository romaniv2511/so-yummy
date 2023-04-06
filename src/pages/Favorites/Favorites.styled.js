import styled from 'styled-components';

export const Title = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
  margin-bottom: 50px;
  color: ${props => props.theme.color.title};
  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    font-size: 32px;
    /* margin-bottom: 100px; */
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    font-size: 44px;
  }
`;

export const Container = styled.div`
  text-align: center;
`;
export const Text = styled.div`
  margin-top: 25px;
  font-weight: 500;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
