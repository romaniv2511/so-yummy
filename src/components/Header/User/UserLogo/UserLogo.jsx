// import userAvatar from 'img/avatar.png';
import { ButtonUser, UserLogoBox } from './UserLogo.styled';
import { useAuth } from '../../../../hooks/useAuth';

export const UserLogo = ({toggleDashboard}) => {
    const { user } = useAuth();
  return (
    <UserLogoBox>
      <ButtonUser type="button" onClick={toggleDashboard}>
        <img src={user.avatar} alt="user" />
        <p>{user.name}</p>
      </ButtonUser>
    </UserLogoBox>
  );
};
