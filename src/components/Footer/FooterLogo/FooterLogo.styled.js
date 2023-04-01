import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  letter-spacing: 0.015em;
  color: ${({ theme }) => theme.color.logo};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    font-size: 28px;
    justify-content: start;
  }
  img {
    width: 32px;
    height: 32px;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
      width: 44px;
      height: 44px;
    }
  }
`;
export const FooterAdvantagesContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}) {
    width: 418px;
  }
`;
export const FooterAdvantagesList = styled.ul`
  list-style-type: disc;
  padding: 0;
  margin: 0;
  margin-top: 24px;
  padding-left: 30px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.color.textSecondary};
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 400px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}) {
    margin-top: 40px;
    gap: 12px;
    width: 458px;
    font-size: 18px;
    line-height: 1.33;
  }
`;
