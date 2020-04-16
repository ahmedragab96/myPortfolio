import {
  Theme,
} from "..";

export const darkTheme = new Theme({
  palette: {
      primary: {
          value: '#FFCC00',
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
          value: '#141414',
          contrast: 'white',
          disabledValue: '#141414',
          disabledContrast: 'white',
      },
      surface: {
          value: 'white',
          contrast: '#141414',
          disabledValue: 'white',
          disabledContrast: '#141414',
      },
  },
});
