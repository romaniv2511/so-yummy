import { useState } from 'react';
import { useAuth } from 'hooks/useAuth';
import { AddIcon, AvatarBox, AvatarInput, Label } from './AvatarEdit.styled';

import userAvatar from 'img/avatar.png';

export const AvatarEdit = ({ updateAvatar }) => {
  const [avatarPreview, setAvatarPreview] = useState(null);
  const { user } = useAuth();

  const handleAvatarChange = event => {
    const avatar = event.target.files[0];
    setAvatarPreview(URL.createObjectURL(avatar));
    console.log(avatar);
    updateAvatar(avatar);
  };

  return (
    <AvatarBox>
      <Label htmlFor="avatar">
        {avatarPreview ? (
          <img src={avatarPreview} alt="Avatar preview" />
        ) : (
          <img src={user?.avatar ?? userAvatar} alt="avatar" />
        )}
        <AddIcon />
      </Label>
      <AvatarInput
        type="file"
        id="avatar"
        name="avatar"
        onChange={handleAvatarChange}
      />
    </AvatarBox>
  );
};
