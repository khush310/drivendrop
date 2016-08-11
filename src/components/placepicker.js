import React from "react";
import {GoogleMapLoader, GoogleMap, Marker, SearchBox} from "react-google-maps";
import Geosuggest from "react-geosuggest";

class PlacePicker extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="app">
				<App/>
			</div>
		)
	}
}

export default PlacePicker;

class App extends React.Component {
	static defaultProps = {};
	constructor(props) {
		super(props);
	}

	onFocus = () => {
		console.log('onFocus');
	};

	onBlur = (value) => {
		console.log('onBlur', value);
	};

	onChange = (value) => {
		console.log('input changes to :' + value);
	};

	onSuggestSelect = (suggest) => {
		console.log(suggest);
	};

	onSuggestNoResults = (userInput) => {
		console.log('onSuggestNoResults for :' + userInput);
	};

	render() {

		var fixtures = [
			{label: 'New York', location: {lat: 40.7033127, lng: -73.979681}},
			{label: 'Rio', location: {lat: -22.066452, lng: -42.9232368}},
			{label: 'Tokyo', location: {lat: 35.673343, lng: 139.710388}}
		];

		return (
			<div>
				<Geosuggest
					fixtures={fixtures}
					onFocus={this.onFocus}
					onBlur={this.onBlur}
					onChange={this.onChange}
					onSuggestSelect={this.onSuggestSelect}
					onSuggestNoResults={this.onSuggestNoResults}
					location={new google.maps.LatLng(53.558572, 9.9278215)}
					radius="20" />
			</div>
		);
	}
}


/*import React from "react";
import Superagent from "superagent";
import GoogleMap from 'google-map-react';
import Geosuggest from 'react-geosuggest';
const API_KEY = "AIzaSyCo9ExihzwDbmOuISsRDNMAUCcJfCkTV0c";

export function filterTopResult(results) {
	return results.filter(function(item){
		return item.address_components.filter(function(component){
			return component.long_name == "Delhi";
		}).length > 0;
	})[0];
}
function createMapOptions(maps) {
	return {
		zoomControlOptions: {
			position: maps.ControlPosition.RIGHT_CENTER,
			style: maps.ZoomControlStyle.SMALL
		},
		mapTypeControlOptions: {
			position: maps.ControlPosition.TOP_RIGHT
		},
		mapTypeControl: true,
		panControl: true,
		scrollwheel: true
	};
};

class PlacePicker extends React.Component {
	constructor(props) {
		super(props);
	}

	handleSearch = (value) => {
		if (value && value.length > 3) {
			Superagent.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${value}&key=${API_KEY}`).end((err, res) => {
				//latitude = res.body.results[0].geometry.location.lat;
				//longitude = res.body.results[0].geometry.location.lng;
				const topResult = filterTopResult(res.body.results);
				if (topResult) {
					this.props.onPlaceChnage(topResult);
				} else {
					this.props.onPlaceChnage(null);
				};
			});
		}
	};
	static defaultProps = {
		center: {lat: 28.6139391, lng: 77.2090212},
		zoom: 9,
		greatPlaceCoords: {lat: 28.6139391, lng: 77.2090212}
	};
	renderMap = () =>{
		if (this.props.place){
			const config = {
				greatPlaceCoords: {lat: this.props.place.geometry.location.lat, lng: this.props.place.geometry.location.lng}
			};
			console.log(config.greatPlaceCoords);
			return (
				<GoogleMap
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}
					options={createMapOptions}>
					<MyGreatPlace {...config.greatPlaceCoords} text={"B"}/>
				</GoogleMap>
			);
		} else {
			return (
				<GoogleMap
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}
					options={createMapOptions}>
				</GoogleMap>
			)
		}
	};

	handleSearchWithDelay = (e) => {
		const value = e.target.value;
		if (this.timeout) {
			clearTimeout(this.timeout);
			delete this.timeout;
		}
		this.timeout = setTimeout(() => {
			this.handleSearch(value);
		}, 500);
	};

	render(){
		return(
			<div style={{display: "flex", flexDirection: "column", width: "100%", height: "100%", background: "whitesmoke"}}>
				<div style={{height: 40}}>
						<input type="text" onChange={this.handleSearchWithDelay} name="src" placeholder="pick the location.." style={{color: "#555", width: "100%"}}/>
				</div>
				<div style={{height:"78%", flex: 1, background: "white"}}>
					{this.renderMap()}
				</div>
				<div style={{height: 40, display: "flex"}}>
					<div  onClick={(e) => {
						if (this.props.place) {
							this.props.onSubmit(this.props.place)
						}
					}} style={this.props.place ? {opacity: 1, color:"#383838", flex: 1, textAlign: "center"} : {opacity: 0, flex: 1, textAlign: "center"}}>
						OK
					</div>
					<div onClick={this.props.onClose} style={{color:"#383838", flex: 1, textAlign: "center"}}>
						Cancel
					</div>
				</div>
			</div>
		)
	}
}

export default PlacePicker;

class MyGreatPlace extends React.Component {
	static defaultProps = {};
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div style={{background: "black", color: "white", height: 30, width: 40, padding: 10}}>
				{this.props.text}
			</div>
		);
	}
}*/