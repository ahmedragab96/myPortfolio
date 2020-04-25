import React, { useContext } from 'react';
import { ThemeContext } from '../../../theme/themeContext';
import styles from './styles.module.scss';
import { images } from '../../../assets';
import {Animated} from "react-animated-css";

const JobTitleComponent: React.FC = () => {
  const {
    theme,
  } = useContext(ThemeContext);
  return (
    <div
        className={styles.jobTitleContainer}
      >
        <Animated
          animationIn="bounce"
          animationOut="fadeOut"
          animationInDuration={1000}
          animationOutDuration={1000}
          isVisible={true}
        >
        <p
          className={styles.jobHeader}
          style={{
            color: theme.palette.primary.value
          }}
        >
          Full-Stack Developer
        </p>
        </Animated>
        <Animated
          animationIn="fadeInLeftBig"
          animationOut="fadeOut"
          animationInDuration={1000}
          animationOutDuration={1000}
          isVisible={true}
        >
        <p
          className={styles.jobdesc}
          style={{
            color: theme.palette.primary.value
          }}
        >
          I code beautifully simple things, and I love what I do.
        </p>
        </Animated>
        <img
          src={images.profileImage}
          className={styles.profileImg}
          alt={'profile'}
        />
        <Animated
          animationIn="fadeIn"
          animationOut="fadeOut"
          animationInDuration={3000}
          animationOutDuration={1000}
          isVisible={true}
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
        <img
          src={images.technologyTools}
          className={styles.technologyImage}
          alt={'technology'}
        />
        </Animated>
      </div>
  );
} 

export default JobTitleComponent;