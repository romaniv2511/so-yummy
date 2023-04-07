import styled from 'styled-components';

export const Box = styled.div`
  padding: 44px 24px;
  @media screen and (min-width: ${p=>p.theme.breakpoints.tab}) {
    padding: 50px 40px;
  }
`
export const Text = styled.p`
  margin-bottom: 24px;
  font-size: 14px;
  letter-spacing: -0.02em;
  text-align: center;
  @media screen and (min-width: ${p=>p.theme.breakpoints.tab}) {
    font-size: 18px;
  }
`

export const ButtonBox = styled.div`
  display: flex;
  gap: 8px;
  @media screen and (min-width: ${p=>p.theme.breakpoints.tab}) {
    gap: 8px;
  }
`

export const Button = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  color: ${p=> p.colorText};
  background-color: ${p=> p.bg};
  @media screen and (min-width: ${p=>p.theme.breakpoints.tab}) {
    height: 60px;
    font-size: 18px;
  }

`
