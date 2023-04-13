import styled from 'styled-components';

export const InputDescriptionMainWrap = styled.div`
  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    margin-top: 0;
  }
`;

export const InputDescriptionWrap = styled.div`
  position: relative;
  margin-bottom: 24px;
`;

export const InputDescription = styled.input`
  padding-bottom: 19px;
  width: 343px;
  height: 43px;
  border: none;
  border-bottom: 1px solid rgba(126, 126, 126, 0.5);
  background-color: transparent;
  color: ${({ theme }) => theme.color.textPreparation};

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    font-weight: ${({ theme }) => theme.fontWeights.s};
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.02em;
  }
`;

export const SelectDescription = styled.select`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background-color: ${props => props.theme.color.select};
  color: ${props => props.theme.color.secondaryTextColor};

  & option {
    background-color: ${props => props.theme.color.bgSelectColor};
  }
`;

export const Option = styled.optgroup`
  width: 123px;
  height: 144px;
  display: inline-block;
  padding: 8px 14px;
  box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
  border-radius: 6px;

  overflow-y: auto;
`;

export const StyledOption = styled.option.attrs(props => ({
  value: props.value,
}))`
  color: ${props => props.theme.color.secondaryTextColor};
  display: inline;
  opacity: 0.5;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  margin-bottom: 4px;
`;
