import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 295px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  margin-bottom: ${props => (props.search ? '42px' : '50px')};
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    width: 362px;
    gap: 28px;
    margin-bottom: ${props => (props.search ? '40px' : '50px')};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    width: 362px;
    gap: 28px;
    margin-bottom: ${props => (props.search ? '90px' : '50px')};
  }
`;
