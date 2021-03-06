import LinkedIn from './images/linkedIn';
import Github from './images/github';
import Email from './images/email';
import Twitter from './images/twitter';
import Pintrest from './images/pintrest';
import Credits from './images/credits';


interface ImagesInterface {
  lightLogo: string;
  darkLogo: string;
  technologyTools: string;
  lightToggler: string;
  darkToggler: string;
  profileImage: string;
  wadideglaLogo: string;
  wadideglaBack: string;
  nodeLogo: string;
  angularLogo: string;
  mobxLogo: string;
  reactLogo: string;
  mysqlLogo: string;
  mongoLogo: string;
  testimonialBackGround: string;
  quoteIcon: string;
  resume: string;
  eventsLogo: string;
  xploreEgyptLogo: string;
  chatAppLogo: string,
  linkedIn: JSX.Element;
  github: JSX.Element;
  email: JSX.Element;
  twitter: JSX.Element;
  pintrest: JSX.Element;
  credits: JSX.Element;
  panademicfree: string;
}

export const images: ImagesInterface = {
  lightLogo: require('../assets/images/lightLogo.png'),
  darkLogo: require('../assets/images/darkLogo.png'),
  technologyTools: require('../assets/images/technologyTools.png'),
  lightToggler: require('../assets/images/lightToggler.png'),
  darkToggler: require('../assets/images/darkToggler.png'),
  profileImage: require('../assets/images/profilePicture.png'),
  wadideglaLogo: require('../assets/images/wadideglaLogo.png'),
  wadideglaBack: require('../assets/images/wadideglaBack.png'),
  nodeLogo: require('../assets/images/nodejs.png'),
  mobxLogo: require('../assets/images/mobx.png'),
  angularLogo: require('../assets/images/angular.png'),
  reactLogo: require('../assets/images/react.png'),
  mysqlLogo: require('../assets/images/MySQL.png'),
  mongoLogo: require('../assets/images/mongo.png'),
  testimonialBackGround: require('../assets/images/quotebackground.png'),
  quoteIcon: require('../assets/images/quoteIcon.png'),
  resume: require('../assets/resume/Ahmed_Ragab_CV.pdf'),
  eventsLogo: require('../assets/images/eventsLogo.jpg'),
  xploreEgyptLogo: require('../assets/images/xploreEgypt.jpg'),
  chatAppLogo: require('../assets/images/chatIcon.png'),
  panademicfree: require('../assets/images/panademicfree.png'),
  linkedIn: LinkedIn,
  github: Github,
  email: Email,
  twitter: Twitter,
  pintrest: Pintrest,
  credits: Credits,
};