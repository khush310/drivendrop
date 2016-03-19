import React from "react";
import GoogleMap from 'google-map-react';
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

class Map extends React.Component {
	static defaultProps = {
		center: {lat: 59.938043, lng: 30.337157},
		zoom: 9,
		greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
	};
	constructor(props) {
		super(props);
	}

	render(){
		return (<div style={{width: "100%"}}>
				Share your location!
				<GoogleMap
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}
					options={createMapOptions}>
					<MyGreatPlace lat={59.955413} lng={30.337844} text={'A'}/>
					<MyGreatPlace {...this.props.greatPlaceCoords} text={'B'}/>
					</GoogleMap>
			</div>
		)
	};
}
export default Map;
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