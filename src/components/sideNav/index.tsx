import React, { useContext } from 'react';
import { ThemeContext } from '../../theme/themeContext';
import styles from './styles.module.scss';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PanToolRoundedIcon from '@material-ui/icons/PanToolRounded';
import { images } from '../../assets';

interface Props {
  handleNav: () => void;
}

const handleDownloadResume = () => {
  let element      = document.createElement("a");
  element.href     = images.resume;
  element.download = `Ahmed Ragab-CurriculumVitae.pdf`;
  element.click();
}

const handleSendEmail = () => {
  let element      = document.createElement("a");
  element.href     = "mailto: hamadar1996@gmail.com?subject=Say Hello";
  element.click();
}


const SideNav: React.FC<Props> = (props: Props) => {
  const {
    theme,
  } = useContext(ThemeContext);
  return (
    <nav
      className={styles.navContainer}
      style={{
        backgroundColor: theme.palette.background.value
      }}
    >
      <div
        className={styles.navContentContainer}
      >
        <div
         className={styles.navItem}
         onClick={() => {handleDownloadResume()}}
        >
          <AssignmentIcon fontSize='large' />
          <p
            className={styles.navItemText}
          >
            My Resume
          </p>
        </div>
        <div
         className={styles.navItem}
         onClick={() => {handleSendEmail()}}
        >
          <PanToolRoundedIcon fontSize='large' />
          <p
            className={styles.navItemText}
          >
            Say Hello
          </p>
        </div>
      </div>
    </nav>
  );
}

export default SideNav;