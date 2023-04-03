import sprite from 'img/sprite.svg';
import { Link } from './Logo.styled';

export const Logo = ({ onClick }) => {
  //   const { isLoggedIn } = useAuth();

  return (
    <div>
      <Link to="/" onClick={onClick}>
        <svg>
          <use href={sprite + '#icon-logo-1'} />
        </svg>
      </Link>
    </div>
  );
};
