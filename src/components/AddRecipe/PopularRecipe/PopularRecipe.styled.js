import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const WrapperPopular = styled.div`
  margin-top: 72px;
`;

export const TitlePopular = styled.h3`
  color: ${props => props.theme.color.text};
  font-weight: ${props => props.theme.fontWeights.l};
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.24px;
  margin-bottom: 32px;
`;

export const ListPopular = styled.ul``;

export const ListItemPopular = styled.li`
  padding-bottom: 13px;
  border-bottom: 1px solid rgba(126, 126, 126, 0.5);
  margin-top: 24px;
  &:first-child {
    margin-top: 0;
  }
`;

export const ListLinkPopular = styled(Link)`
  display: flex;
  gap: 12px;
  color: black;
`;

export const ItemImg = styled.img`
  width: 104px;
  border-radius: 8px;
`;

export const ItemWrapper = styled.div``;

export const ItemTitle = styled.h4`
  margin-bottom: 3px;
  color: ${props => props.theme.color.text};
  font-weight: ${props => props.theme.fontWeights.m};
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.24px;
`;

export const ItemText = styled.p`
  color: #7e7e7e;
  font-weight: ${props => props.theme.fontWeights.s};
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.24px;
`;
