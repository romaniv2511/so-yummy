import styled from 'styled-components';

export const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    gap: 18px;
  }
`;

export const SelectTitle = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.24px;
  color: ${props => props.theme.color.title};

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    font-size: 14px;
    line-height: 1.29;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const ButtonsContainer = styled.div`
  position: relative;
`;

export const ButtonSelect = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${props => (props.nonActive ? 'auto' : '146px')};
  height: ${props => (props.nonActive ? 'auto' : '34px')};
  padding: ${props => (props.nonActive ? '0' : '8px 14px')};
  border: none;
  background-color: ${props => (props.nonActive ? 'transparent' : '#ececec')};
  color: #000000;
  border-radius: 6px;

  font-family: inherit;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  opacity: 0.5;
  transition: ${({ theme }) => theme.transitions.main};

  svg {
    fill: none;
    stroke: ${props => props.theme.color.accent};
    transition: ${({ theme }) => theme.transitions.main};
    :hover,
    :focus {
      stroke: ${props => props.theme.color.title};
    }
  }

  &:hover,
  &:focus {
    opacity: 0.8;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    font-size: 14px;
    padding: ${props => (props.nonActive ? '0' : '10px 14px')};
    width: ${props => (props.nonActive ? 'auto' : '175px')};
    height: ${props => (props.nonActive ? 'auto' : '41px')};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    padding: ${props => (props.nonActive ? '0' : '14px')};
    width: ${props => (props.nonActive ? 'auto' : '198px')};
    height: ${props => (props.nonActive ? 'auto' : '49px')};
  }
`;

export const SelectDownContainer = styled.ul`
  position: absolute;
  width: 146px;
  top: 34px;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 14px 10px 14px;
  background-color: ${props => props.theme.color.bg};
  border-radius: 0px 0px 6px 6px;
  z-index: 4;

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    width: 175px;
    padding: 10px 14px 14px 14px;
    top: 41px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    width: 198px;
    padding: 14px;
    top: 49px;
  }
`;
