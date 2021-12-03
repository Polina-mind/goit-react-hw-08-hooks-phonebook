import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/auth-operations';

function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeName = event => {
    setName(event.target.value);
  };

  const handleChangeEmail = event => {
    setEmail(event.target.value);
  };

  const handleChangePassword = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h1 className="Title">Страница регистрации</h1>

      <form type="submit" onSubmit={handleSubmit} className="Form">
        <label className="Label">
          Имя
          <input
            className="Input"
            value={name}
            onChange={handleChangeName}
            type="text"
            name="name"
            placeholder="Polina"
            required
          />
        </label>

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
          Зарегистрироваться
        </button>
      </form>
    </>
  );
}

export default RegisterView;
