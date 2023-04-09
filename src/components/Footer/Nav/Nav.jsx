import { Link, NavContainer } from './Nav.styled';

export const Nav = () => {
  return (
    <NavContainer>
      <Link to="/search/?ingredient=">Ingredients</Link>
      <Link to="/add-recipes">Add recipes</Link>
      <Link to="/my-recipes">My recipes</Link>
      <Link to="/favorites">Favorite</Link>
      <Link to="/shopping-list">Shopping list</Link>
    </NavContainer>
  );
};
