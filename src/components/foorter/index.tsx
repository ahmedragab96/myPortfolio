import React, { useContext } from 'react';
import { ThemeContext } from '../../theme/themeContext';
import styles from './styles.module.scss';
import { images } from '../../assets';

const Footer: React.FC = () => {
  const {
    theme,
  } = useContext(ThemeContext);
  return (
    <div
      className={styles.footerContainer}
      style={{
        backgroundColor: theme.palette.secondary.disabledValue
      }}
    >
      <img
        src={images.darkLogo}
        alt={'logo'}
        className={styles.logo}
      />
      <p>
        Living, learning, & leveling up one day at a time.
      </p>
    </div>
  );
} 

export default Footer;