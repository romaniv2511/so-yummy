import styled from 'styled-components';

export const ToggleSwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px;
  background: ${({ toggle }) =>
    toggle ? 'linear-gradient(#ccc, #eee)' : 'rgba(139, 170, 54, 1)'};
  box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1);
  height: 27px;
  width: 61px;
  border-radius: 1em;
  cursor: pointer;
`;

export const Knob = styled.div`
  position: relative;
  width: 21px;
  height: 21px;
  background: linear-gradient(180deg, #ffffff 0%, #e8eaea 100%);
  border-radius: 50%;
  left: 0em;
  transition: left 0.3s ease-out;
  left: ${props => (props.active ? '0em' : '2em')};
`;
