import React from 'react';
import Contacts from '../contactList/contacts';
import SearchBar from '../searchBar/searchBar';

export default function ContactDirectory() {
	return (
		<div>
			<p>My contact</p>
			<SearchBar />
			<Contacts />
		</div>
	);
}
