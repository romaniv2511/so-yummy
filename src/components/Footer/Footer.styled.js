import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding-top: 35px;
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
`;
