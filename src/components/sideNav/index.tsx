import React, { useContext } from 'react';
import { ThemeContext } from '../../theme/themeContext';
import styles from './styles.module.scss';


interface Props {
  handleNav: () => void;
}

const SideNav: React.FC<Props> = (props: Props) => {
  const {
    theme,
  } = useContext(ThemeContext);
  return(
    <nav
      className={styles.navContainer}
      style={{
        backgroundColor: theme.palette.background.value
      }}
    >
      
    </nav>
  );
}

export default SideNav;