import sprite from 'img/sprite.svg';
import { Button } from './BurgerMenu.styled';
export const BurgerMenu = ({ onClick, color }) => {
  return (
    <div>
      <Button color={color} type="button" onClick={onClick} aria-label="Menu">
        <svg>
          <use href={sprite + '#icon-burger'} />
        </svg>
      </Button>
    </div>
  );
};
