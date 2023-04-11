import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

export const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 330px;
  max-height: 100%;
  background-color: ${p => p.theme.color.bgPagination};
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  @media screen and (min-width: ${p => p.theme.breakpoints.tab}) {
    width: 480px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desk}) {
    width: 500px;
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0;
  cursor: pointer;
  background: transparent;
  color: ${props => props.theme.color.btnColorSecondary};
  transition: ${props => props.theme.transitions.main};

  &:hover,
  &:focus {
    color: ${props => props.theme.color.accent};
  }
`;
