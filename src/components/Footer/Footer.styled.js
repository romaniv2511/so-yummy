import styled from 'styled-components';

export const FooterContainer = styled.footer`
  /* padding-top: 35px; */
  width: 100%;
`;
export const FooterBg = styled.div`
  background-color: ${({ theme }) => theme.color.bgSecondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 28px;
  padding-bottom: 18px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    text-align: left;
    padding-top: 50px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}) {
    text-align: left;
    padding-top: 64px;
    padding-left: 100px;
    padding-right: 100px;
    padding-bottom: 50px;
  }
`;
export const FooterWrapTab = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    display: flex;
    gap: 175px;
    width: 100%;
    justify-content: center;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}) {
    margin-right: 250px;
    gap: 159px;
  }
`;
export const FooterWrapDesk = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}) {
    display: flex;
  }
`;
