import styled from 'styled-components';
export const ContainerRecipe = styled.section`
  padding-top: 83px;
`;
export const TableRecipe = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  height: 42px;
  padding: 0 14px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.color.textSecondary};
  background-color: ${({ theme }) => theme.color.accent};
  p {
    font-weight: 600;
    font-size: 10px;
    line-height: 1.5;
    letter-spacing: 0.03em;
  }
  span {
    margin-left: 16px;
  }
`;
