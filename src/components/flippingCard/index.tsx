import React, { useContext } from 'react';
import { ThemeContext } from '../../theme/themeContext';
import styles from './styles.module.scss';
import { images } from '../../assets';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

export interface Props {
  FrontComponent: React.ReactElement;
  BackComponent: React.ReactElement;
}


const FlipCard = (props: Props) => {

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