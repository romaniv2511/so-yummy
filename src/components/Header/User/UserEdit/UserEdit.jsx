import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAvatar, updateInfo } from 'redux/auth/authOperations';

import {  Box, Form } from './UserEdit.styled';
import { Button } from '../UserLogout/UserLogout.styled';
import { AvatarEdit } from './AvatarEdit/AvatarEdit';
import { InfoEdit } from './InfoEdit/InfoEdit';
import { useAuth } from '../../../../hooks/useAuth';
import { LoaderWithoutMargin } from '../../../Loader/LoaderWithoutMargin';



export const UserEdit = () => {
  const [isNewAvatar, setIsNewAvatar] = useState(false);
  const [isNewInfo, setIsNewInfo]= useState(false);
  useEffect(()=> {
    setIsNewAvatar(false);
    setIsNewInfo(false);
  }, [])

  const dispatch = useDispatch();
  const {isLoading} = useAuth();

  const avatarFormData = new FormData();
  const changeAvatar = (avatar) => {
    avatarFormData.append('avatar', avatar);
    setIsNewAvatar(true);
  }
  const changeInfo = () => {
    setIsNewInfo(true);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(isNewAvatar) dispatch(updateAvatar(avatarFormData));
    if(isNewInfo) {
      const updatedInfo = {
        name: e.target.name.value,
        email: e.target.email.value,
      }
      dispatch(updateInfo(updatedInfo))
    };
  }
  return(
    <Box>
      <Form onSubmit={handleSubmit}>
        <AvatarEdit updateAvatar={changeAvatar}/>
        <InfoEdit  updateInfo={changeInfo}/>
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
