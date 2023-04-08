import { Field, Form } from 'formik';
import styled from 'styled-components';

export const TitleForm = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: ${props => props.theme.color.titleStartPage};
  margin-bottom: ${props => (props.register ? '18px' : '40px')};

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    font-size: 28px;
    line-height: 1.07;
    margin-bottom: ${props => (props.register ? '32px' : '50px')};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
  }
`;

export const FormContainer = styled.div`
  background-color: #2a2c36;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  padding: 32px 28px 40px;
  margin-bottom: 18px;

  @media screen and (min-width: ${props => props.theme.breakpoints.mob}) {
    width: 335px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    width: 500px;
    padding: 44px 50px;
  }

  @media screen and (max-width: 1439px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const FormContent = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 28px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    gap: 24px;
    margin-bottom: 50px;
  }
`;

export const Input = styled(Field)`
  background-color: #2a2c36;
  border: 1px solid ${props => props.theme.color.titleStartPage};
  border-radius: 6px;
  height: 45px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  padding: 12px 12px 12px 40px;
  color: ${props => props.theme.color.titleStartPage};

  &::placeholder {
    opacity: 0.8;
    color: ${props => props.theme.color.titleStartPage};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.mob}) {
    width: 279px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    width: 400px;
    height: 59px;
    font-size: 18px;
    padding: 16px 16px 16px 50px;
  }
`;

export const LabelContainer = styled.div`
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  top: 13.5px;
  left: 14px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    top: 17.5px;
    left: 18px;
  }

  & svg {
    width: 18px;
    height: 18px;
    fill: none;
    opacity: 0.8;
    stroke: ${props => props.theme.color.titleStartPage};

    @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
      width: 24px;
      height: 24px;
    }
  }
`;

export const ButtonSubmit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 45px;
  border: none;
  border-radius: 6px;
  background-color: ${props => props.theme.color.accentStartPage};
  color: ${props => props.theme.color.titleStartPage};
  font-family: inherit;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.12;

  transition: ${props => props.theme.transitions.main};

  &:hover,
  &:focus {
    color: ${props => props.theme.color.accentStartPage};
    border: 1px solid ${props => props.theme.color.accentStartPage};
    background-color: transparent;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.mob}) {
    width: 279px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    width: 400px;
    height: ${props => (props.register ? '51px' : '59px')};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    height: 59px;
  }
`;

export const ErrorMessage = styled.div`
  position: absolute;
  top: -30px;
  left: 30px;
  background-color: ${props => props.theme.color.titleStartPage};
  color: ${props => props.theme.color.accentStartPage};
  padding: 5px;
  border-radius: 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
`;
