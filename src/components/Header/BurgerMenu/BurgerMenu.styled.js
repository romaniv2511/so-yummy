import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0;
  cursor: pointer;
  background: transparent;
  transition: ${p => p.theme.transitions.main};

  & svg {
    width: 32px;
    height: 32px;
    stroke: ${p => p.theme.color.btnColorSecondary};
    fill: transparent;

    @media (min-width: ${props => props.theme.breakpoints.tab}) {
      width: 32px;
      height: 32px;
    }
  }
  &:hover svg,
  &:focus svg {
    stroke: ${p => p.theme.color.accent};
  }
`;
