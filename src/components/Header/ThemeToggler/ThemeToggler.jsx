import { useState } from 'react';
import { ToggleSwitch, Knob } from './ThemeToggler.styled';

export const ThemeToggler = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);
  const handleClick = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <ToggleSwitch toggle={isToggleOn} onClick={handleClick}>
      {isToggleOn ? <Knob active /> : <Knob />}
    </ToggleSwitch>
  );
};
