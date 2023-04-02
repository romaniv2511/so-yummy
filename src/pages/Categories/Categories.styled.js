import styled from 'styled-components';

export const TitleCategory = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
  margin-bottom: 60px;
  color: ${props => props.theme.color.title};

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    font-size: 32px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    margin-bottom: 110px;
    font-size: 44px;
  }
`;

export const ButtonsList = styled.div`
  max-width: 343px;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  flex-direction: row;

  gap: 28px;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 32px;
  overflow-x: scroll;

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    max-width: 704px;
    margin-bottom: 50px;
    gap: 55px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    max-width: 1240px;
  }
`;

export const ButtonCategory = styled.button`
  cursor: pointer;
  color: #bdbdbd;
  border: none;
  padding: 0 0 32px 0;
  background-color: transparent;
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  transition: ${props => props.theme.transitions.main};

  &:hover,
  &:focus {
    color: ${props => props.theme.color.accent};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    font-size: 18px;
    padding: 0 0 27px 0;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
  }
`;

export const RecipesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    row-gap: 100px;
    column-gap: 13px;
  }
`;

export const ActiveButton = styled.button`
  cursor: pointer;
  border: none;
  padding: 0 0 32px 0;
  background-color: transparent;
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  color: ${props => props.theme.color.accent};
  border-bottom: 2px solid ${props => props.theme.color.accent};

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    font-size: 18px;
    padding: 0 0 27px 0;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
  }
`;
