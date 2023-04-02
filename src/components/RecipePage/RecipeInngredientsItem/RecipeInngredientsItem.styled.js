import styled from 'styled-components';

export const RecipeItem = styled.li`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.bgAccentEl};
`;
export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  & img {
    width: 57px;
    height: 57px;
  }
`;
export const CheckLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 14px 29px 14px 14px;
  &:hover {
    cursor: pointer;
  }
`;
export const IngTextContainer = styled.div`
  height: 52px;
  overflow: hidden;
  /* text-overflow: ellipsis; */
  max-width: 114px;
`;
export const IngName = styled.title`
  display: block;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.24px;
  color: ${({ theme }) => theme.color.text};
`;
export const IngDescr = styled.p`
  font-weight: 400;
  font-size: 8px;
  line-height: 1.38;
  letter-spacing: -0.24px;
  color: ${({ theme }) => theme.color.text};
`;
export const IngNumber = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: auto;
  padding: 4px;
  min-width: 37px;
  max-width: 100px;
  border-radius: 4px;
  background: ${({ theme }) => theme.color.accent};
  font-weight: 600;
  font-size: 10px;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.textSecondary};
`;
export const CustomCheckbox = styled.span`
  margin-left: 39px;
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
  background: transparent;
  border: 1px solid rgba(126, 126, 126, 0.5);
  border-radius: 4px;
  & svg {
    display: inline-block;
    width: 9px;
    height: 9px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
  }
`;
export const DoneCheckbox = styled.input`
  display: none;
  &:checked + ${CustomCheckbox} svg {
    transform: translate(-50%, -50%) scale(1);
  }
`;
