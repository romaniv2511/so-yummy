import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { ButtonClose, ModalBox, Overlay } from './UserModal.styled';
import {RxCross2} from 'react-icons/rx'

const modalRoot = document.querySelector('#modal-root');
export const UserModal = ({children, onClose}) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
  const handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return createPortal(
    <Overlay onClick={handleBackDropClick}>
      <ModalBox>
        <ButtonClose onClick={onClose}>
          <RxCross2 width={24} height={24} fill={p=>p.theme.color.title}/>
        </ButtonClose>
        {children}
      </ModalBox>
    </Overlay>,
    modalRoot
  )
}
