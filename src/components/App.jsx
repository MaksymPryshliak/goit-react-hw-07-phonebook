import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {

  return (
    <div>
      <h1
        style={{
          fontSize: 'xx-large',
          textAlign: 'center',
          marginTop: '30px',
        }}
      >
        Phonebook
      </h1>
      <ContactForm />
      <h2
        style={{
          fontSize: 'x-large',
          textAlign: 'center',
          marginTop: '20px',
        }}
      >
        Contacts
      </h2>
      <Filter />
      <ContactList />
    </div>
  );
};
