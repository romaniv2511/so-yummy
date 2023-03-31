import { Link, NavContainer } from './Nav.styled';

export const Nav = () => {
  return (
    <NavContainer>
      {/* Добавити переадресацію на кожен Link */}
      <Link>Ingredients</Link>
      <Link>Add recipes</Link>
      <Link>My recipes</Link>
      <Link>Favorite</Link>
      <Link>Shopping list</Link>
    </NavContainer>
  );
};
