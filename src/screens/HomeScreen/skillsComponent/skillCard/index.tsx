import React, { useContext } from 'react';
import { ThemeContext } from '../../../../theme/themeContext';
import styles from './styles.module.scss';
import ScrollAnimation from 'react-animate-on-scroll';

interface Props {
  skillImage: string;
  animationDelay: number;
  stylesClass: any;
}

const SkillCard: React.FC<Props> = (props: Props) => {
  const {
    theme,
  } = useContext(ThemeContext);
  return (
    <ScrollAnimation
      animateIn="fadeInUp"
      animateOut="fadeInDown"
      delay={props.animationDelay}
      className={props.stylesClass}
    >
      <div
        className={styles.skillCardContainer}
        style={{
          backgroundColor: theme.palette.background.disabledContrast,
          borderColor: theme.palette.surface.disabledContrast,
        }}
      >
        <img
          alt='logo'
          src={props.skillImage}
          className={styles.skillImage}
        />
      </div>
    </ScrollAnimation>
  );
}

export default SkillCard;