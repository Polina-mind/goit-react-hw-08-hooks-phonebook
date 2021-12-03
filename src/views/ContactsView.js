import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../components/Form';
import Contacts from '../components/Contacts';
import Filter from '../components/Filter';
import { fetchContacts } from '../redux/operations';
import { getLoading } from '../redux/selectors';

function ContactsView() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(getLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h2 className="Title">Добавить контакт</h2>
      <Form></Form>

      <h2 className="Title">Список </h2>
      <Filter></Filter>

      {isLoadingContacts && <h1>Loading...</h1>}
      <Contacts></Contacts>
    </>
  );
}

export default ContactsView;
