import styled from 'styled-components';

export const RecipeItem = styled.li`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.bgAccentEl};
`;
export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 57px;
    height: 57px;
    margin-right: 12px;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
      width: 112px;
      height: 112px;
      margin-right: 40px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}) {
      width: 128px;
      height: 128px;
      margin-right: 66px;
    }
  }
`;
export const CheckLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 14px 29px 14px 14px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    padding: 21px 58px 21px 28px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}) {
    padding: 27px 70px 27px 34px;
  }
  &:hover {
    cursor: pointer;
  }
`;
export const IngTextContainer = styled.div`
  /* height: 52px; */
  /* overflow: hidden; */
  /* text-overflow: ellipsis; */
  max-width: 90px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    max-width: 208px;
    /* height: 114px; */
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}) {
    max-width: 547px;
    /* height: 104px; */
  }
`;
export const IngName = styled.title`
  display: block;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.24px;
  color: ${({ theme }) => theme.color.text};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    font-size: 24px;
    line-height: -0.24px;
    margin-bottom: 10px;
  }
`;
export const IngDescr = styled.p`
  font-weight: 400;
  font-size: 8px;
  line-height: 1.38;
  letter-spacing: -0.24px;
  color: ${({ theme }) => theme.color.text};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    overflow-y: clip;
    font-size: 24px;
    line-height: -0.24px;
    font-size: 12px;
    line-height: 1.67;
  }
`;
export const IngNumber = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: auto;
  padding: 4px;
  min-width: 37px;
  max-width: 47px;
  border-radius: 4px;
  background: ${({ theme }) => theme.color.accent};
  font-weight: 600;
  font-size: 10px;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.textSecondary};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    min-width: 68px;
    max-width: 150px;
    font-size: 18px;
    line-height: 1.5;
  }
`;
export const CustomCheckbox = styled.span`
  margin-left: 28px;
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
  background: transparent;
  border: 1px solid rgba(126, 126, 126, 0.5);
  border-radius: 4px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    border: 2px solid rgba(126, 126, 126, 0.5);
    width: 35px;
    height: 35px;
    margin-left: 78px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}) {
    margin-left: 151px;
  }
  & svg {
    display: inline-block;
    width: 9px;
    height: 9px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
      width: 18px;
      height: 18px;
    }
  }
`;
export const DoneCheckbox = styled.input`
  display: none;
  &:checked + ${CustomCheckbox} svg {
    transform: translate(-50%, -50%) scale(1);
  }
`;
