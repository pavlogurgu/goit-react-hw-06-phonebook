import { InputForm } from './InputForm/InputForm';
import { Contacts } from './Contacts/Contacts';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { Container } from '../components/InputForm/InputForm.styled';
import { useState } from 'react';
import { useEffect } from 'react';

const LOCAL_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(LOCAL_KEY)) ?? []
  })

  const [filter, setFilter] = useState('')

  useEffect(() => {
    window.localStorage.setItem(LOCAL_KEY, JSON.stringify(contacts));
  }, [contacts])
  

  const checkContactAvailability = newData => {

    return contacts.find(
      ({ name }) => name.toLowerCase() === newData.name.toLowerCase()
    );
  };

  const formSubmitHandler = newData => {
    newData.id = nanoid();
    if (checkContactAvailability(newData)) {
      alert(`${newData.name} is already in contacts`);
      return;
    }
    setContacts(prevState =>  [...prevState, newData],
    );
  };

  const contactDeleteHandler = contactId => {
 
    const filteredContacts = contacts.filter(({ id }) => {
      return id !== contactId;
    });
    setContacts(filteredContacts);
  };
  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

 
   
    const getFilteredContacts = () => {
      const normilizeFilter = filter.toLowerCase();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normilizeFilter)
      );
    };



    const visibleContacts = getFilteredContacts();
    return (
      <Container>
        <h2>PhoneBook</h2>
        <InputForm onSubmit={formSubmitHandler} />
        {contacts.length > 0 && <h3>Contacts</h3>}
        {contacts.length > 0 && (
          <Filter filterValue={filter} onValueChange={changeFilter} />
        )}
        <Contacts
          contacts={visibleContacts}
          onDelete={contactDeleteHandler}
        />
      </Container>
    );
  
}