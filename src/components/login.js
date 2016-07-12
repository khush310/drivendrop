import React from "react";
import Header from "./header";
import { Link } from 'react-router';
import {buttonStyle, buttonLink} from "../stylesheets/button";
import {center} from "../stylesheets/center";
import Superagent from "superagent";
import Immutable from "immutable";

class Login extends React.Component {
	constructor(props) {
		super(props);
	};
	handleFb = () => {
		FB.getLoginStatus( (response) =>{
			if (response.status === 'connected'){
				this.getUserInfo(response.authResponse);
			} else {
				FB.login((response) =>{
					if (response.authResponse){
						this.getUserInfo(response.authResponse);
					} else{
						console.log("authorize please");
					}
				}, {scope:'email, public_profile,user_friends, user_education_history,user_work_history'});
			}
		});
	};

	getUserInfo = (authResponse) =>{
		FB.api('/me/?fields=name,email,birthday,gender,education,work', (userprofile) =>{
			console.log('insdie get user info with all the other info',  userprofile);
			FB.api('/me/picture?type=normal', (userpicture) => {
				console.log(userpicture.data.url);
				this.callParse(authResponse, userprofile, userpicture);
			});
		});
	};
	logoutFb = () =>{
		FB.logout(function(){document.location.reload();});
	};
	callParse = (authResponse, userprofile, userpicture) => { 
		const {store, history} = this.props; 
		let expiration_date = new Date(); 
		expiration_date.setSeconds(expiration_date.getSeconds() + authResponse.expiresIn); 
		expiration_date = expiration_date.toISOString();
		const education = userprofile.education || [];
		const work = userprofile.work || [];
		const payload = { 
			"authData": { 
				"facebook": { 
					"id": authResponse.userID, 
					"access_token": authResponse.accessToken, 
					"expiration_date": expiration_date 
				} 
			}, 
			"email": userprofile.email,
			"name": userprofile.name ,
			"fb_id": userprofile.id,
			"avatar_url": userpicture.data.url,
			"education": education[education.length-1],
			"work": work[work.length-1]
		}; 
		console.log('this is the payload  ',  payload); 
		Superagent 
			.post('https://api.parse.com/1/users') 
			.set('X-Parse-Application-Id', 'OoK90cI6fsUljxChRLEmgbwHhMeaq5qlXJy4CBvM') 
			.set('X-Parse-REST-API-Key', '78qvq4B8Q7PsyrAMfxoIXF7KfWRC200Vazx2FdEF') 
			.send(payload) 
			.end((err, res) =>{ 
				if (err) {  
				} else{ 
					Superagent
						.get('https://api.parse.com/1/users/'+ res.body.objectId)
						.set('X-Parse-Application-Id', 'OoK90cI6fsUljxChRLEmgbwHhMeaq5qlXJy4CBvM')
						.set('X-Parse-REST-API-Key', '78qvq4B8Q7PsyrAMfxoIXF7KfWRC200Vazx2FdEF')
						.end((error, response) =>{
							if (error){
							} else{
								console.log("this is what is getting stored in the store ", response.body)
								store.cursor(["profileUser"]).update(() =>{return Immutable.fromJS(response.body) });
								history.pushState(null, "/home")
							}
						})

				} 
			})
	 }

	render(){
		const blueButton = Object.assign({},buttonStyle, {width: "90%", background:"#00c5d1", margin: "1em", border: "1px solid #00c5d1"});
		const linkstyle = Object.assign({},buttonLink, {fontSize: "5vw", fontWeight: "bolder", height: "100%"})

		return (<div style={{height:"100%", width:"100%", display:"flex", justifyContent:"center", alignItems:"center", backgroundImage: "url(/_assets/images/Background-login.jpg)", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
			<div style={{height: "100%", width: "100%", backgroundColor:"rgba(62, 190, 201, 0.7)"}}>
				<div style={{color: "white", fontSize: "2.3em", paddingTop: "4em"}}>Welcome to Drive'N'Drop </div>
					<div onClick={this.handleFb} className="dndbutton active" style={{marginBottom: "3vw !important"}}>
						<div style={linkstyle} type="passenger">
							<img src="_assets/images/fbLogo.png" style={{height: "68%", position: "absolute", left: "0px"}} />
							Connect with Facebook
						</div>
					</div>
					<div className="dndbutton">
						<Link to='/createaccount/1' style={linkstyle} type="passenger">Create Account</Link>
					</div>
				<div style={{bottom: "3vw", position: "absolute", width: "100%"}}>
					<div style={{padding: "10px", color: "white",  fontSize: "1.3em"}}>Already a member?</div>
					<div className="dndbutton">
						<div style={linkstyle} type="passenger">Login</div>
					</div>
				</div>
				</div>
			</div>)
	};
}
export default Login;