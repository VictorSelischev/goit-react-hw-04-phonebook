import { ContactForm } from './ContactForm/ContactForm';
import { Section } from './Section/Section';
import { ContactsList } from './Contacts/ContactsList';
import { Filter } from './Filter/Filter';
import { useState, useEffect } from 'react';
import { save, load } from '../services/utilitsLocalStorage';

//     contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ]

export const App = () => {
  const CONTACTS_KEY = 'contacts';

  const [contacts, setContacts] = useState(() => {
    return load(CONTACTS_KEY) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    save(CONTACTS_KEY, contacts);
  }, [contacts]);

  const addContact = data => {
    contacts.find(
      contact => data.name.toLowerCase() === contact.name.toLocaleLowerCase()
    )
      ? alert(`${data.name} is already in contacts`)
      : setContacts(contacts => [data, ...contacts]);
  };

  const deleteContact = contactId => {
    const newArray = contacts.filter(contact => contact.id !== contactId);
    setContacts(newArray);
  };

  const handleChangeFilter = evt => {
    setFilter(evt.target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#c0ddff',
      }}
    >
      <Section title={'Phonebook'}>
        <ContactForm onSubmitProp={addContact} />
      </Section>
      <Section title={'Contacts'}>
        <Filter filter={filter} changeFilter={handleChangeFilter} />
        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      </Section>
    </div>
  );
};