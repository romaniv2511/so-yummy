import userAvatar from 'img/avatar.png';
import { ButtonUser } from './UserLogo.styled';

export const UserLogo = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <div>
      <ButtonUser type="button">
        <img src={userAvatar} alt="user" />
        <p>user</p>
      </ButtonUser>
    </div>
  );
};
