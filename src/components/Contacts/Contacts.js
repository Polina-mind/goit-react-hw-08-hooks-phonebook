import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import './Contacts.css';
import { getVisibleContacts } from '../../redux/selectors';

function Contacts() {
  const contacts = useSelector(getVisibleContacts);

  const dispatch = useDispatch();
  const onDelete = id => dispatch(deleteContact(id));

  return (
    <section className="Contacts">
      <ul className="ContactsList">
        {contacts.map(({ id, name, number }) => (
          <li className="Item" key={id}>
            <span className="Name">{name}:</span>
            <span className="Number">{number}</span>
            <button
              className="ButtonDelete"
              type="submit"
              onClick={() => onDelete(id)}
              id={id}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Contacts;
