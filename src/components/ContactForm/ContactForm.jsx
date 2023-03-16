import css from './ContactForm.module.css';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, fetchContacts } from 'redux/contacts/contactsOperations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value)
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const  onSubmitFrom = evt => {
    evt.preventDefault();
    dispatch(addContact({ name, phone }));
    setName('');
    setPhone('');

  };

  return (
    <form className={css.contactForm} onSubmit={onSubmitFrom}>
      <label className={css.formLabel}>Name</label>
      <input
        className={css.contactInput}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Enter name"
        value={name}
        onChange={handleChange}
      />
      <label className={css.formLabel}>Number</label>
      <input
        className={css.contactInput}
        type="tel"
        name="phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Enter number"
        value={phone}
        onChange={handleChange}
      />
      <button type="submit" className={css.formButton}>
        Add contact
      </button>
    </form>
  );
};
