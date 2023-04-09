import { AvatarBox, AvatarInput, Box, Label, Form, Input, InputIcon, InputBox } from './UserEdit.styled';
import { useAuth } from '../../../../hooks/useAuth';
import { Formik } from 'formik';
import { Button } from '../UserLogout/UserLogout.styled';
import {BiUser} from 'react-icons/bi';
import {MdOutlineMail} from 'react-icons/md';

import avatar from 'img/avatar.png';

export const UserEdit = () => {

  const {user} = useAuth();
  const handleSubmit = data => {
    console.log(data);
  }
  return(
    <Box>
      <AvatarBox>
        <Label htmlFor='avatar'>
          <img src={avatar} alt='avatar'/>
        </Label>
        <AvatarInput type='file' id='avatar'/>
      </AvatarBox>
      <Formik initialValues={{name: '', email: ''}} onSubmit={handleSubmit}>
        <Form>
          <InputBox>
            <Input name="name" placeholder="Jane"/>
            <InputIcon><BiUser/></InputIcon>
          </InputBox>
          <InputBox>
            <Input
              name="email"
              placeholder={user.email}
              type="email"
            />
            <InputIcon><MdOutlineMail/></InputIcon>
          </InputBox>




          <Button
            colorText={p=>p.theme.color.bg}
            bg={p=>p.theme.color.accent}>
              Save changes
          </Button>
        </Form>
      </Formik>
    </Box>
  )
}
