import React from "react";
import {render} from "react-dom";
import routingTree from "./routes";
import {browserHistory, Router} from "react-router";

const node = document.querySelector('#wrapper');
render((
	<Router history={browserHistory}>
		{routingTree}
	</Router>
), node);
