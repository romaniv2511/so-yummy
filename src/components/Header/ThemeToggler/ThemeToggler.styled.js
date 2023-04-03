import styled from 'styled-components';

export const ToggleSwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px;
  background: linear-gradient(#ccc, #eee);
  box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1);
  height: 27px;
  width: 61px;
  border-radius: 1em;
  cursor: pointer;
`;
export const Active = styled.div`
  position: relative;
  width: 21px;
  height: 21px;
  background: linear-gradient(180deg, #ffffff 0%, #e8eaea 100%);
  border-radius: 50%;
  left: 0em;
  transition: left 0.3s ease-out;
`;
export const Knob = styled.div`
  position: relative;
  width: 21px;
  height: 21px;
  background: linear-gradient(180deg, #ffffff 0%, #e8eaea 100%);
  border-radius: 50%;
  left: 0em;
  transition: left 0.3s ease-out;
  left: 2em;
`;

// export const Checkbox = styled.input`
//   opacity: 0;
//   position: absolute;
//   left: 0;
//   top: 0;
//   &:checked + label > span {
//     transform: translateX(30px);
//   }
// `;

// export const Label = styled.label`
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 0px 5px;
//   /* gap: 10px; */
//   width: 61px;
//   height: 27px;
//   background: #efefef;
//   box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1);
//   border-radius: 20%;
//   cursor: pointer;
// `;

// export const Switcher = styled.span`
//   background-color: rgb(255, 255, 255);
//   position: absolute;
//   width: 21px;
//   height: 21px;
//   background: linear-gradient(180deg, #ffffff 0%, #e8eaea 100%);
//   border-radius: 50%;
//   filter: drop-shadow(2px 1px 6px rgba(0, 0, 0, 0.25));
//   transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
//     background-color 300ms linear;
// `;
