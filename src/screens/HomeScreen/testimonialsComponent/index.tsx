import React, { useContext } from 'react';
import { ThemeContext } from '../../../theme/themeContext';
import styles from './styles.module.scss';


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
        <p>
          Testimonials
        </p>
        <p>
          People I've worked with have said some nice things...   
        </p>
      </div>
  );
}

export default TestimonialsComponent;