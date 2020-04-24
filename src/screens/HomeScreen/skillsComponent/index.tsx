import React, { useContext } from 'react';
import { ThemeContext } from '../../../theme/themeContext';
import styles from './styles.module.scss';
import { images } from '../../../assets';

const SkillsComponent: React.FC = () => {
  const {
    theme,
  } = useContext(ThemeContext);
  return (
    <div
      className={styles.skillsSection}
    >
      <p
        className={styles.skillsHeader}
        style={{
          color: theme.palette.primary.value
        }}
      >
        My Skills
      </p>
      <p
        className={styles.skillsDesc}
        style={{
          color: theme.palette.primary.value
        }}
      >
        Here are a few recent design projects. Want to see more? Email me.
      </p>
      {/* <Gallery/> */}
    </div>
  );
}

export default SkillsComponent;