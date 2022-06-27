import React from 'react';
import { ContactType } from '../../types/Contact';
import Contact from './contact';

import '../../styles/Contacts.css';

interface Props {
  contacts: ContactType[]
}

export default function Contacts(props: Props) {
  const displayContacts = () => (
    props.contacts.map((contact) => (
      <Contact key={contact?.id.toString()} contact={contact} />
    ))
  );

  return (
    <div className='contactsContainer'>
      {displayContacts()}
      <button>Show more</button>
    </div>
  );
}
