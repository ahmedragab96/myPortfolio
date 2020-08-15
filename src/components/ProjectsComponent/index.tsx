import React, { useContext } from 'react';
import { ThemeContext } from '../../theme/themeContext';
import styles from './styles.module.scss';
import { images } from '../../assets';
import FlipCard from '../../components/flippingCard';

export interface Project {
  image: string;
  name: string;
  description: string;
  link?: string;
}

const projects: Project[] = [
  {
    name: 'Wadi Degla',
    image: images.wadideglaLogo,
    description: 'It\'s website and mobile app for a famous sports club branches, It\'s made with ReactJs, mobX , NodeJs, MSsQL and React Native.',
    link: 'https://deglawyfamily.wadidegla.com/',
  },
  {
    name: 'iEvent',
    image: images.eventsLogo,
    description: 'It\'s website for making and booking Events made with ReactJs and apollo for frontEnd with NodeJs, Graphql and Mongo for BackEnd.',
    link: 'https://github.com/ahmedragab96/BookingApp-Backend',
  },
  {
    name: 'Xplore Egypt',
    image: images.xploreEgyptLogo,
    description: 'A virtual assistant for tourists coming to Egypt, help recommending hotels, trips and restaurants.It\'s a Website and Mobile Application written in angular 6 and ionic for front end and NodeJS for Back end.',
    link: 'https://github.com/ahmedragab96/Xplore_Egypt',
  },
  {
    name: 'Chat App',
    image: images.chatAppLogo,
    description: 'A Real time chat app with sending images and videos, written in ReactJs, Redux, NodeJs with socket.io and AWS S3 for files.',
    link: 'https://chat-app-5ac4a.web.app/',
  },
  {
    name: 'Panademic Free',
    image: images.panademicfree,
    description: 'A Progressive web app that allows user to add a link to any panademic free resources that gets available any time.',
    link: 'https://pandemicfree.tech/',
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
                        marginBottom: 20,
                        fontWeight: 'bold',
                        fontSize: 18
                      }}
                    >
                      {project.name}
                    </p>
                    <p
                      style={{
                        margin: '0px 0px 5px 0px'
                      }}
                    >
                      {project.description}
                    </p>
                    <p
                      className={styles.readMoreText}
                      onClick={ project.link ?() => { window.open(project.link);} : () => {}}
                    >
                      View More...
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