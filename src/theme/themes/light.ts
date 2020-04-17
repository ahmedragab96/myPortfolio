import {
  Theme,
} from "..";

export const lightTheme = new Theme({
  palette: {
      primary: {
          value: 'black',
          contrast: '#141414',
          disabledValue: '#ACACAC',
          disabledContrast: '#141414',
      },
      secondary: {
          value: '#141414',
          contrast: 'white',
          disabledValue: '#141414',
          disabledContrast: '#ACACAC',
      },
      common: {
          link: '#189DE8',
      },
      error: {
          value: '#EB5757',
      },
      background: {
          value: 'white',
          contrast: 'white',
          disabledValue: '#141414',
          disabledContrast: 'white',
      },
      surface: {
          value: '#CEF3FF',
          contrast: '#89E3FF',
          disabledValue: 'white',
          disabledContrast: '#141414',
      },
  },
});
