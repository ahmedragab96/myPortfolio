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
          <TestimonialsCard
            name='Momen Hesham'
            title='Designer'
            message="Ragab’s a clear communicator with the tenacity and confidence to really dig in to tricky design scenarios and the collaborative friction that's needed to produce excellent work."
          />
          <TestimonialsCard
            name='Rami El sawy'
            title='CEO'
            message="Ahmed has excellent commitment to the tasks in hand, he also proved to be a very fast learner
              as he moved from one technology to another. In addition to his technical skills, he has great
              communication skills that proved essential to making sure everyone on his team was on the
              same page.
              Ahmed would be a tremendous asset for your company and has my highest recommendation."
          />
          <TestimonialsCard
            name='Momen Hesham'
            title='Designer'
            message="Ragab’s a clear communicator with the tenacity and confidence to really dig in to tricky design scenarios and the collaborative friction that's needed to produce excellent work."
          />
          <TestimonialsCard
            name='Momen Hesham'
            title='Designer'
            message="Ragab’s a clear communicator with the tenacity and confidence to really dig in to tricky design scenarios and the collaborative friction that's needed to produce excellent work."
          />
      </Carousel>
      </div>
  );
}

export default TestimonialsComponent;