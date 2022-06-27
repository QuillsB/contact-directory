import React from 'react';
import Contacts from '../contactList/contacts';
import Favorites from '../favorites/favorites';
import SearchBar from '../searchBar/searchBar';

export default function ContactDirectory() {
	return (
		<div>
			<p>My contact</p>
			<div>
				<SearchBar />
				<Contacts />
			</div>
			<div>
				<Favorites />
			</div>
		</div>
	);
}
