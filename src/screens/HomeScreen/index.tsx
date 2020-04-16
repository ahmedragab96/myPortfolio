import React, { useContext } from 'react';
import { ThemeContext } from '../../theme/themeContext';
import { darkTheme } from '../../theme/themes/dark';
import { lightTheme } from '../../theme/themes/light';

const HomeScreen = () => {
  const {
    theme,
    setTheme,
  } = useContext(ThemeContext);
  return (
    <>
    <div
      style={{
        color: theme.palette.primary.value,
        backgroundColor: theme.palette.background.value
      }}
    >
      Hello
    </div>
    <button
      onClick={() => setTheme(theme === lightTheme ? darkTheme : lightTheme)}
    >
      change mood
    </button>
    </>
  );
}

export default HomeScreen;