import styled from 'styled-components';
import {Modal} from '../../../Header.styled';
import {IoAddCircleSharp} from 'react-icons/io5'



export const AvatarBox = styled.div`
  border-radius: 50%;
`
export const Label = styled.label`
  position: relative;
  display: inline-block;
  margin-bottom: 54px;
  cursor: pointer;
  & img {
    object-fit: cover;
    border-radius: 50%;
    width: 88px;
    height: 88px;
  }
`
export const AvatarInput  = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;
`

export const AvatarModal = styled(Modal)`
  z-index: 20;
`
export const AddIcon = styled(IoAddCircleSharp)`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 24px;
  height: 24px;

  fill: ${p=> p.theme.color.accent};



`
