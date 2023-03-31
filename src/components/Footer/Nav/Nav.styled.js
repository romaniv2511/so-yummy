import styled from 'styled-components';

// Добавити навігацію коли все буде готово

export const Link = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.color.textSecondary};
  transition: ${({ theme }) => theme.transitions.main};
`;

export const NavContainer = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
