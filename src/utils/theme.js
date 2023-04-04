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
  color: {
    title: '#001833',
    text: '#3E4462',
    accent: '#8BAA36',
    bg: '#FAFAFA',
    bgSecondary: '#22252A',
    bgAccentEl: '#EBF3D4',
    bgLightEl: '#FFFFFF',
    gbCancel: '#D9D9D9',
    textSecondary: '#FAFAFA',
    textRights: '#22252A',
    textPagination: '#656565',
    socIcon: '#8BAA36',
    socIconHover: '#FFFFFF',
    logo: '#FAFAFA',
    footerInput: 'rgba(255, 255, 255, 0.3)',
  },
};

export const darkTheme = {
  ...mainVars,
  color: {
    title: '#FAFAFA',
    text: 'rgba(250, 250, 250, 0.6)',
    accent: '#8BAA36',
    bg: '#1E1F28',
    bgSecondary: '#8BAA36',
    bgAccentEl: '#2A2C36',
    bgLightEl: '#2A2C36',
    gbCancel: '#D9D9D9',
  },
};
