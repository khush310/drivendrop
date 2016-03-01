import immstruct from "immstruct";
import Immutable from "immutable";

export function createStore() {
	const state = Immutable.Map({
		profileUser: Immutable.Map({
			name: null,
			age: null,
			about: null,
		}),
		otherUsers: Immutable.Map({
			user1:{
				name: "Khushboo",
				age: "28",
				mutual_friends: 8,
				rating: 3,
				seats_available: 2,
				depart_location: "Paschim Vihar",
				departure_time: "07:40"
			},
			user2: {
				name: "Rohit",
				age: "25",
				mutual_friends: 5,
				rating: 5,
				seats_available: 2,
				depart_location: "Rohini",
				departure_time: "09:15"
			},
			user3: {
				name: "Marco",
				age: "29",
				mutual_friends: 10,
				rating: 4,
				seats_available: 3,
				depart_location: "Defence Colony",
				departure_time: "11:30"
			}
		}),
		currentRide: Immutable.Map({
			from: null,
			to: null,
			seats_available: null,
			time: null
		})
	});
	return immstruct(state);
}