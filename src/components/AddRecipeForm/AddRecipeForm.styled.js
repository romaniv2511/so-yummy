import styled from 'styled-components';

export const Wrap = styled.div`
  padding-top: 50px;
  padding-bottom: 72px;
`;

export const Title = styled.h2`
  margin-bottom: 72px;
  color: ${({ theme }) => theme.color.title};
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ImgUploadWrap = styled.div`
  margin-bottom: 32px;
`;

export const InputUpload = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;
`;

export const InputDescriptionWrap = styled.div`
  position: relative;
  margin-top: 24px;
  &: first-child {
    margin-top: 0;
  }
`;

export const InputDescription = styled.input`
  padding-bottom: 19px;
  width: 343px;
  border: none;
  border-bottom: 1px solid grey;
`;

export const SelectDescription = styled.select`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
`;
