import React, { useContext } from 'react';
import { ThemeContext } from '../../../theme/themeContext';
import styles from './styles.module.scss';
import { images } from '../../../assets';

const CollaborateComponent: React.FC = () => {
  const {
    theme,
  } = useContext(ThemeContext);
  return (
    <div
      className={styles.collaborateSction}
      style={{
        backgroundColor: theme.palette.surface.value,
      }}
    >
      <p
        className={styles.collaborateHeader}
        style={{
          color: theme.palette.primary.value
        }}
      >
        Interested in collaborating or investing?
      </p>
      <p
        className={styles.collaborateDesc}
        style={{
          color: theme.palette.primary.value
        }}
      >
        I’m always open to discussing product design work or partnership opportunities.
      </p>
      <div
        className={styles.collaborateAction}
        style={{
          backgroundColor: '#3BC2ED'
        }}
      >
        <p
          className={styles.actionText}
          style={{
            color: theme.palette.background.value
          }}
        >
          Start Conversation
        </p>
      </div>
    </div>
  );
}

export default CollaborateComponent;