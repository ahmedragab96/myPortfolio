import {
  Theme,
} from "..";

export const darkTheme = new Theme({
  palette: {
      primary: {
          value: 'white',
          contrast: '#141414',
          disabledValue: '#ACACAC',
          disabledContrast: '#141414',
      },
      secondary: {
          value: '#3BC2ED',
          contrast: 'white',
          disabledValue: '#575757',
          disabledContrast: '#ACACAC',
      },
      common: {
          black: '#575757',
      },
      error: {
          value: '#EB5757',
      },
      background: {
          value: '#343236',
          contrast: 'white',
          disabledValue: '#141414',
          disabledContrast: 'white',
      },
      surface: {
          value: '#343236',
          contrast: '#343236',
          disabledValue: 'white',
          disabledContrast: '#141414',
      },
  },
});
