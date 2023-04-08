// import userAvatar from 'img/avatar.png';
import { ButtonUser, UserLogoBox } from './UserLogo.styled';
import { useAuth } from '../../../../hooks/useAuth';

export const UserLogo = ({toggleDashboard}) => {
    const { user } = useAuth();
    const {name, avatarURL} = user;
  return (
    <UserLogoBox>
      <ButtonUser type="button" onClick={toggleDashboard}>
        <img src={avatarURL} alt="user" />
        <p>{name}</p>
      </ButtonUser>
    </UserLogoBox>
  );
};
