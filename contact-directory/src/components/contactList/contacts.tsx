import React from 'react';
import { ContactType } from '../../types/Contact';
import Contact from './contact';

import '../../styles/Contacts.css';

interface Props {
  contacts: ContactType[]
  setIsDeveloped: Function
}

export default function Contacts(props: Props) {
  const displayContacts = () => (
    props.contacts.map((contact) => (
      <Contact key={contact?.id.toString()} contact={contact} />
    ))
  );

  const onButtonClick = (event: React.MouseEvent) => {
    event.preventDefault();
    props.setIsDeveloped(true);
  };

  return (
    <div className='contactsContainer'>
      {displayContacts()}
      <button onClick={onButtonClick}>Show more</button>
    </div>
  );
}
