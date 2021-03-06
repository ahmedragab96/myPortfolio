import React, { useContext } from 'react';
import { ThemeContext } from '../../../theme/themeContext';
import styles from './styles.module.scss';
import { images } from '../../../assets';
import ScrollAnimation from 'react-animate-on-scroll';

const handleSendEmail = () => {
  let element      = document.createElement("a");
  element.href     = "mailto: hamadar1996@gmail.com?subject=Opportunity for collaboration";
  element.click();
}


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
      <ScrollAnimation animateIn="fadeInDown" duration={2}>
      <p
        className={styles.collaborateHeader}
        style={{
          color: theme.palette.primary.value
        }}
      >
        Interested in collaborating or investing?
      </p>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp" duration={2}>
      <p
        className={styles.collaborateDesc}
        style={{
          color: theme.palette.primary.value
        }}
      >
        I’m always open to discussing product design work or partnership opportunities.
      </p>
      </ScrollAnimation>
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
          onClick={handleSendEmail}
        >
          Start Conversation
        </p>
      </div>
    </div>
  );
}

export default CollaborateComponent;