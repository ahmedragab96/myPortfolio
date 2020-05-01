import React, { useContext } from 'react';
import { ThemeContext } from '../../../theme/themeContext';
import styles from './styles.module.scss';
import { images } from '../../../assets';
import ScrollAnimation from 'react-animate-on-scroll';

const IntroductionComponent: React.FC = () => {
  const {
    theme,
  } = useContext(ThemeContext);
  return (
    <div
      className={styles.introductionSction}
      style={{
        backgroundColor: theme.palette.surface.contrast
      }}
    >
      <ScrollAnimation animateIn="fadeInLeft" duration={2}>
      <p
        className={styles.nameText}
        style={{
          color: theme.palette.primary.value
        }}
      >
        Hi, I’m Ragab. Nice to meet you.
      </p>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInRight" duration={2}>
      <p
        className={styles.introText}
        style={{
          color: theme.palette.primary.value
        }}
      >
        Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
      </p>
      </ScrollAnimation>
    </div>
  );
}

export default IntroductionComponent;