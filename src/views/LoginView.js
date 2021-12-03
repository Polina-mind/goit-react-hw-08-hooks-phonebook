import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/auth-operations';

function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = event => {
    setEmail(event.target.value);
  };

  const handleChangePassword = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h1 className="Title">Страница логина</h1>

      <form type="submit" onSubmit={handleSubmit} className="Form">
        <label className="Label">
          Почта
          <input
            className="Input"
            type="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
            placeholder="Name@mail.com"
            required
          />
        </label>

        <label className="Label">
          Пароль
          <input
            className="Input"
            type="password"
            name="password"
            value={password}
            onChange={handleChangePassword}
            autoComplete="off"
            required
          />
        </label>

        <button type="submit" className="Button">
          Войти
        </button>
      </form>
    </>
  );
}

export default LoginView;
