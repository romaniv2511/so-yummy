import styled from 'styled-components';

export const Wrap = styled.div`
  padding-top: 50px;
  padding-bottom: 72px;
`;

export const Title = styled.h2`
  margin-bottom: 72px;
  color: ${({ theme }) => theme.color.title};
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ImgUploadWrap = styled.div`
  margin-bottom: 32px;
`;

export const InputUpload = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;
`;

export const InputDescriptionWrap = styled.div`
  position: relative;
  margin-top: 24px;
  &: first-child {
    margin-top: 0;
  }
`;

export const InputDescription = styled.input`
  padding-bottom: 19px;
  width: 343px;
  border: none;
  border-bottom: 1px solid grey;
  background: transparent;
`;

export const SelectDescription = styled.select`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: transparent;
`;

export const MainWrapIngredients = styled.div`
  margin-top: 44px;
  width: 100%;
`;

export const WrapIngredients = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
`;

export const TitleIngredients = styled.h2`
  color: ${({ theme }) => theme.color.text};
  font-weight: ${({ theme }) => theme.fontWeights.l};
`;

export const InputIngredientsWrap = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InputIngredients = styled.input`
  margin-right: 14px;
  height: 53px;
  padding-left: 16px;
  border: none;
  background: #f5f5f5;
  border-radius: 6px;
`;

export const SelectIngredients = styled.select`
  height: 53px;
  border: none;
  background: #f5f5f5;
  border-radius: 6px;
`;

export const WrapPreparation = styled.div`
  margin-top: 44px;

  width: 100%;
`;

export const TitlePreparation = styled.h2`
  margin-bottom: 24px;
  color: ${({ theme }) => theme.color.text};
  font-weight: ${({ theme }) => theme.fontWeights.l};
  text-align: start;
`;

export const TextAreaPreparation = styled.textarea`
  margin-bottom: 18px;
  padding-top: 10px;
  padding-left: 16px;
  width: 100%;
`;

export const WrapButtonAdd = styled.div`
  margin-right: auto;
`;

export const ButtonAdd = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  /* position: absolute; */
  /* top: 0; */
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
