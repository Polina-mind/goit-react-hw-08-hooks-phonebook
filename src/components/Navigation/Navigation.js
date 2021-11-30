import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';
import './Navigation.css';

function Navigation() {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <ul className="NavLinks">
      <li>
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Главная
        </NavLink>
      </li>
      <li>
        {isAuthenticated && (
          <NavLink
            to="/contacts"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Контакты
          </NavLink>
        )}
      </li>
    </ul>
  );
}

export default Navigation;
