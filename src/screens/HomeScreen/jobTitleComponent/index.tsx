import React, { useContext } from 'react';
import { ThemeContext } from '../../../theme/themeContext';
import styles from './styles.module.scss';
import { images } from '../../../assets';

const JobTitleComponent: React.FC = () => {
  const {
    theme,
  } = useContext(ThemeContext);
  return (
    <div
        className={styles.jobTitleContainer}
      >
        <p
          className={styles.jobHeader}
          style={{
            color: theme.palette.primary.value
          }}
        >
          Full-Stack Developer
        </p>
        <p
          className={styles.jobdesc}
          style={{
            color: theme.palette.primary.value
          }}
        >
          I code beautifully simple things, and I love what I do.
        </p>
        <img
          src={images.profileImage}
          className={styles.profileImg}
          alt={'profile'}
        />
        <img
          src={images.technologyTools}
          className={styles.technologyImage}
          alt={'technology'}
        />
      </div>
  );
} 

export default JobTitleComponent;