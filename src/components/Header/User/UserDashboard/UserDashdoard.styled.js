import styled from 'styled-components';

export const PannelBox = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  border: 1px solid ${p=>p.theme.color.accent};
  border-radius: 8px;
  padding: 18px;
  width: 160px;
  background-color: ${p=> p.theme.color.bg};
  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
  border: 0;
}
`;
export const EditBox = styled.div`
  display: flex;
  justify-content: space-between;
`
export const EditText = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.6;
`
export const ButtonEdit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 4px;
  cursor: pointer;
  background: transparent;
`
export const ButtonLogout = styled.button`
  margin-top: 28px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 44px;
  border-radius: 24px 44px;
  border: none;
  color: ${props => props.theme.color.bg};
  background-color: ${props => props.theme.color.accent};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  cursor: pointer;
  transition: ${props => props.theme.transitions.main};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.color.bgSecondary};
  }


  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    margin-top: 32px;
  }

`;

