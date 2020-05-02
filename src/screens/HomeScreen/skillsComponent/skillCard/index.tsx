import React, { useContext } from 'react';
import { ThemeContext } from '../../../../theme/themeContext';
import styles from './styles.module.scss';
import ScrollAnimation from 'react-animate-on-scroll';

interface Props {
  skillImage: string;
  animationDelay: number;
  imageWidth: number;
}

const SkillCard: React.FC<Props> = (props: Props) => {
  return (
    <ScrollAnimation
      animateIn="fadeInUp"
      animateOut="fadeInDown"
      delay={props.animationDelay}
    >
      <div
        className={styles.skillCardContainer}
      >
        <img
          alt='logo'
          src={props.skillImage}
          width={props.imageWidth}
        />
      </div>
    </ScrollAnimation>
  );
}

export default SkillCard;