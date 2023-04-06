import { useState } from 'react';
import sprite from '../../img/sprite.svg';
import {
  ButtonSelect,
  SelectContainer,
  SelectTitle,
  ButtonsContainer,
  SelectDownContainer,
} from './SearchTypeSelector.styled';

const buttons = ['Title', 'Ingredients'];

export const SearchTypeSelector = ({ title, onChooseVariant }) => {
  const [choose, setChoose] = useState(false);

  const handleToggleSelect = () => {
    setChoose(prevState => !prevState);
  };

  return (
    <SelectContainer>
      <SelectTitle>Search by:</SelectTitle>
      <ButtonsContainer>
        <ButtonSelect type="button" onClick={handleToggleSelect}>
          <span>{title}</span>
          <svg width={14} height={14}>
            <use href={sprite + '#icon-arrow-down'}></use>
          </svg>
        </ButtonSelect>
        {choose && (
          <SelectDownContainer>
            {buttons.map(button => {
              return (
                <li key={button}>
                  <ButtonSelect
                    nonActive
                    type="button"
                    onClick={() => {
                      onChooseVariant(button);
                      handleToggleSelect();
                    }}
                  >
                    {button}
                  </ButtonSelect>
                </li>
              );
            })}
          </SelectDownContainer>
        )}
      </ButtonsContainer>
    </SelectContainer>
  );
};
