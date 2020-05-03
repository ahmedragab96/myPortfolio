import React, { useContext } from 'react';
import NavBar from '../navbar';
import {
  Switch,
  Route,
} from 'react-router';
import HomeScreen from '../../screens/HomeScreen';
import { ThemeContext } from '../../theme/themeContext';
import SideNav from '../sideNav';

const Layout = () => {
  const {
    theme,
  } = useContext(ThemeContext);
  let sidenavOpened = false;

  const calcVW = () => {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }

  const handleNavButton = () => {
    const element: any = document.querySelector('html');
    if (sidenavOpened) {
      element.style.setProperty('--sidenav-translate-x', `-${Math.min(calcVW() / 100 * 90, 300)}px`);
      sidenavOpened = false;
    } else {
      element.style.setProperty('--sidenav-translate-x', '0');
      sidenavOpened = true;
    }
  }
  return(
    <div>
      <NavBar onNavClicked={handleNavButton}/>
      <div
       style={{
         backgroundColor: theme.palette.common.black,
       }}
      >
      <Switch>
        <Route
          path='/'
          component={HomeScreen}
        />
      </Switch>
      </div>
      <SideNav handleNav={handleNavButton}/>
    </div>
  );
}

export default Layout;