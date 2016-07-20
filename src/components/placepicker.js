import { default as React } from "react";
import { GoogleMapLoader, GoogleMap, DirectionsRenderer } from "react-google-maps";
import Geosuggest from 'react-geosuggest';

class PlacePicker extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			origin: new google.maps.LatLng(12.971599, 77.594563),
			destination: new google.maps.LatLng(13.08268, 80.270718),
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

		if (this.state.origin && this.state.destination) {
			  if (discrim==='source') {
				  var origin = new google.maps.LatLng(suggest.gmaps.geometry.location.lat(), suggest.gmaps.geometry.location.lng());
					this.setState({origin: origin});
				  this.route(origin, this.state.destination, google.maps.TravelMode.DRIVING);
				} else if (discrim==='destination') {
					var destination = new google.maps.LatLng(suggest.gmaps.geometry.location.lat(), suggest.gmaps.geometry.location.lng());
					this.setState({destination: destination});
					this.route(this.state.origin, destination, google.maps.TravelMode.DRIVING);
				}
		}
	}

	componentDidMount() {
		this.route(this.state.origin, this.state.destination, google.maps.TravelMode.DRIVING);

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
