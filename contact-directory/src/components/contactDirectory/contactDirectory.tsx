import React, { useEffect, useState } from 'react';
import Contacts from '../contactList/contacts';
import Favorites from '../favorites/favorites';
import SearchBar from '../searchBar/searchBar';

import '../../styles/ContactDirectory.css';
import { ContactType } from '../../types/Contact';

export default function ContactDirectory() {
	const [contacts, setContacts] = useState<ContactType[]>([]);
	const [isDeveloped, setIsDeveloped] = useState(false);
	const [likedContacts, setLikedContacts] = useState<Number[]>([])

	const getContacts = () => {
		fetch("https://reqres.in/api/users?page=1&delay=1", { "method": "GET" })
			.then(response => response.json())
			.then(response => { setContacts(response.data) })
	};

	const getMoreContacts = () => {
		let data: ContactType[] = [];
		fetch("https://reqres.in/api/users?page=1&delay=1", { "method": "GET" })
			.then(response => response.json())
			.then(response => { response.data.forEach((contact: ContactType) => console.log(contact)) })

		fetch("https://reqres.in/api/users?page=2&delay=1", { "method": "GET" })
			.then(response => response.json())
			.then(response => { response.data.forEach((contact: ContactType) => console.log(contact)) })

		setContacts(data);
	};

	useEffect(() => {
		getContacts();
	});

	return (
		<div className='contactDirectoryContainer'>
			<p className='contactDirectoryTitle'>My contacts</p>
			<div className='contactDirectorySearchContainer'>
				<div className='contactDirectorySearch'>
					<SearchBar contacts={contacts} />
					<Contacts contacts={contacts} setIsDeveloped={setIsDeveloped} setLike={setLikedContacts} likedContacts={likedContacts} />
				</div>
				<div className='contactDirectoryFavorites'>
					<Favorites contacts={contacts} setLike={setLikedContacts} likedContacts={likedContacts} />
				</div>
			</div>
		</div>
	);
}
