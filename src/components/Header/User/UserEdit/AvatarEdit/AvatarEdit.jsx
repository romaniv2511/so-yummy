import { useState } from 'react';
import { useAuth} from 'hooks/useAuth'
import { AvatarBox, AvatarInput, Label } from './AvatarEdit.styled';

export const AvatarEdit = ({updateAvatar}) => {
  const [avatarPreview, setAvatarPreview] = useState(null);
  const {user} = useAuth();

  const handleAvatarChange = (event) => {
    const avatar = event.target.files[0];
    setAvatarPreview(URL.createObjectURL(avatar));
    updateAvatar(avatar);
  };

  return (
        <AvatarBox>
          <Label htmlFor='avatar'>
            {avatarPreview ?
              <img src={avatarPreview} alt="Avatar preview" /> :
              <img src={user.avatar} alt='avatar'/>}
          </Label>
          <AvatarInput type='file' id='avatar' name='avatar' onChange={handleAvatarChange}/>
        </AvatarBox>
  )
}
