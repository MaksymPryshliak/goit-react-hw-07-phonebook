import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const filterContacts = contacts.filter(contact => {
    return contact.name
      .toLocaleLowerCase()
      .includes(filter.toLocaleLowerCase());
  });

  return (
    <ul className={css.list}>
    {filterContacts.map(contact => {
      return (
        <li key={nanoid()} className={css.listItem}>
          {contact.name} : {contact.number}
          <button
            className={css.deleteBtn}
            onClick={() => handleDelete(contact.id)}
            type="buttton"
          >
            Delete
          </button>
        </li>
      );
    })}
  </ul>
  )
};
