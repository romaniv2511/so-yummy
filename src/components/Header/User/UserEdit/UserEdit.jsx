import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAvatar, updateInfo } from 'redux/auth/authOperations';

import {  Box, Form } from './UserEdit.styled';
import { Button } from '../UserLogout/UserLogout.styled';
import { AvatarEdit } from './AvatarEdit/AvatarEdit';
import { InfoEdit } from './InfoEdit/InfoEdit';
import { useAuth } from '../../../../hooks/useAuth';
import { LoaderWithoutMargin } from '../../../Loader/LoaderWithoutMargin';



export const UserEdit = () => {
  const [newAvatar, setNewAvatar] = useState(null);
  const [newInfo, setNewInfo]= useState(null);

  const dispatch = useDispatch();
  const {isLoading} = useAuth();
  const changeAvatar = () => {
    const formData = new FormData();
    formData.append('avatar', newAvatar)
    dispatch(updateAvatar(formData));
  }
  const changeInfo = () => {
    dispatch(updateInfo(newInfo));
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(newAvatar) changeAvatar();
    if(newInfo) changeInfo();
  }
  return(
    <Box>
      <Form onSubmit={handleSubmit}>
        <AvatarEdit updateAvatar={(avatar)=> setNewAvatar(avatar)}/>
        <InfoEdit  info={newInfo} updateInfo={(info)=> setNewInfo(info)}/>
        {isLoading
          ? <LoaderWithoutMargin/>
          : <Button
              colorText={p=>p.theme.color.bg}
              bg={p=>p.theme.color.accent}>
              Save changes
            </Button>}
      </Form>
    </Box>
  )
}
