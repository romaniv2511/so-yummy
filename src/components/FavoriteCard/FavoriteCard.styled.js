import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  gap: 14px;
  background-color: #fff;
  padding: 14px;
  border-radius: 8px;
  @media (min-width: ${props => props.theme.breakpoints.tab}) {
    gap: 24px;
    padding: 28px 24px;
  }
  @media (min-width: ${props => props.theme.breakpoints.desk}) {
    gap: 40px;
    padding: 40px;
  }
`;

export const ImgBox = styled.div`
  display: flex;
  object-fit: cover;
  & img {
    border-radius: 8px;
    width: 124px;
    height: 124px;
    @media (min-width: ${props => props.theme.breakpoints.tab}) {
      width: 228px;
      height: 232px;
    }
    @media (min-width: ${props => props.theme.breakpoints.desk}) {
      width: 318;
      height: 324;
    }
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 8px;
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: #23262a;
  flex-grow: 1;
  @media (min-width: ${props => props.theme.breakpoints.tab}) {
    font-size: 14px;
    line-height: 1.29;
  }
  @media (min-width: ${props => props.theme.breakpoints.desk}) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const RecipeDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
export const Title = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.24px;
  color: ${p => p.theme.color.text};
  margin-bottom: 14px;
  @media (min-width: ${props => props.theme.breakpoints.tab}) {
    font-size: 24px;
    margin-bottom: 18px;
  }
  @media (min-width: ${props => props.theme.breakpoints.desk}) {
    font-size: 24px;
    margin-bottom: 30px;
  }
`;

export const ElementWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  @media (min-width: ${props => props.theme.breakpoints.tab}) {
    align-items: flex-end;
  }
`;
export const Time = styled.span`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: -0.24px;
  color: ${p => p.theme.color.text};
  @media (min-width: ${props => props.theme.breakpoints.tab}) {
    display: flex;
    font-size: 14px;
    line-height: 1.43;
  }
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${p => p.theme.color.bgAccentEl};
  & svg {
    stroke: currentColor;
    fill: transparent;
    width: 14px;
    height: 14px;
    @media (min-width: ${props => props.theme.breakpoints.tab}) {
      width: 22px;
      height: 22px;
    }
    @media (min-width: ${props => props.theme.breakpoints.desk}) {
      width: 24px;
      height: 24px;
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.tab}) {
    padding: 8px;
    width: 38px;
    height: 38px;
  }
  @media (min-width: ${props => props.theme.breakpoints.desk}) {
    padding: 10px;
    width: 44px;
    height: 44px;
  }
`;
export const ButtonSee = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 138px;
  height: 45px;
  background-color: ${props => props.theme.color.bgSecondary};
  border-radius: 24px 44px;
  border: none;
  color: ${props => props.theme.color.bg};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;

  transition: ${props => props.theme.transitions.main};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.color.accent};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    font-size: 16px;
    width: 160px;
    height: 54px;
  }
`;
