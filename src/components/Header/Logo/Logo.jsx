import sprite from 'img/sprite.svg';
import { Link, LogoContainer } from './Logo.styled';

export const Logo = ({ onClick }) => {
  //   const { isLoggedIn } = useAuth();

  return (
    <LogoContainer>
      <Link to="/" onClick={onClick}>
        <svg>
          <use href={sprite + '#icon-logo-1'} />
        </svg>
      </Link>
    </LogoContainer>
  );
};
