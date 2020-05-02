import React, { useContext } from 'react';
import { ThemeContext } from '../../../../theme/themeContext';
import styles from './styles.module.scss';
import Carousel from 'react-elastic-carousel';

interface Props {

}


const TestimonialsCard: React.FC<Props> = (props: Props) => {
  const {
    theme,
  } = useContext(ThemeContext);
  return (
      <div
        className={styles.TestimonialsCardContainer}
      >
        1
      </div>
  );
}

export default TestimonialsCard;