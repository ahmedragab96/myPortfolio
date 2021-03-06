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
          value: '#3BC2ED',
          contrast: '#3BC2ED',
          disabledValue: '#3BC2ED',
          disabledContrast: '#ACACAC',
      },
      common: {
          black: 'white',
      },
      error: {
          value: '#EB5757',
      },
      background: {
          value: 'white',
          contrast: 'white',
          disabledValue: '#141414',
          disabledContrast: '#F6F6F6',
      },
      surface: {
          value: '#CEF3FF',
          contrast: '#89E3FF',
          disabledValue: 'white',
          disabledContrast: '#F6F6F6',
      },
  },
});
