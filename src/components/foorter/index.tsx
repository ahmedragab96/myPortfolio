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
      <div
        className={styles.logoContainer}
      >
        <img
          src={images.darkLogo}
          alt={'logo'}
          className={styles.logo}
        />
        <p
          className={styles.footerText}
        >
          Living, learning, & leveling up one day at a time.
        </p>
      </div>
      <div
       className={styles.socialMediaContainer}
      >
        <p
          className={styles.cerditsText}
        >
          Handcrafted by me
          <span className={styles.creditsLogo}> {images.credits} </span> 
          TwentyTwenty 2020
        </p>
        <div
          className={styles.socialIconsContainer}
        >
          <div>
            {images.linkedIn}
          </div>
          <div
            style={{
              marginTop: 5,
            }}
          >
            {images.github}
          </div>
          <div
           style={{
            marginTop: 5,
          }}
          >
            {images.twitter}
          </div>
          <div
          style={{
            marginTop: 5,
          }}
          >
            {images.email}
          </div>
          <div
          style={{
            marginTop: 2,
          }}
          >
            {images.pintrest}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;