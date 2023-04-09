import styled from 'styled-components';
export const Box = styled.div`
  padding: 32px 24px;
  text-align: center;
`
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
  }
`
export const AvatarInput  = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`
export const InputBox = styled.div`
  position: relative;
`
export const Input = styled.input`
  border: 1px solid ${p=>p.theme.color.bgSecondary};
  border-radius: 6px;
  padding-left: 40px;
  width: 100%;
  height: 48px;

  font-size: 14px;
  letter-spacing: -0.02em;
`
export const InputIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);

  width: 18px;
  height: 18px;

`
