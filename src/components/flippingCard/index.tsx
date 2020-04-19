import React, { useContext } from 'react';
import { ThemeContext } from '../../theme/themeContext';
import styles from './styles.module.scss';
import { images } from '../../assets';
import Flippy, { FrontSide, BackSide } from 'react-flippy';


const FlipCard = () => {

  return (
    <Flippy
      flipOnHover={true}
      flipOnClick={true}
      flipDirection="horizontal"
      style={{
        width: '25%',
        height: 200,
        margin: '2%',
      }}
    >
      <FrontSide
        style={{
          borderRadius: 10,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          padding: 0
        }}
      >
        <img
          src={images.wadideglaLogo}
          alt={'logo'}
          style={{
            width: '100%',
            height: '100%'
          }}
        />
      </FrontSide>
      <BackSide
        style={{
          borderRadius: 10,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          padding: 0
        }}
      >
        <div
          style={{
            position: 'absolute',
            display: 'inline-block',
            width: '100%',
              height: '100%'
          }}
        >
          <img
            src={images.wadideglaBack}
            alt={'logo'}
            style={{
              width: '100%',
              height: '100%'
            }}
          />
          <p
            style={{
              position: 'absolute',

              zIndex: 999,
      
              margin: '0 auto',
      
              left: 0,
      
              right: 0,
      
              top: '40%', /* Adjust this value to move the positioned div up and down */
      
              textAlign: 'center',
      
              // width: '60%', /* Set the width of the positioned div */
            }}
          >
            wadi degla
          </p>
        </div>
      </BackSide>
    </Flippy>
  );
}

export default FlipCard;