import React, { useContext } from 'react';
import { ThemeContext } from '../../../theme/themeContext';
import styles from './styles.module.scss';
import { images } from '../../../assets';
import Carousel from 'react-elastic-carousel';
import SkillCard from './skillCard';

const skillsImages: string[] = [
  images.nodeLogo,
  images.mobxLogo,
  images.angularLogo,
  images.reactLogo,
  images.mysqlLogo,
  images.mongoLogo
];

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
      <div
        className={styles.items}
      >
        { 
          skillsImages.map((image: string, index: number) => {
            return (
              <SkillCard
                skillImage={image}
                animationDelay={ 100 * (index + 1)}
                stylesClass={styles.item}
              />
            );
          })
        }
      </div>
    </div>
  );
}

export default SkillsComponent;