import styled from 'styled-components';

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
  color: ${props => props.theme.color.secondaryTextColor};
  border: ${({ theme }) => theme.color.borderSelect};
  background-color: ${({ theme }) => theme.color.bgButtonSelect};

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    max-width: 505px;
  }
  &:focus-within {
    outline: none;
  }
`;
