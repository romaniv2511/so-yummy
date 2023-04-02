import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 72px;
`;

export const Title = styled.h2`
  margin-bottom: 72px;
  margin-left: 16px;
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
  margin-top: 24px;
  &: first-child {
    margin-top: 0;
  }
`;

export const InputDescription = styled.input`
  padding-bottom: 19px;
`;
