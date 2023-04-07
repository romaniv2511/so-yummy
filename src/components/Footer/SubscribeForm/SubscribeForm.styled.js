import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 32px;
  display: flex;
  position: relative;
  flex-direction: column;
  width: 204px;
  gap: 8px;
  .icon {
    position: absolute;
    top: 13px;
    left: 14px;
    width: 16px;
    height: 12px;
    fill: ${({ color }) => color};
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
      width: 20px;
      height: 16px;
      top: 16px;
      left: 120px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}) {
      top: 126px;
      left: 20px;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    margin-top: 72px;
    justify-content: center;
    width: 100%;
    gap: 12px;
    flex-direction: row;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}) {
    margin-top: 0;
    gap: 0;
    flex-direction: column;
    width: 339px;
  }
  .error {
    position: absolute;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 21px;
    color: #e74a3b;
    top: -20px;
    left: 0;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
      font-size: 14px;
      top: -23px;
      left: 103px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}) {
      top: 82px;
      left: 0;
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
  border: 1px solid ${({ borderColor }) => borderColor};
  outline: transparent;
  transition: ${({ theme }) => theme.transitions.main};
  svg {
    position: absolute;
    width: 16px;
    height: 12px;
    top: 0;
    top: 13px;
    left: 14px;
    fill: ${({ theme }) => theme.color.bg};
    transition: ${({ theme }) => theme.transitions.main};
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
      width: 20px;
      height: 16px;
      top: 18px;
      transition: ${({ theme }) => theme.transitions.main};
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}) {
      top: 20px;
    }
  }
  :-webkit-autofill {
    transition: background-color 250s linear, color 250s linear;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    width: 259px;
    height: 50px;
    padding-left: 51px;
    font-size: 14px;
    line-height: 1.5;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}) {
    width: 338px;
    padding-left: 51px;
    height: 59px;
  }
  :hover,
  :focus {
    border: 1px solid 1px solid ${({ color }) => color};
    &::placeholder {
      opacity: 1;
    }
  }
  &:hover ~ svg.icon use {
    opacity: 1;
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
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    width: 171px;
    height: 50px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}) {
    margin-top: 16px;
    height: 60px;
    font-size: 16px;
    width: 100%;
    line-height: 1.13;
  }
  :hover:not([disabled]),
  :focus:not([disabled]) {
    color: ${({ theme }) => theme.color.textRights};
  }
  &[disabled] {
    opacity: 0.7;
  }
`;
export const FormWrapText = styled.div`
  margin-bottom: 28px;
  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.5;
    color: ${({ theme }) => theme.color.textSecondary};
    margin-bottom: 14px;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.color.textSecondary};
  }
`;
export const ErrorEmail = styled.p`
  color: #e74a3b;
  margin-top: 8px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
`;
export const FlagForInput = styled.div`
  position: absolute;
  top: 11px;
  right: 12px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;

  @media screen and (min-width: 768px) {
    top: 15px;
    right: 302px;
  }

  @media screen and (min-width: 1440px) {
    top: 126px;
    right: 12px;
  }
`;
