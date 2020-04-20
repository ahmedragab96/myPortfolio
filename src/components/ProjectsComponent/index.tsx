import React, { useContext } from 'react';
import { ThemeContext } from '../../theme/themeContext';
import styles from './styles.module.scss';
import { images } from '../../assets';
import FlipCard from '../../components/flippingCard';

export interface Project {
  image: string;
  name: string;
  description: string;
}

const projects: Project[] = [
  {
    name: 'Wadi Degla',
    image: images.wadideglaLogo,
    description: 'It\'s website and mobile app for a famous sports club branches, lorem ipsem elefate dolres'
  },
  {
    name: 'Wadi Degla',
    image: images.wadideglaLogo,
    description: 'It\'s website and mobile app for a famous sports club branches, lorem ipsem elefate dolres'
  },
  {
    name: 'Wadi Degla',
    image: images.wadideglaLogo,
    description: 'It\'s website and mobile app for a famous sports club branches, lorem ipsem elefate dolres'
  }
];


const ProjectsComponent = () => {

  return (
    <>
      {
        projects.map((project: Project) => {
          return (
            <FlipCard
              FrontComponent={
                <img
                  src={project.image}
                  alt={'logo'}
                  className={styles.cardImage}
                />
              }
              BackComponent={
                <div
                  className={styles.BackCardContainer}
                >
                  <img
                    src={images.wadideglaBack}
                    alt={'logo'}
                    className={styles.cardImage}
                  />
                  <div
                    className={styles.BackCardTextContainer}
                  >
                    <p
                      style={{
                        marginBottom: 10
                      }}
                    >
                      {project.name}
                    </p>
                    <p>
                      {project.description}
                    </p>
                    <p
                      className={styles.readMoreText}
                      onClick={() => { alert() }}
                    >
                      Read More -->
                    </p>
                  </div>
                </div>
              }
            />
          );
        })
      }
    </>
  );
}

export default ProjectsComponent;