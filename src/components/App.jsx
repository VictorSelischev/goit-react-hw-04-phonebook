import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Section } from './Section/Section';
import { ContactsList } from './Contacts/ContactsList';
import { Filter } from './Filter/Filter';

class App extends Component {
  CONTACTS_KEY = 'contacts';

  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const localContacts = this.load(this.CONTACTS_KEY);

    if (localContacts !== undefined) {
      this.setState({ contacts: localContacts });
    }
  }

  componentDidUpdate() {
    const { contacts } = this.state;
    this.save(this.CONTACTS_KEY, contacts);
  }

  componentWillUnmount() {}

  save = (key, value) => {
    try {
      const serializedState = JSON.stringify(value);
      localStorage.setItem(key, serializedState);
    }
    catch (error) {
      console.error("Set state error: ", error.message);
    }
  }

  load = key => {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? undefined : JSON.parse(serializedState);
    }
    catch (error) {
      console.error("Get state error: ", error.message);
    }
  }

  addContact = data => {
    this.state.contacts.find(
      contact => data.name.toLowerCase() === contact.name.toLocaleLowerCase()
    )
      ? alert(`${data.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [data, ...prevState.contacts],
        }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleChangeFilter = evt => {
    this.setState({ filter: evt.target.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

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
          <ContactForm onSubmitProp={this.addContact} />
        </Section>
        <Section title={'Contacts'}>
          <Filter filter={filter} changeFilter={this.handleChangeFilter} />
          <ContactsList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}

export { App };