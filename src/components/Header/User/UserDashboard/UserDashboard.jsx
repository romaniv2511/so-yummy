import { useEffect } from 'react';
import {
  ButtonEdit,
  ButtonLogout,
  EditBox,
  EditText,
  PannelBox,
} from './UserDashdoard.styled';
import { FiEdit2 } from 'react-icons/fi';
import { AiOutlineArrowRight } from 'react-icons/ai';

export const UserDashboard = ({ onClose, onLogout, onEdit }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  return (
    <PannelBox>
      <EditBox>
        <EditText>Edit profile</EditText>
        <ButtonEdit onClick={onEdit}>
          <FiEdit2 style={{ color: 'currentcolor' }} />
        </ButtonEdit>
      </EditBox>
      <ButtonLogout onClick={onLogout}>
        Log Out <AiOutlineArrowRight />
      </ButtonLogout>
    </PannelBox>
  );
};
