import React, { useContext } from 'react';
import { ThemeContext } from '../../../../theme/themeContext';
import styles from './styles.module.scss';
import Carousel from 'react-elastic-carousel';
import { images } from '../../../../assets';

interface Props {

}


const TestimonialsCard: React.FC<Props> = (props: Props) => {
  const {
    theme,
  } = useContext(ThemeContext);
  return (
      <div
        className={styles.TestimonialsCardContainer}
        style={{
          backgroundImage: `url(${images.testimonialBackGround})`
        }}
      >
        <div
          className={styles.cardPersonSection}
        >
          <div
            className={styles.cardPersonDetails}
          >
            <img
              alt={'profile'}
              src={images.profileImage}
              style={{
                width: 70,
              }}
            />
            <div
              className={styles.nameContainer}
            >
              <p
                className={styles.name}
              >
                Momen Hesham
              </p>
              <p
                className={styles.title}
              >
                Designer
              </p>
            </div>
          </div>
          <img
              alt={'profile'}
              src={images.quoteIcon}
              style={{
                width: 25,
                height: 20,
                marginTop: 10
              }}
            />
        </div>
        <p>
            Ragab’s a clear communicator with the tenacity and confidence to really dig in to tricky design scenarios and the collaborative friction that's needed to produce excellent work.
        </p>
      </div>
  );
}

export default TestimonialsCard;