import { useMediaQuery } from 'react-responsive';
import { Link, Nav } from './Navigation.styled';
import sprite from 'img/sprite.svg';

export const Navigation = ({ onClick, color }) => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1440px)',
  });
  return (
    <Nav colorProp={color}>
      <Link to="/categories/Beef" onClick={onClick}>
        Categories
      </Link>
      <Link to="/add-recipes" onClick={onClick}>
        Add recipes
      </Link>
      <Link to="/my-recipes" onClick={onClick}>
        My recipes
      </Link>
      <Link to="/favorites" onClick={onClick}>
        Favorites
      </Link>
      <Link to="/shopping-list" onClick={onClick}>
        Shopping list
      </Link>
      <Link to="/search" onClick={onClick}>
        <svg>
          <use href={sprite + '#icon-search-1'} />
        </svg>
        {!isDesktop && <span>Search</span>}
      </Link>
    </Nav>
  );
};
