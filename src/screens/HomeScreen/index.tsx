import React, { useContext } from 'react';
import { ThemeContext } from '../../theme/themeContext';
import styles from './styles.module.scss';
import Footer from '../../components/foorter';
import JobTitleComponent from './jobTitleComponent';
import IntroductionComponent from './introductionComponent';
import SkillsComponent from './skillsComponent';
import CollaborateComponent from './collaborateComponent';
import RecentWorkComponent from './recentWorkComponent';
import TestimonialsComponent from './testimonialsComponent';

const HomeScreen = () => {
  const {
    theme,
  } = useContext(ThemeContext);
  return (
    <div
     className={styles.homeContainer}
     style={{
      backgroundColor: theme.palette.common.black
     }}
    >
      <JobTitleComponent/>
      <IntroductionComponent/>
      <SkillsComponent/>
      <CollaborateComponent/>
      <RecentWorkComponent/>
      <TestimonialsComponent/>
      <Footer/>
    </div>
  );
}

export default HomeScreen;