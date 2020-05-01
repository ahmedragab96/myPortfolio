import React, { useContext } from 'react';
import { ThemeContext } from '../../../theme/themeContext';
import styles from './styles.module.scss';
import { images } from '../../../assets';
import Carousel from 'react-elastic-carousel';
import ScrollAnimation from 'react-animate-on-scroll';

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
      <Carousel itemsToShow={6}
        style={{
          margin: 30,
          paddingTop: 50,
          paddingBottom: 50,
          width: '80%'
        }}
        enableSwipe
        showArrows={false}
        pagination={false}
        itemPadding={[0,0,50,0]}
        >
         <ScrollAnimation
        animateIn="fadeInUp"
        // animateOut="fadeInDown"
        // animateOnce
        delay={100}
      > 
        <div
          style={{
            height: '10vw',
            backgroundColor: '#F6F6F6',
            border: '1px solid #F2F2F2',
            width: '10vw',
            borderRadius: 5,
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <img
            alt='logo'
            src={images.nodeLogo}
            width={100}
          />
        </div>
        </ScrollAnimation>
        <ScrollAnimation
        animateIn="fadeInUp"
        // animateOut="fadeInDown"
        // animateOnce
        delay={200}
      > 
        <div
          style={{
            height: '10vw',
            backgroundColor: '#F6F6F6',
            border: '1px solid #F2F2F2',
            width: '10vw',
            borderRadius: 5,
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center'
          }}
        ><img
        alt='logo'
        src={images.nodeLogo}
        width={100}
      /></div>
        </ScrollAnimation>
        <ScrollAnimation
        animateIn="fadeInUp"
        // animateOut="fadeInDown"
        // animateOnce
        delay={300}
      > 
        <div
          style={{
            height: '10vw',
            backgroundColor: '#F6F6F6',
            border: '1px solid #F2F2F2',
            width: '10vw',
            borderRadius: 5,
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <img
            alt='logo'
            src={images.nodeLogo}
            width={100}
          />
        </div>
        </ScrollAnimation>
        <ScrollAnimation
        animateIn="fadeInUp"
        // animateOut="fadeInDown"
        // animateOnce
        delay={400}
      > 
        <div
          style={{
            height: '10vw',
            backgroundColor: '#F6F6F6',
            border: '1px solid #F2F2F2',
            width: '10vw',
            borderRadius: 5,
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <img
            alt='logo'
            src={images.nodeLogo}
            width={100}
          />
        </div>
        </ScrollAnimation>
        <ScrollAnimation
        animateIn="fadeInUp"
        // animateOut="fadeInDown"
        // animateOnce
        delay={500}
      > 
        <div
          style={{
            height: '10vw',
            backgroundColor: '#F6F6F6',
            border: '1px solid #F2F2F2',
            width: '10vw',
            borderRadius: 5,
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <img
            alt='logo'
            src={images.nodeLogo}
            width={100}
          />
        </div>
        </ScrollAnimation>
        <ScrollAnimation
        animateIn="fadeInUp"
        // animateOut="fadeInDown"
        // animateOnce
        delay={600}
      > 
        <div
          style={{
            height: '10vw',
            backgroundColor: '#F6F6F6',
            border: '1px solid #F2F2F2',
            width: '10vw',
            borderRadius: 5,
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <img
            alt='logo'
            src={images.nodeLogo}
            width={100}
          />
        </div>
        </ScrollAnimation>
      </Carousel>
    </div>
  );
}

export default SkillsComponent;