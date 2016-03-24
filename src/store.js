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
		from: "bholu",
		userpic: "/_assets/images/user.png",
		type: "request",
		msg: "hi i am a nice guy"
	});
	const message5 = Immutable.Map({
		id: "5",
		from: "gora",
		userpic: "/_assets/images/user.png",
		type: "request",
		msg: "ola!a nice guy"
	});
	const message6 = Immutable.Map({
		id: "6",
		from: "Shabri",
		userpic: "/_assets/images/user.png",
		type: "accept",
		msg: "ola!a nice guy"
	});
	const message7 = Immutable.Map({
		id: "7",
		from: "Namo",
		userpic: "/_assets/images/user.png",
		type: "accept",
		msg: "ola!a nice guy"
	});
	const messcounter = Immutable.Map({
		uread: 2
	});
	const messlist = Immutable.List([message1, message5, message3, message2, message6, message4,message7]);
	const transaction1 = Immutable.Map({
		id: "1",
		from: "person1",
		to: "person2",
		amount: 200,
		date: "march, 11",
		src: "paschim vihar",
		destination: "punjabi bagh"
	});
	const transaction2 = Immutable.Map({
		id: "2",
		from: "person1",
		to: "person2",
		amount: 200,
		date: "march, 7",
		src: "rohini",
		destination: "hauz khas"
	});
	const transaction3 = Immutable.Map({
		id: "3",
		from: "person1",
		to: "person2",
		amount: 200,
		date: "march, 4",
		src: "khan market",
		destination: "pitampura"
	});
	const transaction4 = Immutable.Map({
		id: "4",
		from: "person1",
		to: "person2",
		amount: 200,
		date: "march, 1",
		src: "ramesh nagar",
		destination: "indira gandhi airport"
	});
	const transaction5 = Immutable.Map({
		id: "4",
		from: "person1",
		to: "person2",
		amount: 200,
		date: "march, 1",
		src: "ramesh nagar",
		destination: "indira gandhi airport"
	});

	const history = Immutable.List([transaction1, transaction2, transaction3, transaction4, transaction5]);
	const state = Immutable.Map({
		profileUser: Immutable.Map({
			name: "Khushboo",
			surname: "Verma",
			gender: "F",
			age: 28,
			img: "/_assets/images/khush.png",
			about: "Add something about yourself",
			phone: "389 888 8851",
			email: "khush310@gmail.com",
			reviews: null,
			cardetails: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
			totalcash: 1000,
			recenttransactions: history,
			id: "xRabePl1mn"
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