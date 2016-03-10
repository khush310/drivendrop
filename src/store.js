import immstruct from "immstruct";
import Immutable from "immutable";

export function createStore() {
	const state = Immutable.Map({
		offer: Immutable.Map({
			from: null,
			to: null,
			time: null,
			seats_available: null,
			women: true,
			return: true,
			comments: null
		}),
		search: Immutable.Map({
			src: "paschim vihar",
			destination: "punjabi bagh",
			results: "14"
		}),
		profileUser: Immutable.Map({
			name: "Khushboo Verma",
			age: 28,
			img: "/_assets/images/khush.png"
		}),
		otherUsers: Immutable.Map({
			user1: Immutable.Map({
				name: "Khushboo",
				age: "28",
				mutual_friends: 8,
				rating: 3,
				seats_available: 2,
				depart_location: "Paschim Vihar",
				departure_time: "07:40"
			}),
			user2: Immutable.Map({
				name: "Rohit",
				age: "25",
				mutual_friends: 5,
				rating: 5,
				seats_available: 2,
				depart_location: "Rohini",
				departure_time: "09:15"
			}),
			user3: Immutable.Map({
				name: "Marco",
				age: "29",
				mutual_friends: 10,
				rating: 4,
				seats_available: 3,
				depart_location: "Defence Colony",
				departure_time: "11:30"
			}),
			user4: Immutable.Map({
				name: "Kusum",
				age: "50",
				mutual_friends: 2,
				rating: 2,
				seats_available: 1,
				depart_location: "Defence Colony",
				departure_time: "11:30"
			}),
			user5: Immutable.Map({
				name: "Krishan Lal",
				age: "52",
				mutual_friends: 25,
				rating: 5,
				seats_available: 2,
				depart_location: "Defence Colony",
				departure_time: "11:30"
			})
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