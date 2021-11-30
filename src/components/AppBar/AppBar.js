import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserNav from '../UserNav';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

import './AppBar.css';

function AppBar() {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <header>
      <Navigation />

      {isAuthenticated ? <UserNav /> : <AuthNav />}
    </header>
  );
}

export default AppBar;
