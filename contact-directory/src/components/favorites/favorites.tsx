import React from 'react';
import { ContactType } from '../../types/Contact';
import Contact from '../contactList/contact';

interface Props {
  contacts: ContactType[]
  setLike: Function
  likedContacts: Number[]
}

export default function Favorites(props: Props) {
  const { contacts, setLike, likedContacts } = props;

  const displayContacts = () => (
    contacts.map((contact) => {
      if (likedContacts.includes(contact.id)) {
        return <Contact key={contact?.id.toString()} contact={contact} setLike={setLike} likedContacts={likedContacts} />
      }
    })
  );

  return (
    <div>
      <p>Favorites</p>
      {displayContacts()}
    </div>
  );
}
