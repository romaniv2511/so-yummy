import styled from 'styled-components';
// import footerBg from '../../../img/footer-bg-mob.png';
// import footerBg2x from '../../../img/footer-bg-mob@2x.png';

export const FooterRightsBg = styled.div`
  text-align: center;
  width: 100%;
  padding: 28px 0;
  background-color: transparent;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    padding: 32px 0;
  }
  span {
    margin-left: 14px;
    font-weight: 400;
  }

  p {
    font-size: 10px;
    line-height: 1;
    font-style: normal;
    font-weight: 500;
    letter-spacing: -0.01em;
    color: #22252a;
    opacity: 0.5;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
      font-size: 14px;
    }
  }
`;
// export const FooterRightsContainer = styled.div`
//   /* margin: 0 auto;
//   min-height: 100vh;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   position: relative;
//   background-image: url(${footerBg});
//   background-repeat: no-repeat;
//   background-position: 0px 0px;
//   @media screen and (min-device-pixel-ratio: 2),
//     screen and (min-resolution: 192dpi) screen and (min-resolution: 2dppx) {
//     background-image: url(${footerBg2x});
//   } */
// `;
