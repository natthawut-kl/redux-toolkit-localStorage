import { createTheme } from '@mui/material/styles';
// import { green } from '@mui/material/colors';
import { alpha, lighten, darken } from '@mui/material';
import { createBreakpoints } from '@mui/system';
import { themeColors } from './themeColors';


export const creTheme = createTheme();

const breakpoints = createBreakpoints({});

const colors = {
  secondary: {
    lighter: lighten(themeColors.secondary, 0.85),
    light: lighten(themeColors.secondary, 0.25),
    main: themeColors.secondary,
    dark: darken(themeColors.secondary, 0.2)
  },
  primary: {
    lighter: lighten(themeColors.primary, 0.85),
    light: lighten(themeColors.primary, 0.3),
    main: themeColors.primary,
    dark: darken(themeColors.primary, 0.2)
  },
  success: {
    lighter: lighten(themeColors.success, 0.85),
    light: lighten(themeColors.success, 0.3),
    main: themeColors.success,
    dark: darken(themeColors.success, 0.2)
  },
  warning: {
    lighter: lighten(themeColors.warning, 0.85),
    light: lighten(themeColors.warning, 0.3),
    main: themeColors.warning,
    dark: darken(themeColors.warning, 0.2)
  },
  error: {
    lighter: lighten(themeColors.error, 0.85),
    light: lighten(themeColors.error, 0.3),
    main: themeColors.error,
    dark: darken(themeColors.error, 0.2)
  },
  info: {
    lighter: lighten(themeColors.info, 0.85),
    light: lighten(themeColors.info, 0.3),
    main: themeColors.info,
    dark: darken(themeColors.info, 0.2)
  },
  blueSco: {
    lighter: lighten(themeColors.blue, 0.85),
    light: lighten(themeColors.blue, 0.3),
    main: themeColors.blue,
    dark: darken(themeColors.blue, 0.2)
  },
  layout: {
    sidebar: {
      background: themeColors.white,
      textColor: themeColors.black,
      dividerBg: '#f2f5f9',
      menuItemColor: themeColors.black,
      menuItemColorActive: themeColors.primary,
      menuItemBg: 'transparent',
      menuItemBgActive: 'transparent',
      menuItemIconColor: lighten(themeColors.black, 0.3),
      menuItemIconColorActive: themeColors.primary,
      menuItemHeadingColor: darken(themeColors.black, 0.3)
    }
  }
};

const theme = createTheme({
  colors: {
    // gradients: {
    //   blue1: colors.gradients.blue1,
    //   blue2: colors.gradients.blue2,
    //   blue3: colors.gradients.blue3,
    //   orange1: colors.gradients.orange1,
    //   orange2: colors.gradients.orange2,
    //   purple1: colors.gradients.purple1,
    //   pink1: colors.gradients.pink1,
    //   pink2: colors.gradients.pink2,
    //   green1: colors.gradients.green1,
    //   black1: colors.gradients.black1
    // },
    // shadows: {
    //   success: colors.shadows.success,
    //   error: colors.shadows.error,
    //   primary: colors.shadows.primary,
    //   warning: colors.shadows.warning
    // },
    alpha: {
      white: {
        5: alpha(themeColors.white, 0.02),
        10: alpha(themeColors.white, 0.1),
        30: alpha(themeColors.white, 0.3),
        50: alpha(themeColors.white, 0.5),
        70: alpha(themeColors.white, 0.7),
        100: themeColors.white
      },
      trueWhite: {
        5: alpha(themeColors.white, 0.02),
        10: alpha(themeColors.white, 0.1),
        30: alpha(themeColors.white, 0.3),
        50: alpha(themeColors.white, 0.5),
        70: alpha(themeColors.white, 0.7),
        100: themeColors.white
      },
      black: {
        5: alpha(themeColors.black, 0.02),
        10: alpha(themeColors.black, 0.1),
        30: alpha(themeColors.black, 0.3),
        50: alpha(themeColors.black, 0.5),
        70: alpha(themeColors.black, 0.7),
        100: themeColors.black
      }
    },
    secondary: {
      lighter: alpha(themeColors.secondary, 0.1),
      light: lighten(themeColors.secondary, 0.3),
      main: themeColors.secondary,
      dark: darken(themeColors.secondary, 0.2)
    },
    primary: {
      lighter: alpha(themeColors.primary, 0.1),
      light: lighten(themeColors.primary, 0.3),
      main: themeColors.primary,
      dark: darken(themeColors.primary, 0.2)
    },
    success: {
      lighter: alpha(themeColors.success, 0.1),
      light: lighten(themeColors.success, 0.3),
      main: themeColors.success,
      dark: darken(themeColors.success, 0.2)
    },
    warning: {
      lighter: alpha(themeColors.warning, 0.1),
      light: lighten(themeColors.warning, 0.3),
      main: themeColors.warning,
      dark: darken(themeColors.warning, 0.2)
    },
    error: {
      lighter: alpha(themeColors.error, 0.1),
      light: lighten(themeColors.error, 0.3),
      main: themeColors.error,
      dark: darken(themeColors.error, 0.2)
    },
    info: {
      lighter: alpha(themeColors.info, 0.1),
      light: lighten(themeColors.info, 0.3),
      main: themeColors.info,
      dark: darken(themeColors.info, 0.2)
    }
  },
  palette: {
    background: {
      default: themeColors.bgGrey
    },
    primary: {
      light: colors.primary.light,
      main: colors.primary.main,
      dark: colors.primary.dark
    },
    secondary: {
      light: colors.secondary.light,
      main: colors.secondary.main,
      dark: colors.secondary.dark
    },
    error: {
      light: colors.error.light,
      main: colors.error.main,
      dark: colors.error.dark
    },
    success: {
      light: colors.success.light,
      main: colors.success.main,
      dark: colors.success.dark
    },
    info: {
      light: colors.info.light,
      main: colors.info.main,
      dark: colors.info.dark
    },
    warning: {
      light: colors.warning.light,
      main: colors.warning.main,
      dark: colors.warning.dark
    },
    blueSco: {
      light: colors.blueSco.light,
      main: colors.blueSco.main,
      dark: colors.blueSco.dark
    }
  },
  general: {
    shadowInsetBottom: 'inset rgb(0 0 0 / 5%) 0px -1.5px 0px',
    borderBottom1P5: `1.5px solid ${themeColors.borderColor}`,
    paddingRLInCard: '50px'
  },
  sidebar: {
    background: colors.layout.sidebar.background,
    textColor: colors.layout.sidebar.textColor,
    dividerBg: colors.layout.sidebar.dividerBg,
    menuItemColor: colors.layout.sidebar.menuItemColor,
    menuItemColorActive: colors.layout.sidebar.menuItemColorActive,
    menuItemBg: colors.layout.sidebar.menuItemBg,
    menuItemBgActive: colors.layout.sidebar.menuItemBgActive,
    menuItemIconColor: colors.layout.sidebar.menuItemIconColor,
    menuItemIconColorActive: colors.layout.sidebar.menuItemIconColorActive,
    menuItemHeadingColor: colors.layout.sidebar.menuItemHeadingColor,
    boxShadow:
      '2px 0 3px rgba(159, 162, 191, 0.18), 1px 0 1px rgba(159, 162, 191, 0.32)',
    width: '280px'
  },
  // typography: {
  //   fontFamily: ['IBM Plex Sans Thai Looped', 'sans-serif'].join(',')
  // },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'html, body, #__next': {
          width: '100%',
          height: '100%'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          // fontFamily: ['IBM Plex Sans Thai Looped', 'sans-serif'].join(',')
        }
      }
    },
    // MuiContainer: {
    //   styleOverrides: {
    //     maxWidthLg: {
    //       [creTheme.breakpoints.up('lg')]: {
    //         maxWidth: '1400px'
    //       }
    //     }
    //   }
    // },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '.icon-select': {
            userSelect: 'none',
            display: 'inline-block',
            flexShrink: '0',
            position: 'absolute',
            right: '7px',
            top: 'calc(50% - 6px)',
            pointerEvents: 'none'
          },
          // '& .MuiInputAdornment-positionEnd.MuiInputAdornment-outlined': {
          //   paddingRight: 6
          // },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: alpha(themeColors.primary, 0.5)
          },
          '&.Mui-focused:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: themeColors.primary
          }
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        formControl: {
          padding: 0,
          'label + &': {
            marginTop: '0'
          }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: themeColors.black
        },
        shrink: {
          transform: 'unset !important'
        },
        formControl: {
          position: 'unset',
          top: 'unset',
          left: 'unset'
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: creTheme.typography.pxToRem(14),
          padding: '0 0 5px 0',
          color: themeColors.black
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&.Mui-error input, &.Mui-error textarea': {
            borderColor: themeColors.error
          },
          '& .MuiSelect-icon': {
            right: '5px'
          },
          '&.Mui-error .MuiSelect-root': {
            borderColor: themeColors.error
          },
          '&.input-datepicker .MuiInputAdornment-positionEnd, &.input-date-time-picker .MuiInputAdornment-positionEnd': {
            position: 'absolute',
            right: '12px'
          },
          '&.input-datepicker input, &.input-date-time-picker input': {
            boxShadow: '0px 1px 1px rgb(0 0 0 / 10%)'
          }
        },
        input: {
          height: '34px',
          background: themeColors.bgWhite,
          border: '1px solid #F0F0F0',
          boxSizing: 'border-box',
          borderRadius: '8px !important',
          paddingTop: '10px !important',
          paddingBottom: '10px !important',
          paddingLeft: '12px !important',
          fontSize: creTheme.typography.pxToRem(14),
          width: '100%',
          transition: creTheme.transitions.create([
            'border-color',
            'box-shadow'
          ]),
          '&:focus': {
            borderColor: themeColors.primary
          },
          appearance: 'none',
          // set font sarabun
          lineHeight: '34px',
          verticalAlign: 'middle'
          //  Remove the box shadow input on device platform
          //  backgroundClip: 'padding-box'
          //  backgroundImage: 'linear-gradient(transparent, transparent)'
          //  backgroundImage: '-webkit-gradient(linear, 0% 0%, 0% 100%, from(hsla(0,0%,100%,0)), to(hsla(0,0%,100%,0)))',
          //  backgroundImage: '-webkit-linear-gradient(hsla(0,0%,100%,0), hsla(0,0%,100%,0))'
        },
        inputAdornedEnd: {
          padding: '10px 50px 10px 12px !important'
        },
        inputMultiline: {
          lineHeight: 'unset'
        },
        multiline: {
          width: '100%'
        }
      }
    },
    MuiAutocomplete: {
      styleOverrides: {
        tag: {
          margin: 1
        },
        endAdornment: {
          right: '4px',
          top: 'calc(50% - 15px)'
        },
        paper: {
          boxShadow:
            '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
          borderRadius: '8px'
        },
        root: {
          width: '100%',
          '.MuiAutocomplete-inputRoot.MuiOutlinedInput-root .MuiAutocomplete-endAdornment':
            {
              right: 14
            }
        },
        input: {
          border: `1px solid ${themeColors.borderColor}`,
          boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.1)'
        },
        clearIndicator: {
          // background: colors.error.lighter,
          // color: colors.error.main,
          marginRight: 4,

          '&:hover': {
            background: colors.error.lighter,
            color: colors.error.dark
          }
        },
        popupIndicator: {
          color: themeColors.black,

          '&:hover': {
            background: colors.primary.lighter,
            color: colors.primary.main
          }
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true
      },
      variants: [
        {
          props: { color: 'blueSco' },
          style: {
            color: themeColors.white
          }
        }
      ],
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '6px 25px',
          '&.Mui-disabled': {
            pointerEvents: 'auto'
          }
        },
        outlinedPrimary: {
          backgroundColor: themeColors.lightBlue,
          borderColor: themeColors.primary
        },
        outlinedSecondary: {
          borderColor: themeColors.borderColor
          // ':hover': {
          //   borderColor: themeColors.darkBlue
          // }
        },
        outlinedError: {
          borderColor: themeColors.borderColor,
          backgroundColor: themeColors.white
        },
        outlinedWarning: {
          backgroundColor: themeColors.white
        },
        outlinedSuccess: {
          backgroundColor: themeColors.lightGreen
        },
        containedSuccess: {
          color: themeColors.white
        },
        outlined: {
          borderWidth: '1.5px',
          ':hover': {
            borderWidth: '1.5px'
          }
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          marginLeft: 8,
          marginRight: 8,
          '&.sub-input-label': {
            textAlign: 'right',
            margin: 0,
            [breakpoints.down('md')]: {
              textAlign: 'unset'
            }
          }
          // fontWeight: 'bold'
        }
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: creTheme.typography.pxToRem(14),
          color: themeColors.black
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          transition: creTheme.transitions.create(['color'])
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)'
        }
      }
    },
    MuiTablePagination: {
      styleOverrides: {
        toolbar: {
          '& .MuiIconButton-root': {
            padding: 8
          },
          minHeight: '20px !important'
        },
        select: {
          '&:focus': {
            backgroundColor: 'transparent'
          },
          height: 'unset',
          background: 'unset',
          border: 'unset',
          boxSizing: 'unset',
          borderRadius: 'unset !important',
          padding: '4px 0px 5px !important',
          fontSize: 'unset',
          width: 'unset',
          appearance: 'none',
          // set font sarabun
          lineHeight: 'unset',
          verticalAlign: 'unset',
          paddingRight: '24px !important',
          paddingLeft: '8px !important'
        },
        selectIcon: {
          right: '0'
        },
        selectLabel: {
          margin: '5px 0'
        },
        displayedRows: {
          margin: '5px 0'
        }
      }
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            border: 'unset',
            fontWeight: creTheme.typography.fontWeightBold
          }
        },
        page: {
          border: 'unset'
        },
        previousNext: {
          border: 'unset',
          color: themeColors.primary,
          '&.Mui-disabled': {
            color: themeColors.grey
          }
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderRadius: 'unset'
        }
      }
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          borderRadius: '8px',
          boxShadow: '0px 2px 4px rgb(0 0 0 / 5%)'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          '&.datepicker-dialog-paper': {
            boxShadow:
              'rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px'
          }
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRadius: 'unset'
        }
      }
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          '&.notice-dialog-action': {
            boxShadow: 'inset 0 1px 0 rgb(0 0 0 / 0.05)',
            backgroundColor: themeColors.bgGrey,
            '& .MuiButton-root': {
              minWidth: '50px',
              '&.cancel-queue': {
                color: themeColors.red
              }
            },
            [breakpoints.down('sm')]: {
              display: 'flex',
              justifyContent: 'center'
            }
          }
        }
      }
    }
  },
  // shape: {
  //   borderRadius: 16
  // },
  shadows: [
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none'
  ]
});

export default theme;
