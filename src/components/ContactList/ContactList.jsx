import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={css.contactList}>
    {contacts.map(contact => (
      <li key={contact.id} className={css.contactItem}>
        {contact.name}: {contact.number}{' '}
        <button
          type="button"
          className={css.deleteButton}
          onClick={() => onDeleteContact(contact.id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
