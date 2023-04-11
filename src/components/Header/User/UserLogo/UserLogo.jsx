import userAvatar from 'img/avatar.png';
import { ButtonUser, UserLogoBox, UserName } from './UserLogo.styled';
import { useAuth } from '../../../../hooks/useAuth';

export const UserLogo = ({ toggleDashboard, pageMain }) => {
  const { user } = useAuth();

  return (
    <UserLogoBox>
      <ButtonUser type="button" onClick={toggleDashboard}>

        <img src={user?.avatar ?? userAvatar} alt="user" />
        <UserName main={pageMain}>{user?.name ?? 'user'}</UserName>

      </ButtonUser>
    </UserLogoBox>
  );
};
