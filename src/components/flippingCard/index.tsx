import React, { useContext } from 'react';
import { ThemeContext } from '../../theme/themeContext';
import styles from './styles.module.scss';
import { images } from '../../assets';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

export interface Props {
  FrontComponent: React.ReactElement;
  BackComponent: React.ReactElement;
}


const FlipCard =  (props: Props) => {

  const calcVW = () => {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }

  const getCardWidth = () => {
    console.log(calcVW());
    let cardWidth = '25%';
    if (calcVW() < 576) {
      cardWidth = '100%';
    }
    return cardWidth;
  }
  const getCardMargin = () => {
    console.log(calcVW());
    let cardMargin = '2%';
    if (calcVW() < 576) {
      cardMargin = '2% 0 2% 0';
    }
    return cardMargin;
  }
  return (
    <Flippy
      flipOnHover={true}
      flipOnClick={true}
      flipDirection="horizontal"
      style={{
        width: getCardWidth(),
        height: 200,
        margin: getCardMargin(),
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
        {props.FrontComponent}
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
        {props.BackComponent}
      </BackSide>
    </Flippy>
  );
}

export default FlipCard;