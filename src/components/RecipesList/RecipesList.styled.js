import styled from 'styled-components';

export const RecipesListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-bottom: 40px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
    margin-bottom: 50px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    row-gap: 100px;
    column-gap: 13px;
  }
`;
