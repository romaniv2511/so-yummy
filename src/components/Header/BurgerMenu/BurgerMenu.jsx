import sprite from 'img/sprite.svg';
import { Button } from './BurgerMenu.styled';
export const BurgerMenu = ({ onClick }) => {
  return (
    <div>
      <Button type="button" onClick={onClick}>
        <svg>
          <use href={sprite + '#icon-burger'} />
        </svg>
      </Button>
    </div>
  );
};
