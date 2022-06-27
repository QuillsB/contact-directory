import React from 'react';
import { ContactType } from '../../types/Contact';
import SearchInput from './searchInput';
import SearchResultCount from './searchResultCount';

import '../../styles/SearchBar.css';

interface Props {
  contacts: ContactType[],
}

export default function SearchBar(props: Props) {
  const { contacts } = props;

  return (
    <div className='searchBarContainer'>
      <SearchInput />
      <SearchResultCount count={contacts.length} />
    </div>
  );
}
