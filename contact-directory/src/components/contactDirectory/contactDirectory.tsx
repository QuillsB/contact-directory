import React, { useEffect, useState } from 'react';
import Contacts from '../contactList/contacts';
import Favorites from '../favorites/favorites';
import SearchBar from '../searchBar/searchBar';

import '../../styles/ContactDirectory.css';

export default function ContactDirectory() {
	const [contacts, setContacts] = useState([]);
	const getContacts = () => {
		fetch("https://reqres.in/api/users?page=1&delay=1", { "method": "GET" })
			.then(response => response.json())
			.then(response => { setContacts(response.data) })
	};

	const getMoreContacts = () => {
		fetch("https://reqres.in/api/users?page=2&delay=1", { "method": "GET" })
			.then(response => response.json())
			.then(response => { setContacts(response.data) })
	};

	useEffect(() => {
		getContacts();
	}, []);

	return (
		<div className='contactDirectoryContainer'>
			<p className='contactDirectoryTitle'>My contacts</p>
			<div className='contactDirectorySearchContainer'>
				<div className='contactDirectorySearch'>
					<SearchBar />
					<Contacts contacts={contacts} />
				</div>
				<div className='contactDirectoryFavorites'>
					<Favorites />
				</div>
			</div>
		</div>
	);
}
