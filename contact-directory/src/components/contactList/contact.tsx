import React from 'react';
import { ContactType } from '../../types/Contact';

import '../../styles/Contact.css';

interface Props {
  contact: ContactType | null
}

export default function Contact(props: Props) {
  const { contact } = props;
  return (
    <div className='contactContainer'>
      <img src={contact?.avatar} className='contactAvatar' />
      <div className='contactInfos'>
        <p className='contactName'>{contact?.first_name}{contact?.last_name}</p>
        <p className='contactEmail'>{contact?.email}</p>
      </div>
      <img src={'https://gist.githubusercontent.com/bltnico/6f69566be9861c6125dd132b78aef6f1/raw/6a0937aeeaf324649b10e39951b6e331fb700720/heart.svg'} className='contactLikeIcon' />
    </div>
  );
}
