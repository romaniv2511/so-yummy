import categoryCenterMob from '../img/categories-center-mob.png';
import categoryCenterMobRetina from '../img/categories-center-mob@2x.png';
import categoryCenterDesk from '../img/categories-center-desktop.png';
import categoryCenterDeskRetina from '../img/categories-center-desktop@2x.png';
import categoryCenterMobWhite from '../img/categories-center-mob-white.png';
import categoryCenterMobRetinaWhite from '../img/categories-center-mob-white@2x.png';
import categoryCenterDeskWhite from '../img/categories-center-tab-white.png';
import categoryCenterDeskRetinaWhite from '../img/categories-center-tab-white@2x.png';

const mainVars = {
  breakpoints: {
    mob: '375px',
    mobMax: '767px',
    tab: '768px',
    tabMax: '1439px',
    desk: '1440px',
  },
  fontWeights: {
    s: 400,
    m: 500,
    l: 600,
    xl: 700,
  },
  transitions: {
    main: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
};
export const lightTheme = {
  ...mainVars,
  image: {
    imageMob: categoryCenterMob,
    imageMobRet: categoryCenterMobRetina,
    imageDesk: categoryCenterDesk,
    imageDeskRet: categoryCenterDeskRetina,
  },
  color: {
    accentStartPage: '#8BAA36',
    titleStartPage: '#FAFAFA',
    title: '#001833',
    primaryTextColor: '#23262A',
    mainTitle: '#22252A',
    text: '#3E4462',
    secondaryTextColor: '#000000',
    textFavorites: '#23262A',
    userText: '#22252A',
    textPreparation: 'rgba(0, 0, 0, 0.8)',
    textNumber: '#FFFFFF',
    textPopular: '#7E7E7E',
    accent: '#8BAA36',
    btnColor: '#FAFAFA',
    btnColorSecondary: '#22252A',
    bgMenu: 'rgba(235, 243, 212, 1)',
    bg: '#FAFAFA',
    bgButtonSelect: '#D9D9D9',
    bgSubscribe: '#8BAA36',
    bgSelectColor: '#FAFAFA',
    bgSecondary: '#22252A',
    bgPagination: '#FAFAFA',
    bgPaginationActive: '#EBF3D4',
    bgAccentEl: '#EBF3D4',
    bgLightEl: '#FFFFFF',
    gbCancel: '#D9D9D9',
    textCancel: '#23262A',
    textSecondary: '#FAFAFA',
    textRights: '#22252A',
    textPagination: '#656565',
    socIcon: '#8BAA36',
    socIconHover: '#FFFFFF',
    logo: '#FAFAFA',
    footerInput: 'rgba(255, 255, 255, 0.3)',
    border: 'none',
    select: 'transparent',
    borderColor: 'rgba(51, 51, 51, 0.3)',
    borderSelect: 'none',
  },
};

export const darkTheme = {
  ...mainVars,
  image: {
    imageMob: categoryCenterMobWhite,
    imageMobRet: categoryCenterMobRetinaWhite,
    imageDesk: categoryCenterDeskWhite,
    imageDeskRet: categoryCenterDeskRetinaWhite,
  },
  color: {
    accentStartPage: '#8BAA36',
    titleStartPage: '#FAFAFA',
    title: '#FAFAFA',
    primaryTextColor: '#FAFAFA',
    mainTitle: '#FAFAFA',
    text: '#FAFAFA',
    secondaryTextColor: '#FAFAFA',
    textFavorites: 'rgba(250, 250, 250, 0.6)',
    userText: '#22252A',
    textPreparation: '#FAFAFA',
    textNumber: '#FFFFFF',
    textPopular: 'rgba(250, 250, 250, 0.6)',
    accent: '#8BAA36',
    btnColor: '#FAFAFA',
    btnColorSecondary: '#FAFAFA',
    bgMenu: '#1E1F28',
    bg: '#1E1F28',
    bgButtonSelect: '#1E1F28',
    bgSubscribe: '#1E1F28',
    bgSelectColor: '#8BAA36',
    bgSecondary: '#8BAA36',
    bgPagination: '#2A2C36',
    bgPaginationActive: '#8BAA36',
    bgAccentEl: '#2A2C36',
    bgLightEl: '#2A2C36',
    gbCancel: '#D9D9D9',
    textCancel: '#23262A',
    textSecondary: '#FAFAFA',
    textRights: '#8BAA36',
    textPagination: 'rgba(250, 250, 250, 0.6)',
    socIcon: '#FFFFFF',
    socIconHover: '#1E1F28',
    logo: '#FAFAFA',
    footerInput: 'rgba(31, 30, 30, 0.2)',
    border: '1px solid #8BAA36',
    select: '#1E1F28',
    borderColor: '#FAFAFA',
    borderSelect: '1px solid rgba(250, 250, 250, 0.2)',
  },
};
