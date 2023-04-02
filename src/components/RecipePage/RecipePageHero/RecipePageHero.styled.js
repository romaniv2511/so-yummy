import styled from 'styled-components';

export const RecipePageHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-repeat: no-repeat;
  margin-bottom: 32px;
  padding-top: 144px;
  padding-bottom: 90px;
  height: 455px;
  background-size: 100%;
`;

export const RecipePageHeroTitle = styled.title`
  display: block;
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.3;
  margin-bottom: 18px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.color.accent};
  max-width: 330px;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-y: clip;
`;
export const RecipePageHeroText = styled.p`
  font-weight: 400;
  text-align: center;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  width: 303px;
  margin-bottom: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-y: clip;
`;
export const RecipePageHeroCookingTime = styled.div`
  display: flex;
  color: #23262a;
  height: 14px;
  margin-top: 42px;
  letter-spacing: -0.24px;
  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;
  align-items: center;
  & svg {
    display: inline-block;
    margin-right: 5px;
    width: 14px;
    height: 14px;
    stroke: black;
  }
`;
