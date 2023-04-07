import styled from 'styled-components';

export const Box = styled.div`
  padding: 44px 24px;
`
export const Text = styled.p`
  margin-bottom: 24px;
  font-size: 14px;
  letter-spacing: -0.02em;
  text-align: center;
`

export const ButtonBox = styled.div`
  display: flex;
  gap: 16px;
`

export const Button = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 6px;
  color: ${p=> p.color};
  background-color: ${p=> p.bg};


`
