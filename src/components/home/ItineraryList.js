import React, { useState, useEffect } from 'react';
import Settings from '../helpers/Settings';
import { isAuthenticated } from '../helpers/simpleAuth';
import ItineraryItem from './ItineraryItem';

export default function ItineraryList() {
	const [ itineraryList, setItineraryList ] = useState([]);

	const getItineraryList = () => {
		if (isAuthenticated()) {
			fetch(`${Settings.remote_URL}/itineraryitems`, {
				headers: {
					Accept: 'application/json',
					Authorization: `Token ${sessionStorage.getItem(Settings.token_name)}`
				}
			})
				.then((res) => res.json())
				.then(setItineraryList);
		}
	};

	useEffect(getItineraryList, []);

	return (
		<div>
			{itineraryList.map((item) => <ItineraryItem key={item.id} item={item} />)}
		</div>
	);
}
