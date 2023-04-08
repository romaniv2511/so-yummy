import styled from 'styled-components';

export const RecipeBtn = styled.button`
  border: 1px solid ${({ theme }) => theme.color.accent};
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.textRights};
  padding: 10px 18px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  background-color: transparent;
  outline: none;
  border-radius: 30px 80px;
  text-align: center;
  transition: ${({ theme }) => theme.transitions.main};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    font-size: 16px;
    padding: 18px 44px;
    border: 2px solid ${({ theme }) => theme.color.accent};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}) {
  }

  :hover,
  :focus {
    transition: ${({ theme }) => theme.transitions.main};
    background: ${({ theme }) => theme.color.accent};
    color: ${({ theme }) => theme.color.textSecondary};
  }
`;
