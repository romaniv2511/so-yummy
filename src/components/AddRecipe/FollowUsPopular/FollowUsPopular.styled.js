import styled from 'styled-components';

export const FollowUsPopularContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 100px;
  svg {
    fill: ${({ theme }) => theme.color.socIcon};
    transition: ${({ theme }) => theme.transitions.main};
    :hover,
    :focus {
      fill: ${({ theme }) => theme.color.socIconHover};
      background-color: ${({ theme }) => theme.color.socIcon};
    }
  }
`;
