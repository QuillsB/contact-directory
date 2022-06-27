import React from 'react';
import SearchInput from './searchInput';
import SearchResultCount from './searchResultCount';

export default function SearchBar() {
  return (
    <div>
      <SearchInput />
      <SearchResultCount />
    </div>
  );
}
