import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    align-items: start;
    text-align: start;
  }
`;

export const Description = styled.div`
  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    gap: 50px;
  }
`;

export const ImgUploadWrap = styled.div`
  margin-bottom: 32px;
  img:hover {
    cursor: pointer;
    transform: scale(1.01);
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    margin-bottom: 0;
  }
`;

export const InputUpload = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;
`;

export const MainWrapDescription = styled.div`
  display: flex;
`;

export const MainWrapIngredients = styled.div`
  margin-top: 44px;
  margin-bottom: 18px;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    margin-top: 100px;
    margin-bottom: 32px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    max-width: 609px;
  }
`;

export const WrapPreparation = styled.div`
  margin-top: 44px;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    margin-top: 100px;
    margin-bottom: 0;
    margin-right: auto;
  }
`;

export const WrapButtonAdd = styled.div`
  margin-right: auto;
`;

export const ButtonAdd = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  right: 25px;
  width: 113px;
  height: 52px;
  background-color: ${props => props.theme.color.bgSecondary};
  border-radius: 24px 44px;
  border: none;
  color: ${props => props.theme.color.bg};
  font-family: inherit;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;

  transition: ${props => props.theme.transitions.main};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.color.accent};
  }
`;
