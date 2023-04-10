import { Field, Form } from 'formik';
import styled from 'styled-components';
import { FiUser } from 'react-icons/fi';
import { FiLock } from 'react-icons/fi';
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
`;

export const FormContainer = styled.div`
  width: 288px;
  background-color: #2a2c36;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  padding: 32px 20px 40px;
  margin-bottom: 18px;

  @media screen and (min-width: ${props => props.theme.breakpoints.mob}) {
    width: 335px;
    padding: 32px 28px 40px;
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

export const FormContent = styled(Form)``;

export const Input = styled(Field)`
  width: 248px;
  background-color: #2a2c36;
  border: 1px solid ${({ bordercolor }) => bordercolor};
  border-radius: 6px;
  height: 45px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  padding: 12px 12px 12px 40px;
  color: ${props => props.theme.color.titleStartPage};
  :-webkit-autofill {
    transition: background-color 250s linear, color 250s linear;
  }
  &::placeholder {
    opacity: 0.8;
    color: ${props => props.theme.color.titleStartPage};
  }

  &:hover,
  :focus {
    border: 1px solid ${({ color }) => color};
    outline: none;
    &::placeholder {
      opacity: 1;
    }
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

export const LabelsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 28px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    gap: 24px;
    margin-bottom: 50px;
  }
`;

export const LabelContainer = styled.div`
  position: relative;
  isolation: isolate;
`;

export const Label = styled.label`
  position: absolute;
  top: 13.5px;
  left: 14px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    top: 19.5px;
    left: 18px;
  }

  & svg {
    width: 18px;
    height: 18px;
    /* fill: transparent; */
    /* stroke: ${({ color }) => color}; */
    /* opacity: 0.8; */

    @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
      width: 24px;
      height: 24px;
    }
  }
`;
export const IconName = styled(FiUser)`
  color: ${({ color }) => color};
  position: absolute;
  top: -2px;
  width: 16px;
  height: 18px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
export const IconPassword = styled(FiLock)`
  color: ${({ color }) => color};
  position: absolute;
  top: -2px;
  width: 16px;
  height: 18px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
export const FlagForInput = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    right: 18px;
    top: 20px;
  }

  @media screen and (min-width: 1440px) {
    /* top: 126px; */
    /* right: 12px; */
  }
`;
export const ButtonSubmit = styled.button`
  width: 248px;
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
  color: ${({ color }) => color};
  top: 55px;
  left: 10px;
  font-size: 11px;
  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    top: 64px;
    left: 10px;
    font-size: 14px;
  }
`;
