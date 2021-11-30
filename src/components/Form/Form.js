import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/operations';
import './Form.css';

function Form() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = useCallback(
    event => setName(event.target.value),
    [],
  );
  const handleChangeNumber = useCallback(
    event => setNumber(event.target.value),
    [],
  );

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      if (name === '' && number === '') {
        return alert('Нет имени или номера для сохранения контакта!');
      }

      dispatch(addContact(name, number));

      setName('');
      setNumber('');
    },
    [dispatch, name, number],
  );

  return (
    <form type="submit" onSubmit={handleSubmit} className="Form">
      <label className="Label">
        Имя
        <input
          className="Input"
          value={name}
          onChange={handleChangeName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          // placeholder="Polina"
          required
        />
      </label>

      <label className="Label">
        Номер
        <input
          className="Input"
          value={number}
          onChange={handleChangeNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          // placeholder="000-00-00"
          required
        />
      </label>

      <button type="submit" className="Button">
        Добавить
      </button>
    </form>
  );
}

export default Form;
