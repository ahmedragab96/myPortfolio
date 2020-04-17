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
          value: '#343236',
          contrast: 'white',
          disabledValue: '#141414',
          disabledContrast: 'white',
      },
      surface: {
          value: '#343236',
          contrast: '#141414',
          disabledValue: 'white',
          disabledContrast: '#141414',
      },
  },
});
