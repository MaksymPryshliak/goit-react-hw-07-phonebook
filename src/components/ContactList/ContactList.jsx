import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'redux/contacts/contactsOperations';
import { getFilteredContacts } from 'redux/contacts/contactsSelectors';

export const ContactList = () => {
  const visibleContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

return (
    <ul className={css.list}>
    {visibleContacts.map(({id, name, phone}) => {
      return (
        <li key={id} className={css.listItem}>
          {name} : {phone}
          <button
            className={css.deleteBtn}
            id={id}
            onClick={() => dispatch(removeContact(id))}
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
