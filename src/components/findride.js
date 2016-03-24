import React from "react";
import { Link } from 'react-router';
import {buttonStyle, buttonLink} from "../stylesheets/button";
import {center} from "../stylesheets/center";
import classnames from 'classnames';
import Toggle from 'react-toggle'
import Superagent from "superagent";
import Searchresults from "./searchresults.js";

class FindRide extends React.Component {
	constructor(props) {
		super(props);
		this.state = {active: false, fetched: false};
	};
	onToggleSidebar= (e) => {
		this.setState({active: !this.state.active});
	};
	handleForm = (e) => {
		const {store} = this.props;
		const payload = {
			//src: this.refs.to.value,
			//destination: this.refs.from.value,
			timestamp: {$gt: {__type: "Date", iso: new Date(this.refs.time.value)}},
			womensafety: this.refs.womensafety.state.checked
		};
		Superagent
			.post('https://api.parse.com/1/classes/Listing')
			.set('X-Parse-Application-Id', 'OoK90cI6fsUljxChRLEmgbwHhMeaq5qlXJy4CBvM')
			.set('X-Parse-REST-API-Key', '78qvq4B8Q7PsyrAMfxoIXF7KfWRC200Vazx2FdEF')
			.send({where: payload, _method: "GET", limit: 200, order: "-createdAt,-createdAt"})
			.end((err, res) =>{
				console.log(res);
				this.setState({fetched: true, results: res.body.results})
			})
	};

	renderForm(){
		const {store} = this.props;
		let classes = classnames('stage', 'findride', {active: this.state.active});
		const blueButton = Object.assign({},buttonStyle, {width: "65%", background:"#00c5d1", margin: "2em 0 1em 0", border: "1px solid #00c5d1"});
		const linkStyle = Object.assign({},buttonLink, {fontSize: "5vw", fontWeight: "bolder"});
		const sectionStyle = Object.assign({},center, {marginTop:"2em", width:"90%", height:"64%", flexDirection:"column", background:"rgba(158, 158, 158, 0.5)", boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.47)"});

		return (<div className={classes} style={{width:"100%", height:"100%", backgroundPosition:"center", background:"url(/_assets/images/nyc.jpg) no-repeat"}}>
				<section style={sectionStyle}>
					<ul id="findlist" style={{width: "100%", height: "65%", padding: "0", margin:"0", display: "flex",flexDirection:"column"}}>
						<li>
							<div className="lefticons">
								<img style={{width: "100%"}} src="/_assets/images/circleyellow.png" />
							</div>
							<input ref="from" type="text" name="from" placeholder="From" id="from" />
						</li>
						<li>
							<div className="lefticons">
								<img style={{width: "100%"}} src="/_assets/images/circleblue.png" />
							</div>
							<input ref="to" type="text" name="to" placeholder="To" id="to" />
						</li>
						<li>
							<div className="lefticons">
								<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g stroke="#000" strokeLinecap="round" stroke-linejoin="round" stroke-miterlimit="10" fill="none"><circle cx="12" cy="12" r="11.5" /><path d="M11.5 6.5v5.5l6 5.5" /></g></svg>
							</div>
							<input ref="time" style={{fontSize:"1.1em"}} className="selecttr" onChange={this.selectTime} type="datetime-local" placeholder="hrs:mins" name="usr_time" />
						</li>
						<li>
							<div className="lefticons">
								<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><g stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" fill="#EA6291"><circle cx="11.5" cy="4" r="3.5" /><path d="M11.5 9c-3.038 0-5.5 4.5-5.5 9.5h3.5v5h4v-5h3.5c0-5-2.463-9.5-5.5-9.5z" /></g></svg>
							</div>
							<div style={{width:"75%", textAlign:"left", fontSize:"1.3em", color:"#fff", borderBottom:"1px solid #333333", display:"flex", paddingBottom:"0.15em", justifyContent:"space-between"}}>
								<div>Women only</div>
								<label className="togglebtn">
									<Toggle ref="womensafety"
										defaultChecked={this.state.womenOnly}
										onChange={this.handlewomenOnly} />
								</label>
							</div>
						</li>
					</ul>
					<div className="dndbutton" style={blueButton}>
						<div style={linkStyle} onClick={this.handleForm} id="searchbtn" to="/public/searchresults">Search</div>
					</div>
				</section>
			</div>
		)
	}

	render() {
		return (
			<div>
				{this.state.fetched ? <Searchresults store = {this.props.store} list={this.state.results}></Searchresults> :  this.renderForm()}
			</div>
		)
	}
}
export default FindRide;