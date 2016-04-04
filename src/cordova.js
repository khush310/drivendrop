import React from "react";
import {render} from "react-dom";
import routingTree from "./routes";
import {browserHistory, Router, hashHistory} from "react-router";
import {createStore} from "./store";

const store = createStore();
function createElement(Component, props) {
	return <Component {...props}  store={store}/>
}
const node = document.querySelector('#wrapper');

render((
	<Router createElement={createElement} history={hashHistory}>
		{routingTree}
	</Router>
), node);


store.on('swap', function (newStructure, oldStructure, keyPath) {
	console.log('New structure:', newStructure.toJSON());
	render((
		<Router createElement={createElement} history={hashHistory}>
			{routingTree}
		</Router>
	), node);
	// e.g. with usage with React
	// React.render(App({ cursor: structure.cursor() }), document.body);
});
