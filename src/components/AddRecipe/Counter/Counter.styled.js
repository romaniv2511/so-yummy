import styled from 'styled-components';

export const CounterButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  margin: 0;
  padding: 0;
  font-size: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.color.borderColor};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.accent};
  }
`;

export const CounterWrap = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid ${({ theme }) => theme.color.borderColor};
  border-radius: 18px;
  padding: 0 4px;
  width: 92px;

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.28;
    color: ${({ theme }) => theme.color.text};
  }
`;
