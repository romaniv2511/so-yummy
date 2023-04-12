import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const WrapperPopular = styled.div`
  margin-top: 72px;
  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    margin-top: 0;
  }
`;

export const TitlePopular = styled.h3`
  color: ${props => props.theme.color.text};
  font-weight: ${props => props.theme.fontWeights.l};
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.24px;
  margin-bottom: 32px;
  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    margin-bottom: 40px;
  }
`;

export const ListPopular = styled.ul`
  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    display: block;
  }
`;

export const ListItemPopular = styled.li`
  padding-bottom: 13px;
  border-bottom: 1px solid rgba(126, 126, 126, 0.5);
  margin-top: 24px;
  &:first-child {
    margin-top: 0;
  }
  &:nth-child(2) {
    @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
      margin-top: 0;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
      margin-top: 24px;
    }
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    max-width: 336px;
  }
`;

export const ListLinkPopular = styled(NavLink)`
  display: flex;
  gap: 12px;
`;

export const ItemImg = styled.img`
  width: 104px;
  border-radius: 8px;
  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    /* width: 102px; */
  }
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
  color: ${props => props.theme.color.textPopular};
  font-weight: ${props => props.theme.fontWeights.s};
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.24px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
