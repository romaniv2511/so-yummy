import styled from 'styled-components';

export const HeroContainer = styled.section`
  position: relative;
  padding-top: 132px;
  padding-bottom: 147px;

  @media screen and (max-width: 767px) {
    text-align: center;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    padding-top: 204px;
    padding-bottom: 267px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    padding-top: 226px;
    padding-bottom: 368px;
  }
`;

export const HeroTitle = styled.h1`
  font-weight: 400;
  font-size: 55px;
  line-height: 1;
  color: ${props => props.theme.color.bgSecondary};
  margin-bottom: 14px;
  text-align: center;

  @media screen and (min-width: ${props => props.theme.breakpoints.mob}) {
    font-size: 60px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    font-weight: 700;
    font-size: 72px;
    margin-bottom: 24px;
    text-align: start;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    font-size: 100px;
    letter-spacing: -0.005em;
    margin-bottom: 14px;
  }
`;

export const TitleAccent = styled.span`
  color: ${props => props.theme.color.accent};
`;

export const BottomText = styled.p`
  width: 248px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  margin-bottom: 364px;
  margin-right: auto;
  color: #23262a;

  @media screen and (max-width: 767px) {
    margin-left: auto;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    width: 362px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    font-size: 18px;
    line-height: 1.33;
    width: 465px;
    margin-bottom: 50px;
  }
`;
