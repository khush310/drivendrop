import immstruct from "immstruct";
import Immutable from "immutable";

export function createStore() {
	const message1 = Immutable.Map({
		id: "1",
		from: "pawan",
		userpic: "/_assets/images/user.png",
		to: "me",
		type: "message",
		msg: "hi oanvkjsndvjshbvjhsbv;ihbv;hdbv;kjvkhfbd"
	});
	const message2 = Immutable.Map({
		id: "2",
		from: "sapna",
		to: "me",
		userpic: "/_assets/images/user.png",
		type: "message",
		msg: "snvkjsnbvsjb shvkjsndvjshbvjhsbv;ihbv;hdbv;kjvkhfbd"
	});
	const message3 = Immutable.Map({
		id: "3",
		from: "damru",
		to: "me",
		userpic: "/_assets/images/user.png",
		type: "message",
		msg: "snvkjsnbknjkjshbvjhsbv;ihbv;hdbv;kjvkhfbd"
	});
	const message4 = Immutable.Map({
		id: "4",
		name: "bholu",
		type: "request",
		msg: "hi i am a nice guy"
	});
	const message5 = Immutable.Map({
		id: "5",
		name: "gora",
		type: "request",
		msg: "ola!a nice guy"
	});
	const messcounter = Immutable.Map({
		uread: 2
	});
	const messlist = Immutable.List([message1, message2, message3, message4, message5]);
	const state = Immutable.Map({
		profileUser: Immutable.Map({
			name: "Khushboo Verma",
			age: 28,
			img: "/_assets/images/khush.png",
			about: "Add something about yourself to help fellow travellers know you better",
			phone: "389 888 8851",
			email: "khush310@gmail.com",
			reviews: null,
			cardetails: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
		}),
		offer: Immutable.Map({
			from: null,
			to: null,
			time: null,
			seats_available: null,
			women: true,
			return: true,
			comments: null
		}),
		currentRide: Immutable.Map({
			from: null,
			to: null,
			seats_available: null,
			time: null
		}),
		findRide: Immutable.Map({
			from: null,
			to: null,
			time: null,
			women: true
		}),
		search: Immutable.Map({
			src: "paschim vihar",
			destination: "punjabi bagh",
			results: "14"
		}),
		messages: Immutable.Map({
			counters: messcounter,
			list: messlist
		}),
		notifications: Immutable.Map({
			count: "2"
		}),
		wallet: Immutable.Map({

		}),
		otherUsers: Immutable.Map({
			user1: Immutable.Map({
				name: "Khushboo",
				age: "28",
				userimg: "/_assets/images/user.png",
				mutual_friends: 8,
				rating: 3,
				seats_available: 2,
				depart_location: "Paschim Vihar",
				departure_time: "07:40",
				aadharverified: "138uruf0w9u"
			}),
			user2: Immutable.Map({
				name: "Rohit",
				age: "25",
				userimg: "/_assets/images/user.png",
				mutual_friends: 5,
				rating: 5,
				seats_available: 2,
				depart_location: "Rohini",
				departure_time: "09:15",
				aadharverified: null
			}),
			user3: Immutable.Map({
				name: "Marco",
				age: "29",
				userimg: "/_assets/images/user.png",
				mutual_friends: 10,
				rating: 4,
				seats_available: 3,
				depart_location: "Defence Colony",
				departure_time: "11:30",
				aadharverified: "1208u49283u5"
			}),
			user4: Immutable.Map({
				name: "Kusum",
				age: "50",
				userimg: "/_assets/images/user.png",
				mutual_friends: 2,
				rating: 2,
				seats_available: 1,
				depart_location: "Defence Colony",
				departure_time: "11:30",
				aadharverified: null
			}),
			user5: Immutable.Map({
				name: "Krishan Lal",
				age: "52",
				userimg: "/_assets/images/user.png",
				mutual_friends: 25,
				rating: 5,
				seats_available: 2,
				depart_location: "Defence Colony",
				departure_time: "11:30",
				aadharverified: "1084u392845"
			})
		})
	});
	return immstruct(state);
}