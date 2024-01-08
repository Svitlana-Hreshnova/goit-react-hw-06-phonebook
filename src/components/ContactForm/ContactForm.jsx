import css from './ContactForm.module.css';
import { useState } from 'react';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    const input = e.target.value.replace(/\D/g, '');
    setNumber(input);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!name || !number) {
      alert('Please enter both name and number.');
      return;
    }

    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
      <label className={css.formLabel}>
        Name:
        <br />
        <input
          type="text"
          className={css.formInput}
          name="name"
          required
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label className={css.formLabel}>
        Number:
        <br />
        <input
          type="tel"
          className={css.formInput}
          name="number"
          required
          value={number}
          onChange={handleNumberChange}
        />
      </label>
      <button type="submit" className={css.formButton}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
