import React, { useContext } from 'react';
import { ThemeContext } from '../../theme/themeContext';
import styles from './styles.module.scss';
import { images } from '../../assets';
import { Animated } from 'react-animated-css';
import ScrollAnimation from 'react-animate-on-scroll';

const handleSendEmail = () => {
  let element      = document.createElement("a");
  element.href     = "mailto: hamadar1996@gmail.com?subject=Say Hello";
  element.click();
}


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
      <ScrollAnimation
        animateIn="fadeInUp"
      >
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
          <div
            onClick={
              () => window.open('https://www.linkedin.com/in/ahmed-ragab-shaban/', '_blank')
            }
            className={styles.socialLink}
          >
            {images.linkedIn}
          </div>
          <div
            style={{
              marginTop: 5,
            }}
            onClick={
              () => window.open('https://github.com/ahmedragab96', '_blank')
            }
            className={styles.socialLink}
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
            onClick={
              () => handleSendEmail()
            }
            className={styles.socialLink}
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
        </ScrollAnimation>
    </div>
  );
}

export default Footer;