import styled from 'styled-components';
import {Modal} from '../../../Header.styled';



export const AvatarBox = styled.div`
  border-radius: 50%;
`
export const Label = styled.label`
  position: relative;
  display: inline-block;
  margin-bottom: 54px;
  cursor: pointer;
  & img {
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
