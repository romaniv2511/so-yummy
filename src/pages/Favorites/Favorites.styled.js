import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Item = styled.li`
  display: flex;
  gap: 14px;
  background-color: #fff;
  padding: 14px;
  border-radius: 8px;
  scale: 1;

  @media (min-width: ${props => props.theme.breakpoints.tab}) {
    gap: 24px;
    padding: 28px 24px;
    transition: ${props => props.theme.transitions.main};
    :hover {
      box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
        rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
      scale: 1.01;
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.desk}) {
    gap: 40px;
    padding: 40px;
  }
`;
