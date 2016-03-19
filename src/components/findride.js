import React from "react";
import { Link } from 'react-router';
import {buttonStyle, buttonLink} from "../stylesheets/button";
import {center} from "../stylesheets/center";
import classnames from 'classnames';
import Toggle from 'react-toggle'

class FindRide extends React.Component {
	constructor(props) {
		super(props);
		this.state = {active: false};
	};
	onToggleSidebar= (e) => {
		this.setState({active: !this.state.active});
	};
	saveSrc= (e) =>{
		const {store} = this.props;
		store.cursor(["findRide", "from"]).update(function() {
			return e.target.value;
		});
	};
	saveDestination=(e) =>{
		const {store} = this.props;
		store.cursor(["findRide", "to"]).update(function () {
			return e.target.value;
		})
	};
	selectTime = (e) =>{
		const {store} = this.props;
		store.cursor(["findRide", "time"]).update(function () {
			return e.target.value;
		})
	};
	womenonly = (e) =>{
		const {store} = this.props;
		store.cursor(["findRide", "women"]).update(function () {
			return e.target.value;
		})
	}
	getInitialState =(e) =>{
		return {
			womenOnly: false
		}
	};
	handlewomenOnly(event) {
		this.setState({womenOnly: event.target.checked})
	}
	render(){
		const {store} = this.props;
		let classes = classnames('stage', 'findride', {active: this.state.active});
		const blueButton = Object.assign({},buttonStyle, {width: "90%", background:"#00c5d1", margin: "1em", border: "1px solid #00c5d1"});
		const linkStyle = Object.assign({},buttonLink, {fontSize: "5vw", fontWeight: "bolder"});
		const sectionStyle = Object.assign({},center, {marginTop:"2em", width:"86%", height:"55%", flexDirection:"column", background:"rgba(158, 158, 158, 0.5)", boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.47)" });

		return (<div className={classes}>
				<section style={sectionStyle}>
					<ul id="findlist" style={{width: "100%", height: "65%", padding: "0", margin:"0", display: "flex",flexDirection:"column"}}>
						<li id="selectFrom">
							<div className="lefticons" style={{marginLeft:"0.5em"}}>
								<img style={{height: "50%"}} src="/_assets/images/circleyellow.png" />
							</div>
							<input onChange={this.saveSrc} type="text" name="from" placeholder="From" id="from" />
						</li>
						<li id="selectTo">
							<div className="lefticons" style={{marginLeft:"0.5em"}}>
								<img style={{height: "50%"}} src="/_assets/images/circleblue.png" />
							</div>
							<input style={{height: "50%"}} onChange={this.saveDestination} type="text" name="to" placeholder="To" id="to" />
						</li>
						<li id="selecTime">
							<div className="lefticons" style={{width:"9%", marginLeft:"0.5em"}}>
								<svg style={{width:"100%", height:"100%"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g stroke="#000" strokeLinecap="round" stroke-linejoin="round" stroke-miterlimit="10" fill="none"><circle cx="12" cy="12" r="11.5" /><path d="M11.5 6.5v5.5l6 5.5" /></g></svg>
							</div>
							<input onChange={this.selectTime} className="selecttr" type="time" placeholder="hrs:mins" name="usr_time" />
						</li>
						<li id="selectWomen">
							<div className="lefticons" style={{width:"9%", marginLeft:"0.5em"}}>
								<svg style={{width:"100%", height:"100%"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" fill="#EA6291"><circle cx="11.5" cy="4" r="3.5" /><path d="M11.5 9c-3.038 0-5.5 4.5-5.5 9.5h3.5v5h4v-5h3.5c0-5-2.463-9.5-5.5-9.5z" /></g></svg>
							</div>
							<div style={{width:"75%", textAlign:"left", fontSize:"1.3em", color:"#fff", borderBottom:"1px solid #333333", display:"flex", paddingBottom:"0.15em"}}>
								<div style={{paddingRight:"3em"}}>Women only</div>
									<label className="togglebtn">
										<Toggle
											defaultChecked={this.state.womenOnly}
											onChange={this.handlewomenOnly} />
									</label>
							</div>
						</li>
					</ul>
					<div className="dndbutton" style={blueButton}>
						<Link style={linkStyle} id="searchbtn" to="/public/searchresults">Search</Link>
					</div>
				</section>
			</div>
		)
	}
};
export default FindRide;