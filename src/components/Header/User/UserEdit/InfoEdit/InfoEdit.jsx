import {  useState } from 'react';
import { useAuth } from '../../../../../hooks/useAuth';
import { InfoBox, Input, InputBox, InputIcon } from './InfoEdit.styled';
import { BiUser } from 'react-icons/bi';
import { MdOutlineMail } from 'react-icons/md';

export const InfoEdit = ({updateInfo, info}) => {
  const {user: {name, email}} = useAuth();
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);

  const onChange = (e) => {
    const { name, value } = e.target
    if (name === "name") setNewName(value);
    if (name === "email") setNewEmail(value);
    console.log(info);
    console.log(newName, newEmail);
    updateInfo({name: newName, email: newEmail})
  }

  return (
    <InfoBox>
      <InputBox>
        <Input
          name="name"
          placeholder="Name"
          value={newName}
          onChange={onChange}
        />
        <InputIcon><BiUser/></InputIcon>
      </InputBox>
      <InputBox>
        <Input
          name="email"
          type="email"
          placeholder="email.mail.con"
          value={newEmail}
          onChange={onChange}
        />
        <InputIcon><MdOutlineMail/></InputIcon>
      </InputBox>
    </InfoBox>
  )
}
