import React from "react";
import Parse from "parse";
import ParseReact from "parse-react";
import FindRide from "../components/findride.js";
import Searchresults from "../components/searchresults.js";
let response = {
	"results": [
		{
			"createdAt": "2016-03-16T18:25:29.828Z",
			"driver_id": {
				"__type": "Pointer",
				"className": "_User",
				"objectId": "xRabePl1mn"
			},
			"locations": {
				"xRabePl1mn": [
					"59.955413",
					"30.337844"
				]
			},
			"objectId": "EdcsZV9G9E",
			"updatedAt": "2016-03-18T21:51:17.960Z"
		}
	]
}

const ParseComponent = ParseReact.Component(React);

class Listings extends ParseComponent {
	constructor() {
		super();
	};
	observe(props, state){
		return {
			items: new Parse.Query('Item')
		};
	}
	render(){
		return (<div style={{display:"flex", flexDirection:"column", flex:1, width:"100%"}}>
				<Searchresults store = {this.props.store} list={response.results}></Searchresults>
			</div>
		)
	};
}
export default Listings;