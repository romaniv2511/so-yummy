import { ToggleSwitch, Knob } from './ThemeToggler.styled';

export const ThemeToggler = ({ onToggle, isToggle }) => {
  return (
    <ToggleSwitch toggle={!isToggle} onClick={onToggle}>
      {isToggle ? <Knob /> : <Knob active />}
    </ToggleSwitch>
  );
};
