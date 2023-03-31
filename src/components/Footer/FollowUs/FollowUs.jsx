import sprite from '../../../img/sprite.svg';
import { FollowUsContainer, Link } from './FollowUs.styled';

export const FollowUs = () => {
  return (
    <FollowUsContainer>
      <Link to="https://www.facebook.com/">
        <svg width={20} height={20}>
          <use href={sprite + '#icon-facebook'}></use>
        </svg>
      </Link>
      <Link to="https://www.youtube.com/">
        <svg width={20} height={20}>
          <use href={sprite + '#icon-youtube'}></use>
        </svg>
      </Link>
      <Link to="https://twitter.com/">
        <svg width={20} height={20}>
          <use href={sprite + '#icon-twitter'}></use>
        </svg>
      </Link>
      <Link to="https://www.instagram.com/">
        <svg width={20} height={20}>
          <use href={sprite + '#icon-instagram'}></use>
        </svg>
      </Link>
    </FollowUsContainer>
  );
};
