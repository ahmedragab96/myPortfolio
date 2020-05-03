import React, { useContext } from 'react';
import { ThemeContext } from '../../theme/themeContext';
import styles from './styles.module.scss';
import { images } from '../../assets';
import { lightTheme } from '../../theme/themes/light';
import { darkTheme } from '../../theme/themes/dark';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

interface Props {
  onNavClicked(): void;
}

const NavBar: React.FC<Props> = (props: Props) => {
  const {
    theme,
    setTheme,
  } = useContext(ThemeContext);
  return(
    <div
      className={styles.navContainer}
      style={{
        backgroundColor: theme.palette.background.value
      }}
    >
      <div
        className={styles.logoContainer}
      >
        <div className={styles.headerToggle}>
          <IconButton 
            aria-label='Menu'
            edge="start"
            style={{
              color: theme.palette.primary.value
            }}
            onClick={() => props.onNavClicked()}
          >
            <MenuIcon fontSize='large' />
          </IconButton>
        </div>
        <img
          src={ theme === lightTheme ? images.lightLogo : images.darkLogo}
          alt={'logo'}
          className={styles.logo}
        />
      </div>
      <div className={styles.headerToggle}>
        <img
          src={theme === lightTheme ? images.lightToggler : images.darkToggler}
          alt={'logo'}
          className={styles.toggler}
          onClick={() => setTheme(theme === lightTheme ? darkTheme : lightTheme)}
        />
      </div>
      <div
        className={styles.rightSideContainer}
      >
        <p
          className={styles.resumeText}
          style={{
            color: theme.palette.primary.value
          }}
        >
          My Resume
        </p>
        <div
          className={styles.helloButton}
          style={{
            borderColor: theme.palette.secondary.contrast
          }}
        >
          <p
            style={{
              color: theme.palette.secondary.contrast
            }}
          >
            Say Hello
          </p>
        </div>
        <img
          src={ theme === lightTheme ? images.lightToggler : images.darkToggler}
          alt={'logo'}
          className={styles.toggler}
          onClick={() => setTheme(theme === lightTheme ? darkTheme : lightTheme)}
        />
      </div>
    </div>
  );
}

export default NavBar;