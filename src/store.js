import immstruct from "immstruct";
import Immutable from "immutable";

export function createStore() {
	const state = Immutable.Map({
		currentUser: Immutable.Map({
			name: "Khusboo Verma"
		}),
		currentRide: Immutable.Map({
			from: null,
			to: null
		})
	});
	return immstruct(state);
}