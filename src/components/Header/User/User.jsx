import { UserLogo } from './UserLogo/UserLogo';
import { UserDashboard } from './UserDashboard/UserDashboard';
import { UserModal } from './UserModal/UserModal';
import { useState } from 'react';
import { Box } from './User.styled';
import { UserLogout } from './UserLogout/UserLogout';


export const User = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalName, setModalName] = useState('edit')
  const toggleDashboard = () => {
    setIsDashboardOpen(current=> !current);
  }
  const toggleModal = () => {
    setIsModalOpen(current=> !current);

  }
  const openEditUser = () =>{
    toggleModal();
    toggleDashboard();
    setModalName('edit')
  }
  const openLogoutApproval = () =>{
    toggleModal();
    toggleDashboard();
    setModalName('logout')
  }
  return (
    <Box>
      <UserLogo toggleDashboard={toggleDashboard} />

      {isDashboardOpen && <UserDashboard onClose={toggleDashboard} onLogout={openLogoutApproval} onEdit={openEditUser}/>}
      {isModalOpen &&
        <UserModal onClose={toggleModal}>
          if(modalName === 'logout')
          <UserLogout/>
        </UserModal>
      }

    </Box>
  )
}