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
      <ScrollAnimation animateIn="fadeInLeft" duration={2} animateOnce>
      <p
        className={styles.nameText}
        style={{
          color: theme.palette.primary.value
        }}
      >
        Hi, I’m Ragab. Nice to meet you.
      </p>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInRight" duration={2} animateOnce>
      <p
        className={styles.introText}
        style={{
          color: theme.palette.primary.value
        }}
      >
        I'm a passionate software engineer, I love learning new skills every day, I don't like anything to stop me, I always say "No one is perfect if I lack a skill, I'll learn it in no time", I hope to find an interesting environment That will help me learn new things -not just in software- and level up my skills.

        <p
          style={{
            marginTop: 5,
            marginBottom: 5,
          }}
        >I'm a very open person to different cultures, I like watching movies from all over the world to try to understand different cultures, I hope to travel the world one day and learn new traditions and spread my own culture.</p>

        I worked with many different programming languages: <b>C++, Python, Javascript </b>with different frameworks: <b>Node.js, ReactJs, React Native and Angular</b>, each language has it's role in helping me understand programming more and more and now I'm more focused on working with Javascript and it's frameworks.
      </p>
      </ScrollAnimation>
    </div>
  );
}

export default IntroductionComponent;