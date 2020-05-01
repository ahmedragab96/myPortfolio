import React from 'react'
import ReactCardCarousel from 'react-card-carousel';
import { images } from '../../assets';
import styles from './styles.module.scss';
 
class Gallery extends React.Component {

  static get CARD_STYLE() {
    return {
      height: '200px',
      width: '200px',
      paddingTop: '80px',
      textAlign: 'center',
      background: '#52C0F5',
      color: '#FFF',
      fontSize: '12px',
      textTransform: 'uppercase',
      borderRadius: '10px',
    };
  }

 
  render() {

 
    return (
      <div>
        <ReactCardCarousel autoplay={ true } autoplay_speed={ 2500 }>
          <div className={styles.imageConatiner}>
            First Card
          </div>
          <div className={styles.imageConatiner}>
            Second Card
          </div>
          <div className={styles.imageConatiner}>
            Third Card
          </div>
          <div className={styles.imageConatiner}>
            Fourth Card
          </div>
          <div className={styles.imageConatiner}>
            Fifth Card
          </div>
      </ReactCardCarousel>
      </div>
    )
  }
}

export default Gallery;