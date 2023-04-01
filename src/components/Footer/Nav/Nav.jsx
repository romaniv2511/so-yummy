import { Link, NavContainer } from './Nav.styled';

export const Nav = () => {
  return (
    <NavContainer>
      {/* Добавити переадресацію на кожен Link */}
      <Link to="/">Ingredients</Link>
      <Link to="/">Add recipes</Link>
      <Link to="/">My recipes</Link>
      <Link to="/">Favorite</Link>
      <Link to="/">Shopping list</Link>
    </NavContainer>
  );
};
