import styled from 'styled-components';
import { Field, Form } from 'formik';

export const HeroContainer = styled.section`
  position: relative;
  padding-top: 71px;
  padding-bottom: 147px;

  @media screen and (max-width: 767px) {
    text-align: center;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    padding-top: 141px;
    padding-bottom: 267px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    padding-top: 175px;
    padding-bottom: 368px;
  }
`;

export const HeroTitle = styled.h1`
  font-weight: 400;
  font-size: 60px;
  line-height: 1;
  color: ${props => props.theme.color.bgSecondary};
  margin-bottom: 14px;
  text-align: center;

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

export const FormContainer = styled(Form)`
  position: relative;
`;

export const FieldContainer = styled(Field)`
  width: 292px;
  height: 52px;
  padding: 17px 32px;
  color: ${props => props.theme.color.bgSecondary};
  background-color: #fafafa;
  border-radius: 24px 44px;
  border: 1px solid #f0f0f0;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;

  @media screen and (max-width: 767px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    width: 362px;
    height: 59px;
    padding: 18px 38px;
    font-size: 16px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    width: 510px;
    height: 70px;
    padding: 23px 48px;
  }
`;

export const ButtonSearch = styled.button`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 25px;
  width: 113px;
  height: 52px;
  background-color: ${props => props.theme.color.bgSecondary};
  border-radius: 24px 44px;
  border: none;
  color: ${props => props.theme.color.bg};
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;

  transition: ${props => props.theme.transitions.main};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.color.accent};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    width: 161px;
    height: 59px;
    left: 201px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    font-size: 16px;
    height: 70px;
    left: 350px;
  }
`;
