import styled from 'styled-components';
import { Field, Form } from 'formik';

export const FormContainer = styled(Form)`
  position: relative;
  width: 288px;

  @media screen and (min-width: ${props => props.theme.breakpoints.mob}) {
    width: 292px;
  }

  @media screen and (max-width: 767px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    width: 362px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    width: 510px;
  }
`;

export const FieldContainer = styled(Field)`
  width: 288px;
  height: 52px;
  padding: 17px 32px;
  color: ${props => props.theme.color.text};
  background-color: ${props => props.theme.color.bg};
  border-radius: 24px 44px;
  border: 1px solid #f0f0f0;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;

  @media screen and (min-width: ${props => props.theme.breakpoints.mob}) {
    width: 292px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 175px;
  width: 113px;
  height: 52px;
  background-color: ${props => props.theme.color.bgSecondary};
  border-radius: 24px 44px;
  border: none;
  color: ${props => props.theme.color.btnColor};
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;

  transition: ${props => props.theme.transitions.main};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.color.accent};
    color: ${props => props.theme.color.socIconHover};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.mob}) {
    left: 180px;
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

export const ContainerError = styled.div`
  width: 300px;
  height: 30px;
  padding: 20px 30px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
`;
