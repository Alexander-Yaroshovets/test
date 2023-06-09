import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  breakpoints: ['375px', '768px', '1440px'],
  colors: {
    mainDark: '#23262A',
    secondaryDark: '#3E4462',
    mainBlack: '#000000',
    mainWhite: '#FFFFFF',
    mainGrey: '#7E7E7E',
    secondaryGrey: '#656565',
    disabledGrey: '#BDBDBD',
    mainLight: '#FFFFFF',
    mainAccent: '#8BAA36',
    secondaryAccent: '#EBF3D4',
    mainNavLinkHover: '#23262A',
    mainHeaderText: '#22252A',
    mainBtnText: '#22252A',
    bodyBg: '#FAFAFA',
    footerBg: '#22252A',
    footerSMlinks: '#8BAA36',
    footerSMlinksHover: '#FAFAFA',
    footerBtnBg: '#8BAA36',
    footerCopyRight: 'rgba(34, 37, 42, 0.5)',
    mainBg: '#ECECEC',
    btnTextLight: '#FAFAFA',
    sectionHeader: '#001833',
    deleteBtnBg: '#8BAA36',
    deleteBtnIcon: '#FFFFFF',
    recipeBlockBtnBg: '#22252A',
    recipeBlockBg: '#EBF3D4',
    paginationBg: '#EBF3D4',
    paginationText: '#656565',
    paginationShadow: '0px 4px 4px rgba(135, 135, 135, 0.2)',
    mainSearchInput: '#FFFFFF',
    userName: '#22252A',
    searchSelectBg: 'rgba(217, 217, 217, 0.2)',
    searchSelectText: 'rgba(0, 0, 0, 0.5)',
    searchDropDownBg: '#FFFFFF',
    tooltipbg: '#EBF3D4',
    ingredientsBgrCol: '#EBF3D4',

    mainSerchHoverText: '#ffffff',
    searchFormHoverBtn: '#23262A',
    mainGreyBg: '#D9D9D9',
    secondaryGreyBg: '#C4C4C4',
    btnHoverBg: '#22252A',
    btnHoverText: '#22252A',
    iconHover: ' #1E1F28',
    switchBg: '#EFEFEF',
    burgerRecipeBtn: '#23262A',
  },

  fonts: {
    main: 'Poppins, sans-serif',
  },
  fontWeights: [400, 500, 600, 700],
  lineHeights: {
    subheader: '1',
    content: '1.33',
    extraContent: '1.29',
    btnText: '1.12',
    description: '1.25',
    time: '1.43',
    headerLinks: '1.6',
    userLink: '1.7',
    searchSelect: '1.5',
  },
  letterSpacings: {
    subheader: '-0.24px',
    content: '-0.02em',
  },

  borders: {
    btnStandart: '2px solid #FAFAFA',
    btnHover: '2px solid #8BAA36',
    mainSearchInput: '1px solid #F0F0F0',
    searchInput: '1px solid #F0F0F0',
    mainNavBord: '1px solid transparent',
  },
  radii: {
    btnStandart: '6px',
    btnIcon: '4px',
    logo: '12px',
    image: '8px',
    switch: '50px',
    pagination: '26px',
    modal: '24px',
    circle: '50%',
  },
  transitions: {
    main: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
});

export const darkTheme = {
  breakpoints: ['375px', '768px', '1440px'],
  colors: {
    mainDark: '#FAFAFA',
    secondaryDark: '#FAFAFA',
    mainBlack: '#FFFFFF',
    mainWhite: '#000000',
    mainGrey: '#7E7E7E',
    secondaryGrey: '#656565',
    disabledGrey: 'rgba(255, 255, 255, 0.5)',
    mainLight: '#FAFAFA',
    mainAccent: '#8BAA36',
    secondaryAccent: '#1E1F28',
    mainNavLinkHover: '#FFFFFF',
    mainHeaderText: '#FAFAFA',
    mainBtnText: '#FAFAFA',
    bodyBg: '#23262A',
    footerBg: '#8BAA36',
    footerSMlinks: '#FAFAFA',
    footerBtnBg: '#23262A',
    footerCopyRight: 'rgba(255, 255, 255, 0.5)',
    footerSMlinksHover: '#23262A',
    deleteBtnBg: '#22252A',
    deleteBtnIcon: '#FFFFFF',
    recipeBlockBtnBg: '#8BAA36',
    recipeBlockBg: '#2A2C36',
    paginationBg: '#8BAA36',
    paginationText: 'rgba(255, 255, 255, 0.6)',
    mainSearchInput: '#2A2C36',
    paginationShadow: '0px 4px 4px rgba(31, 30, 30, 0.2)',
    userName: '#22252A',
    searchSelectBg: 'transparent',
    searchSelectText: '#FAFAFA',
    searchDropDownBg: '#8BAA36',
    tooltipbg: '#8BAA36',
    ingredientsBgrCol: '#2A2C36',

    mainSerchHoverText: '#8BAA36',
    searchFormHoverBtn: '#FFFFFF',
    mainBg: '#ECECEC',
    btnTextLight: '#FAFAFA',
    sectionHeader: '#FAFAFA',
    mainGreyBg: '#D9D9D9',
    secondaryGreyBg: '#C4C4C4',
    btnHoverBg: '#22252A',
    btnHoverText: '#8BAA36',
    iconHover: '#FAFAFA',
    switchBg: '#EFEFEF',
    burgerRecipeBtn: '#23262A',
  },
  fonts: {
    main: 'Poppins, sans-serif',
  },
  fontWeights: [400, 500, 600, 700],
  lineHeights: {
    subheader: '1',
    content: '1.33',
    extraContent: '1.29',
    btnText: '1.12',
    description: '1.25',
    time: '1.43',
    headerLinks: '1.6',
    userLink: '1.7',
    searchSelect: '1.5',
  },
  letterSpacings: {
    subheader: '-0.24px',
    content: '-0.02em',
  },

  borders: {
    btnStandart: '2px solid #FAFAFA',
    btnHover: '2px solid #8BAA36',
    mainSearchInput: '1px solid rgba(255, 255, 255, 0.2)',
    searchInput: '1px solid #FAFAFA',
    mainNavBord: '1px solid #8BAA36',
  },
  radii: {
    btnStandart: '6px',
    btnIcon: '4px',
    logo: '12px',
    image: '8px',
    switch: '50px',
    pagination: '26px',
    modal: '24px',
    circle: '50%',
  },
  transitions: {
    main: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
};
