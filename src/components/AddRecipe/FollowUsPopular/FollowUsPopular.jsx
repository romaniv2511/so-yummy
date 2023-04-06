import { Link } from 'react-router-dom';
import sprite from '../../../img/sprite.svg';
import { FollowUsPopularContainer } from './FollowUsPopular.styled';

export const FollowUsPopular = () => {
  return (
    <FollowUsPopularContainer>
      <Link to="https://www.facebook.com/">
        <svg width={26} height={26}>
          <use href={sprite + '#icon-facebook'}></use>
        </svg>
      </Link>
      <Link to="https://www.youtube.com/">
        <svg width={26} height={26}>
          <use href={sprite + '#icon-youtube'}></use>
        </svg>
      </Link>
      <Link to="https://twitter.com/">
        <svg width={26} height={26}>
          <use href={sprite + '#icon-twitter'}></use>
        </svg>
      </Link>
      <Link to="https://www.instagram.com/">
        <svg width={26} height={26}>
          <use href={sprite + '#icon-instagram'}></use>
        </svg>
      </Link>
    </FollowUsPopularContainer>
  );
};
