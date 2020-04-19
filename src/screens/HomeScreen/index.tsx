import React, { useContext } from 'react';
import { ThemeContext } from '../../theme/themeContext';
import styles from './styles.module.scss';
import { images } from '../../assets';
import Gallery from '../../components/imageSlider';

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
      <div
        className={styles.introductionSction}
        style={{
          backgroundColor: theme.palette.surface.contrast
        }}
      >
        <p
          className={styles.nameText}
          style={{
            color: theme.palette.primary.value
          }}
        >
          Hi, I’m Ragab. Nice to meet you.
        </p>
        <p
          className={styles.introText}
          style={{
            color: theme.palette.primary.value
          }}
        >
        Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time. 
        </p>
      </div>
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
      <div
        className={styles.collaborateSction}
        style={{
          backgroundColor: theme.palette.surface.value
        }}
      >
      <p
          className={styles.collaborateHeader}
          style={{
            color: theme.palette.primary.value
          }}
        >
            Interested in collaborating or investing?
        </p>
        <p
          className={styles.collaborateDesc}
          style={{
            color: theme.palette.primary.value
          }}
        >
            I’m always open to discussing product design work or partnership opportunities.
        </p>
        <div
          className={styles.collaborateAction}
        >
          <p
            className={styles.actionText}
          >
            Start Conversation
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;