import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import {Link} from "react-router";
import classnames from "classnames";
import Toggle from 'react-toggle';
import Superagent from "superagent";
import {buttonStyle, buttonLink} from "../stylesheets/button";
import {center} from "../stylesheets/center";

import PlacePicker from "./placepicker";

class OfferRide extends React.Component {
	constructor(props) {
		super(props);
		this.state = {active: false, clickedAddCar: false};
	};
	handleForm = (e) => {
		const {store} = this.props;

		const login_post_data = {
				username: "ram",
				password: "rammahesh"
		};

		Superagent
			.post('http://dndapi.herokuapp.com/api/login')
			//.set('X-Parse-Application-Id', 'OoK90cI6fsUljxChRLEmgbwHhMeaq5qlXJy4CBvM')
			//.set('X-Parse-REST-API-Key', '78qvq4B8Q7PsyrAMfxoIXF7KfWRC200Vazx2FdEF')
			.send(login_post_data)
			.then((res) =>{
				var auth_token = res.body.auth_token;
				const payload = {
					auth_token: auth_token,
					driver: {__type: "Pointer", className: "_User", objectId: store.cursor(["profileUser", "id"]).deref()},
					src_id: this.state["From/place"].place_id ,
					src_name: this.state["From/place"].formatted_address,
					src_coordinates_lat: this.state["From/place"].geometry.location.lat(),
					src_coordinates_lng: this.state["From/place"].geometry.location.lng(),
					destination_id: this.state["To/place"].place_id  ,
					destination_name: this.state["To/place"].formatted_address,
					destination_coordinates_lat: this.state["To/place"].geometry.location.lat(),
					destination_coordinates_lng : this.state["To/place"].geometry.location.lng(),
					timestamp: {__type: "Date", iso: new Date(this.refs.time.value)},
					seats: parseInt(this.refs.seats.value),
					womensafety: this.refs.womensafety.state.checked
				};

				Superagent
					.post('http://dndapi.herokuapp.com/api/rides')
					//.set('X-Parse-Application-Id', 'OoK90cI6fsUljxChRLEmgbwHhMeaq5qlXJy4CBvM')
					//.set('X-Parse-REST-API-Key', '78qvq4B8Q7PsyrAMfxoIXF7KfWRC200Vazx2FdEF')
					.send(payload)
					.end((err, res) =>{
						console.log(res);
					});

			});

	};

    onClickedAddCar = () => {
        this.setState({ clickedAddCar: true });
    };



	renderPlacePicker(fieldName) {
		const placeKey = fieldName + "/place";
		if (this.state[fieldName]) {
			return (
				<div style={{position: "fixed", width :"100%", height: "100%", background: "white", zIndex: 999999, left: 0, top: 0}}>
					<PlacePicker style={{}}
					             place={this.state[placeKey]}
					             onPlaceChnage={(maps)=> {
					              const state = {};
					              state['From/place'] = maps[0];
												state['To/place'] = maps[1];
					              this.setState(state);
					             }}
					             onSubmit={() => {
												 const state = {};
												 state['From'] = false;
												 state['To'] = false;
												 this.setState(state);
											 }}
					             onClose={() => {
												 const state = {};
												 state['From'] = false;
												 state['To'] = false;
												 this.setState(state);
											}}>
					</PlacePicker>
				</div>
			)
		} else {
			if (this.state[placeKey]) {
				return (
					<div onClick={(e) => {
						const state = {};
						state[fieldName] = true;
						this.setState(state);
					}}>
						{fieldName} - {this.state[placeKey]["address_components"][0].long_name}
					</div>
				)
			} else {

                var placeHolder;
                if (fieldName=='From') {
                    placeHolder = 'Leaving From';
                } else if (fieldName=='To') {
                    placeHolder = 'Going To';
                }
				return (
					<div onClick={(e) => {
						const state = {};
						state[fieldName] = true;
						this.setState(state);
					}}>
                        {placeHolder}
					</div>
				)

			}
		}
	}

	render(){
		let classes = classnames('stage', 'offerheader');
		const sectionStyle = Object.assign({},center, {width:"100%", height:"90%", flexDirection:"column", justifyContent:"space-between"});
		const button = Object.assign({},buttonStyle, {width: "86%", background:"#fcce20", marginBottom:"1em", top: "10px"});
		const linkStyle = Object.assign({}, buttonLink, {color: "white", fontSize: "5vw"});
		return (
				<div className={classes}>
					<section style={sectionStyle} className="offerlist-sectino">
						<ul id="offerlist" className="ul-setmargins offerlistqa" style={{backgroundColor: "white", width: "100%", height: "100%", padding: "0", display: "flex",flexDirection:"column"}}>
							<li>
								<div className="lefticons" style={{marginLeft:"0.5em"}}>
									<div className="icon_wrapper">
                                      <div id="pickuplocation"></div>
                                    </div>
								</div>
								<div className="selecttr" style={{width:"75%", textAlign:"left", fontSize:"1.3em", color:"#7f7f7f", borderBottom:"1px solid #333333", display:"flex", paddingBottom:"0.15em", justifyContent:"space-between"}}>
                                    {this.renderPlacePicker("From")}
                                </div>
							</li>
                            <li>
                                <div className="lefticons drop-icon-out">
                                    <div className="icon_wrapper">
                                        <div id="droplocation"></div>
                                    </div>
                                </div>
                                <div className="selecttr drop-location-text" style={{width:"75%", textAlign:"left", fontSize:"1.3em", color:"#7f7f7f", borderBottom:"1px solid #333333", display:"flex", paddingBottom:"0.15em", justifyContent:"space-between"}}>
                                    {this.renderPlacePicker("To")}
                                </div>
                                <div><div id="changeroutes"></div></div>
                            </li>
                            <li>
                                <div className="lefticons" style={{marginLeft:"0.5em"}}>
                                    <div className="icon_wrapper">
                                        <div id="time"></div>
                                    </div>
                                </div>
                                <input ref="time" style={{fontSize:"1.1em", fontFamily: "quicksand"}} className="selecttr" type="datetime-local" placeholder="Pick time and date" name="usr_time" />
                            </li>
                            <li>
                                <div className="lefticons" style={{marginLeft:"0.5em"}}>
                                    <div className="icon_wrapper">
                                        <div id="user"></div>
                                    </div>
                               </div>
                                <input ref="seats" type="number" className="selecttr" name="numberofseats" placeholder="Seats available" id="numseats" />
                            </li>
                            <li>
                                <div className="lefticons" style={{marginLeft:"0.5em"}}>
                                    <div className="icon_wrapper">
                                        <div id="womenonly"></div>
                                    </div>
                                </div>
                                <div className="selecttr" style={{width:"75%", textAlign:"left", fontSize:"1.3em", color:"#ec4b75", borderBottom:"1px solid #333333", display:"flex", paddingBottom:"0.15em", justifyContent:"space-between"}}>
                                Women only
                                    <label className="togglebtn">
                                        <Toggle
                                        defaultChecked={this.state.handleWomenOnly}
                                        ref="womensafety" />
                                    </label>
                                </div>
                            </li>
						</ul>
                        { !this.state.clickedAddCar ? <ShowAddCar onClickedAddCar={this.onClickedAddCar}/> : <AddCar /> }

                            <button className="dndbutton" style={button}>
							<div className="dndbuttonLink" to="/public/offerride2" style={linkStyle} onClick={this.handleForm}>PUBLISH</div>
						</button>
					</section>
				</div>
		)
	};
}
export default OfferRide;

class ShowAddCar extends React.Component {
    static defaultProps = {};
    constructor(props) {
        super(props);
        this.state = {clicked: false};
    }

    onClickedAddCar = (e) => {
        this.props.onClickedAddCar();
    };

    render() {
        return (
            <ul id="addcar" style={{backgroundColor: "white", width: "100%", padding: "0", marginTop:"0.8em", display: "flex",flexDirection:"column"}}>
                <li className="addcar-container" style={{alignItems: "flex-start"}}>
                    <div className="lefticons" style={{marginLeft: "3.5em"}}>
                        <div><div id="add"></div></div>
                    </div>
                    <div className="selecttr addcar-text" style={{width:"75%", textAlign:"left", fontSize:"1.3em", color:"#7e807f", display:"flex", paddingBottom:"0.15em", justifyContent:"space-between"}} onClick={this.onClickedAddCar}>
                        Tap to Add car details
                    </div>
                </li>
            </ul>
        );
    }

}

class AddCar extends React.Component {
    static defaultProps = {};
    constructor(props) {
        super(props);
        this.state = {brand: 'empty', plate: '', color: ''};

    }

    updateBrand = (brand) => {
        this.setState({brand:brand});
    };


    updatePlate = (plate) => {
        this.setState({plate:plate});
    };


    updateColor = (color) => {
        this.setState({color:color});
    };


    render() {
        return (
            <div style={{width: "100%"}}>
            <ul id="addcar" style={{backgroundColor: "white", width: "100%", padding: "0", marginTop:"0.8em", display: "flex",flexDirection:"column", borderBottom: "1px solid #ababab"}}>
                <li className="addcarcontairner">
                    <div className="photocirccle-outer">
                        <div className="addphoto-circle">
                            <div style={{marginTop: "10px"}}><i className="fa fa-2x fa-plus" style={{color:"#434240", fontSize: "1.35em"}}></i></div>
                            <div style={{lineHeight: "1.2em", marginTop: "0.5em"}}>Add Car Photo</div>
                        </div>
                    </div>
                    <div className="selecttr" style={{width:"75%", textAlign:"left", fontSize:"1.3em", color:"#7e807f", display:"flex", paddingBottom:"0.15em", justifyContent:"space-between"}}>
                        <ul id="carMeta">
                            <li><BrandSelector brand={this.state.brand} handleBrandUpdates={this.updateBrand}/></li>
                            <li><PlateSelector plate={this.state.plate} handlePlateUpdates={this.updatePlate}/></li>
                            <li><ColorSelector color={this.state.color} handleColorUpdates={this.updateColor}/></li>
                        </ul>
                    </div>
                </li>
            </ul>
            <div className="addcardetalls">ADD CAR DETAILS</div>
            </div>
        );
    }

}

class BrandSelector extends React.Component {
    static defaultProps = {};
    constructor(props) {
        super(props);
        this.state = {selectValue: props.brand};
    }

    handleChange = (e) => {
        var selectValue = e.target.value;
        this.setState({selectValue:selectValue});
        this.props.handleBrandUpdates(selectValue);

    };

    render() {
        return (
            <div>
                <select id="brand"
                value={this.state.selectValue}
                onChange={this.handleChange}
                >
                    <option value="none">Car Brand</option>
                    <option value="Maruti">Maruti</option>
                    <option value="Tata">Tata</option>
                    <option value="Hyundai">Hyundai</option>
                    <option value="Tavera">Tavera</option>
                    <option value="Innova">Innova</option>
                </select>
            </div>
        );
    }

}

class PlateSelector extends React.Component {
    static defaultProps = {};
    constructor(props) {
        super(props);
        this.state = {disable: true, val: ''};
    }

    handleChange = (e) => {
        var val = e.target.value;
        this.setState({val:val});
        this.props.handlePlateUpdates(val);
    };

    handleClick = (e) => {
        this.setState({disable: !this.state.disable});
    };

    render() {
        return (
            <div>
                <input type="text" style={{width: "80%", height: "80%"}} disabled={this.state.disable} value={this.state.val} onChange={this.handleChange}/>
                <i className="fa fa-2x fa-pencil" style={{color:"#434240", fontSize: "1.35em", marginLeft: "0.35em"}} onClick={this.handleClick}></i>
            </div>
        );
    }

}

class ColorSelector extends React.Component {
    static defaultProps = {};
    constructor(props) {
        super(props);
        this.state = {disable: true, val: ''};
    }

    handleChange = (e) => {
        var val = e.target.value;
        this.setState({val:val});
        this.props.handleColorUpdates(val);
    };

    handleClick = (e) => {
        this.setState({disable: !this.state.disable});
    };

    render() {
        return (
            <div>
                <input type="text" style={{width: "80%", height: "80%"}} disabled={this.state.disable} value={this.state.val} onChange={this.handleChange}/>
                <i className="fa fa-2x fa-pencil" style={{color:"#434240", fontSize: "1.35em", marginLeft: "0.35em"}} onClick={this.handleClick}></i>
            </div>
        );
    }

}
