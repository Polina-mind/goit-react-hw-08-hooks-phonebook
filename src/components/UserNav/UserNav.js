import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';
import './UserNav.css';

function UserNav() {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  const onLogout = useCallback(() => dispatch(logOut()), [dispatch]);

  return (
    <ul className="AuthLinks">
      <li>
        <p className="Text">{name}</p>
      </li>
      <li>
        <button className="LogoutBtn" type="button" onClick={onLogout}>
          Выход
        </button>
      </li>
    </ul>
  );
}

export default UserNav;
