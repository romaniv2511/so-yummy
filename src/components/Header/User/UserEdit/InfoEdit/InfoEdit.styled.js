import styled from 'styled-components';

export const InfoBox = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  
  @media screen and (min-width: ${p => p.theme.breakpoints.tab}) {
    margin-bottom: 32px;
    gap: 32px;
  }
}
`;
export const InputBox = styled.div`
  position: relative;
`;
export const Input = styled.input`
  border: 1px solid ${p => p.theme.color.bgSecondary};
  border-radius: 6px;
  padding-left: 40px;
  width: 100%;
  height: 48px;
  background-color: transparent;
  color: ${props => props.theme.color.primaryTextColor};
  font-size: 14px;
  letter-spacing: -0.02em;

  @media screen and (min-width: ${p => p.theme.breakpoints.tab}) {
    padding-left: 52px;
    font-size: 18px;
  }
`;
export const InputIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);

  width: 18px;
  height: 18px;
  @media screen and (min-width: ${p => p.theme.breakpoints.tab}) {
    left: 18px;
  }
`;
