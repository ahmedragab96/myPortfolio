import React, { useContext } from 'react';
import NavBar from '../navbar';
import {
  Switch,
  Route,
} from 'react-router';
import HomeScreen from '../../screens/HomeScreen';
import { ThemeContext } from '../../theme/themeContext';

const Layout = () => {
  const {
    theme,
  } = useContext(ThemeContext);
  return(
    <div>
      <NavBar/>
      <div
       style={{
         backgroundColor: theme.palette.common.black
       }}
      >
      <Switch>
        <Route
          path='/'
          component={HomeScreen}
        />
      </Switch>
      </div>
    </div>
  );
}

export default Layout;