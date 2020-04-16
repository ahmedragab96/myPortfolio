import React, { useState } from 'react';
import { Theme } from '../../theme';
import { ThemeContext } from '../../theme/themeContext';

interface Props {
  theme?: Theme;
}

export const ThemeProvider: React.FC<Props> = (props) => {
  const {
    theme,
    children,
  } = props;
  const [currentTheme, setCurrentTheme] = useState<Theme>(theme || new Theme());
  return (
    <ThemeContext.Provider
      value={{
        theme: currentTheme,
        setTheme: (cTheme: Theme) => setCurrentTheme(cTheme),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};