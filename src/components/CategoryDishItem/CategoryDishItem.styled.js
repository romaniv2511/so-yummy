import styled from 'styled-components';

export const CardContainer = styled.li`
  position: relative;
  width: 343px;
  height: 323px;
  border-radius: 8px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    width: 336px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    width: 300px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const CardTitle = styled.p`
  position: absolute;
  bottom: 26px;
  left: 18px;
  width: 307px;
  height: 52px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${props => props.theme.color.bgLightEl};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.24px;
  color: ${props => props.theme.color.text};

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    width: 300px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    bottom: 23px;
    left: 16px;
    width: 268px;
  }
`;
