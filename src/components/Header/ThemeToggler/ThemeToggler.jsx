import { useState } from 'react';
import { ToggleSwitch, Active, Knob } from './ThemeToggler.styled';

export const ThemeToggler = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);
  const handleClick = () => {
    setIsToggleOn(!isToggleOn);
  };
  return (
    <ToggleSwitch onClick={handleClick} className="ToggleSwitch">
      {isToggleOn ? <Active /> : <Knob />}
    </ToggleSwitch>
  );
};
