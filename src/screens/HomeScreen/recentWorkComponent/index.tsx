import React, { useContext } from 'react';
import { ThemeContext } from '../../../theme/themeContext';
import styles from './styles.module.scss';
import { images } from '../../../assets';
import ProjectsComponent from '../../../components/ProjectsComponent';

const RecentWorkComponent: React.FC = () => {
  const {
    theme,
  } = useContext(ThemeContext);
  return (
    <div
      className={styles.recentWorkSection}
    >
      <h1
        style={{
          color: theme.palette.primary.value,
          marginBottom: 20,
        }}
      >
        My Recent Work
      </h1>
      <p
        style={{
          color: theme.palette.primary.value,
          fontSize: 14
        }}
      >
        Here are a few recent design projects. Want to see more?
        <span
          className={styles.emailMeText}
        >
          Email me.
        </span>
      </p>
      <div
        className={styles.recentWorkCardsContainer}
      >
        <ProjectsComponent />
      </div>
    </div>
  );
}

export default RecentWorkComponent;