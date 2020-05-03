import React, { useContext } from 'react';
import { ThemeContext } from '../../../theme/themeContext';
import styles from './styles.module.scss';
import Carousel from 'react-elastic-carousel';
import TestimonialsCard from './testimonialCard';


const TestimonialsComponent: React.FC = () => {
  const {
    theme,
  } = useContext(ThemeContext);
  const calcVW = () => {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }
  const getNumberOfItems = () => {
    console.log(window.innerWidth);
    let numberOfItems = 2;
    if (calcVW() < 770) {
      numberOfItems = 1;
    }
    return numberOfItems;
  }
  return (      
      <div
        className={styles.TestimonialsScetion}
        style={{
          backgroundColor: theme.palette.background.value
        }}
      >
        <p
          style={{
            color: theme.palette.primary.value,
          }}
          className={styles.testimonialsHeader}
        >
          Testimonials
        </p>
        <p
        style={{
          color: theme.palette.primary.value
        }}
        className={styles.testimonialsDesc}
        >
          People I've worked with have said some nice things...   
        </p>
        <Carousel
          itemsToShow={getNumberOfItems()}
          className={styles.carousalContainer}
          enableSwipe
          showArrows={false}
          itemPadding={[0,0,50,0]}
        >
          <TestimonialsCard/>
          <TestimonialsCard/>
          <TestimonialsCard/>
          <TestimonialsCard/>
      </Carousel>
      </div>
  );
}

export default TestimonialsComponent;