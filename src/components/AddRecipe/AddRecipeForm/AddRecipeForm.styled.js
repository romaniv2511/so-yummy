import styled from 'styled-components';
// import { IoCloseOutline } from 'react-icons/io5';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    align-items: start;
    text-align: start;
  }
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

// export const WrapIngredients = styled.div`
//   margin-bottom: 24px;
//   display: flex;
//   justify-content: space-between;
//   @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
//     margin-bottom: 32px;
//   }
// `;

// export const TitleIngredients = styled.h3`
//   color: ${({ theme }) => theme.color.text};
//   font-weight: ${({ theme }) => theme.fontWeights.l};
//   @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
//     font-size: 24px;
//     line-height: 1;
//     letter-spacing: -0.24px;
//   }
// `;

// export const InputIngredientsWrap = styled.div`
//   margin-top: 18px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// export const InputIngredients = styled.input`
//   margin-right: 14px;
//   max-width: 194px;
//   height: 53px;
//   padding-left: 16px;
//   border: none;
//   background: ${({ theme }) => theme.color.gbCancel};
//   border-radius: 6px;
//   @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
//     margin-right: 32px;
//     max-width: none;
//     width: 398px;
//     height: 59px;
//     padding-left: 18px;
//   }
// `;

// export const SelectIngredients = styled.select`
//   height: 53px;
//   border: none;
//   background: ${({ theme }) => theme.color.gbCancel};
//   border-radius: 6px;
//   @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
//     width: 97px;
//     height: 59px;
//     text-align: center;
//   }
// `;

// export const IoCloseOutline = styled(IoCloseOutline)``;

export const WrapPreparation = styled.div`
  margin-top: 44px;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    margin-top: 100px;
    margin-bottom: 0;
    margin-right: auto;
  }
`;

export const TitlePreparation = styled.h3`
  margin-bottom: 24px;
  color: ${({ theme }) => theme.color.text};
  font-weight: ${({ theme }) => theme.fontWeights.l};
  text-align: start;
  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    margin-bottom: 32px;
    font-size: 24px;
    line-height: 1;
    letter-spacing: -0.24px;
  }
`;

export const TextAreaPreparation = styled.textarea`
  padding-top: 10px;
  padding-left: 16px;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    max-width: 505px;
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
