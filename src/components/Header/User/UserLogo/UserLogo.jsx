// import userAvatar from 'img/avatar.png';
import { ButtonUser, UserLogoBox, UserName } from './UserLogo.styled';
import { useAuth } from '../../../../hooks/useAuth';

export const UserLogo = ({ toggleDashboard, color }) => {
  const { user } = useAuth();

  return (
    <UserLogoBox>
      <ButtonUser type="button" onClick={toggleDashboard}>
        <img src={user?.avatar || ''} alt="user" />
        <UserName main={color}>{user?.name || 'user'}</UserName>
      </ButtonUser>
    </UserLogoBox>
  );
};
