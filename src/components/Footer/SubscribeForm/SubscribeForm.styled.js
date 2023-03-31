import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  width: 204px;
  gap: 8px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    margin-top: 72px;
    justify-content: center;
    width: 100%;
    gap: 12px;
    flex-direction: row;
  }
  svg {
    position: absolute;
    width: 16px;
    height: 12px;
    top: 13px;
    left: 14px;
    fill: ${({ theme }) => theme.color.bg};
    transition: ${({ theme }) => theme.transitions.main};
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
      width: 20px;
      height: 16px;
      top: 16px;
      left: 147px;
      transition: ${({ theme }) => theme.transitions.main};
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}) {
      top: 126px;
      left: 20px;
    }
  }
`;

export const FormInput = styled.input`
  width: 204px;
  height: 38px;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.color.bgLightEl};
  background-color: transparent;
  border-radius: 6px;
  padding-left: 42px;
  padding-right: 38px;
  border: 1px solid ${({ theme }) => theme.color.footerInput};
  outline: transparent;
  transition: ${({ theme }) => theme.transitions.main};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    width: 259px;
    height: 50px;
    padding-left: 51px;
    font-size: 14px;
    line-height: 1.5;
  }
  :hover,
  :focus {
    border: 1px solid ${({ theme }) => theme.color.bgLightEl};
    &::placeholder {
      opacity: 1;
    }
  }
  ::placeholder {
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.color.textSecondary};
    opacity: 0.8;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
      font-size: 14px;
      line-height: 1.5;
    }
  }
`;
export const FormBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 11px 71px;
  gap: 8px;
  width: 204px;
  cursor: pointer;
  height: 38px;
  border-radius: 6px;
  border: none;
  background-color: ${({ theme }) => theme.color.accent};
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.14;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.color.textSecondary};
  transition: ${({ theme }) => theme.transitions.main};
  :hover,
  :focus {
    color: ${({ theme }) => theme.color.textRights};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    width: 171px;
    height: 50px;
  }
`;