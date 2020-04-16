import React from 'react';
// import NavBar from '../navbar';
import {
  Switch,
  Route,
} from 'react-router';
import HomeScreen from '../../screens/HomeScreen';

const Layout = () => {
  return(
    <div>
      {/* <NavBar/> */}
      <Switch>
        <Route
          path='/'
          component={HomeScreen}
        />
      </Switch>
    </div>
  );
}

export default Layout;