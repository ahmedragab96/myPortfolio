import React, { useContext } from 'react';
import { ThemeContext } from '../../../theme/themeContext';
import styles from './styles.module.scss';
import Carousel from 'react-elastic-carousel';
import TestimonialsCard from './testimonialCard';


const TestimonialsComponent: React.FC = () => {
  const {
    theme,
  } = useContext(ThemeContext);
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
          itemsToShow={2}
          style={{
            margin: 30,
            paddingTop: 50,
            paddingBottom: 50,
            width: '80%'
          }}
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