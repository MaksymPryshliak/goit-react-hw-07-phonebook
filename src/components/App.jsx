import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

export const App = () => {
  const isLoading = useSelector(state => state.contacts.isLoading);

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
      {isLoading ? (<b style={{marginTop: '20px' ,fontSize: 'large' , textAlign: 'center', display: 'block'}}>Waiting...</b>) : (<ContactList />)}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};
