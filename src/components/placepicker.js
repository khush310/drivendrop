import React from "react";
import Superagent from "superagent";
import GoogleMap from 'google-map-react';
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
}

class PlacePicker extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	static defaultProps = {
		center: {lat: 59.938043, lng: 30.337157},
		zoom: 9,
		greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
	};

	handleSearch = (value) => {
		if (value && value.length > 3) {
			Superagent.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${value}&key=${API_KEY}`).end((err, res) => {
				console.log("res", res.body.results[0].geometry.location.lat);
				const topResult = filterTopResult(res.body);
				if (topResult) {
					this.setState({match: topResult})
				} else {
					this.setState({match: null})
				}
			});

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
						<input type="text" onChange={this.handleSearchWithDelay} name="src" placeholder="pick the location.." style={{color: "#555"}}/>
				</div>
				<div style={{height:"78%", flex: 1, background: "white"}}>
					<GoogleMap
						defaultCenter={this.props.center}
						defaultZoom={this.props.zoom}
						options={createMapOptions}>
						<MyGreatPlace lat={59.955413} lng={30.337844} text={'A'}/>
						<MyGreatPlace {...this.props.greatPlaceCoords} text={'B'}/>
					</GoogleMap>
				</div>
				<div style={{height: 40, display: "flex"}}>
					<div onClick={(e) => {
						if (this.state.match) {
							this.props.onSubmit(this.state.match)
						}
					}} style={this.state.match ? {opacity: 1, color:"#383838"} : {opacity: 0}}>
						OK
					</div>
					<div onClick={this.props.onClose} style={{color:"#383838"}}>
						Cancel
					</div>
				</div>
			</div>
		)
	}
}
class MyGreatPlace extends React.Component {
	static defaultProps = {};

	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				{this.props.text}
			</div>
		);
	}
}

export default PlacePicker;