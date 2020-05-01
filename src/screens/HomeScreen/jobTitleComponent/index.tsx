import React, { useContext } from 'react';
import { ThemeContext } from '../../../theme/themeContext';
import styles from './styles.module.scss';
import { images } from '../../../assets';
import ScrollAnimation from 'react-animate-on-scroll';

const JobTitleComponent: React.FC = () => {
  const {
    theme,
  } = useContext(ThemeContext);
  return (
    <div
      className={styles.jobTitleContainer}
    >
      <ScrollAnimation animateIn="bounce">
        <p
          className={styles.jobHeader}
          style={{
            color: theme.palette.primary.value
          }}
        >
          Full-Stack Developer
        </p>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutRight">
        <p
          className={styles.jobdesc}
          style={{
            color: theme.palette.primary.value
          }}
        >
          I code beautifully simple things, and I love what I do.
        </p>
      </ScrollAnimation>
      <img
        src={images.profileImage}
        className={styles.profileImg}
        alt={'profile'}
      />
      <ScrollAnimation
        animateIn="zoomIn"
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
        animateOnce
      >
        <img
          src={images.technologyTools}
          className={styles.technologyImage}
          alt={'technology'}
        />
      </ScrollAnimation>
    </div>
  );
}

export default JobTitleComponent;