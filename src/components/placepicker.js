import { default as React } from "react";
import { GoogleMapLoader, GoogleMap, DirectionsRenderer } from "react-google-maps";
import Geosuggest from 'react-geosuggest';

class PlacePicker extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			directions: null,
		};

		this.onSuggestSelect = this.onSuggestSelect.bind(this);
	}

	route(origin, destination, travelMode) {

		const DirectionsService = new google.maps.DirectionsService();
		DirectionsService.route({
      origin: origin,
      destination: destination,
      travelMode: travelMode,
    }, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.setState({
          directions: result,
        });
      } else {
        console.error(`error fetching directions ${result}`);
      }
    });

	}

	onSuggestSelect(suggest, discrim) {
		  if (discrim==='source') {
			  var origin = new google.maps.LatLng(suggest.gmaps.geometry.location.lat(), suggest.gmaps.geometry.location.lng());
				var json = {origin: origin};
				json.maps = this.state.maps? this.state.maps: [];
				json.maps[0] = suggest.gmaps;
				this.setState(json);
				if (this.state.destination) {
			    this.route(origin, this.state.destination, google.maps.TravelMode.DRIVING);
			  }
				this.props.onPlaceChnage(this.state.maps);
			} else if (discrim==='destination') {
				var destination = new google.maps.LatLng(suggest.gmaps.geometry.location.lat(), suggest.gmaps.geometry.location.lng());
				var json = {destination: destination};
				json.maps = this.state.maps? this.state.maps: [];
				json.maps[1] = suggest.gmaps;
				this.setState(json)
				if (this.state.origin) {
				  this.route(this.state.origin, destination, google.maps.TravelMode.DRIVING);
			  }
				this.props.onPlaceChnage(this.state.maps);
			}
	}

	renderMap() {
		return (

		<GoogleMapLoader
			containerElement={
				<div
					{...this.props}
					style={{
						height: `100%`,
					}}
				/>
			}
			googleMapElement={
				<GoogleMap
					containerProps={{
						...this.props,
						style: {
							height: `100%`,
						},
					}}
					defaultZoom={7}
					defaultCenter={this.state.origin}
				>
					{this.state.directions ? <DirectionsRenderer directions={this.state.directions} /> : null}
				</GoogleMap>
			}
			/>
		);

	}

	render() {
		return (
				<div style={{display: "flex", flexDirection: "column", width: "100%", height: "100%", background: "whitesmoke"}}>
				  <MyGreatPlace discrim="source" onSuggestSelect={this.onSuggestSelect}/>
					<MyGreatPlace discrim="destination" onSuggestSelect={this.onSuggestSelect}/>
					<div style={{height:"78%", flex: 1, background: "white"}}>
						{this.renderMap()}
					</div>
					<div style={{height: 40, display: "flex"}}>
						<div  onClick={(e) => {
							if (this.state.origin && this.state.destination) {
								this.props.onSubmit(this.state.origin)
							}
						}} style={(this.state.origin && this.state.destination) ? {opacity: 1, color:"#383838", flex: 1, textAlign: "center"} : {opacity: 0, flex: 1, textAlign: "center"}}>
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
		this.onSuggestSelect = this.onSuggestSelect.bind(this);

	}

	render() {
		return (
			<div style={{height: 40}}>
				<Geosuggest onSuggestSelect={this.onSuggestSelect}/>
			</div>
		);
	}

	onSuggestSelect(suggest) {
		this.props.onSuggestSelect(suggest, this.props.discrim);
	}
}
