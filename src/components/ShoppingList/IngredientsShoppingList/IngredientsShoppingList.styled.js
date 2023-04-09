import styled from 'styled-components';
export const TableList = styled.ul`
  width: 100%;
  font-family: 'Poppins';
  margin: 0 0 100px 0;
  @media screen and (min-width: 769px) {
    margin: -25px 0 195px 0;
  }
`;
export const TableItem = styled.li`
  display: flex;
  padding: 15px 10px;
  justify-content: start;
  align-items: start;
  border-bottom: 1px solid rgb(224, 224, 224);
  gap: 24px;
  &:first-of-type {
    font-weight: 600;
    font-size: 12px;
    line-height: calc(18 / 12);
    height: 40px;
    padding: 10px;
    background-color: ${({ theme }) => theme.color.accent};
    letter-spacing: 0.03em;
    color: ${({ theme }) => theme.color.bg};
    align-items: center;
    border-radius: 10px;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
      gap: 80px;
      font-size: 18px;
      height: 60px;
      padding: 20px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}) {
      height: 60px;
      font-size: 18px;
      padding: 0 40px;
      gap: 140px;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    gap: 80px;
    padding: 45px 20px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}) {
    padding: 50px 40px;
    gap: 140px;
  }
`;
export const ContainerImage = styled.div`
  height: 60px;
  margin-right: 10px;
  border-radius: 10px;
  width: 60px;
  background-color: ${({ theme }) => theme.color.bgAccentEl};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    height: 95px;
    width: 95px;
    margin-right: 15px;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

export const TableNameTitle = styled.div`
  display: flex;
  width: 225px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    width: 450px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}) {
    width: 900px;
  }
`;

export const TableTitle = styled.div`
  text-align: center;
`;

export const ItemName = styled.p`
  line-height: calc(24 / 16);
  font-weight: 500;
  font-size: 10px;
  color: ${({ theme }) => theme.color.text};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    font-size: 16px;
  }
`;

export const ContainerItemNumber = styled.p`
  min-width: 40px;
  padding: 4px 4px;
  background-color: ${({ theme }) => theme.color.accent};
  font-size: 10px;
  border-radius: 10px;
  font-weight: 600;
  line-height: calc(27 / 18);
  color: ${({ theme }) => theme.color.textSecondary};
  text-align: center;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    font-size: 18px;
    min-width: 78px;
  }
`;

export const BtnItemRemove = styled.button`
  width: 54px;
  height: 14px;
  padding: 0 20px;
  stroke: ${({ theme }) => theme.color.text};
  background-color: inherit;
  border: none;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.main};
  @media screen and (min-width: 769px) {
    padding: 0 30px;
    width: 80px;
    height: 20px;
    &:hover {
      fill: ${({ theme }) => theme.color.accent};
      stroke: ${({ theme }) => theme.color.accent};
      transform: rotate(-0.25turn);
    }
  }
`;
