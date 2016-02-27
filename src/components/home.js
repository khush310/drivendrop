import React from "react";
class Home extends React.Component {
	render(){
		return (
			<div className="stage" id="opt">
				<header className="homeheader">
					<div className="headersections" id="profileicon">
						<svg className="icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
							<g stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" fill="none">
								<path d="M9.5 13.281v2.719l-5.009 1.789c-1.194.427-1.991 1.558-1.991 2.825v1.886h19v-1.886c0-1.268-.797-2.398-1.991-2.825l-5.009-1.789v-2.906" />
								<ellipse cx="11.875" cy="8" rx="5" ry="6" />
								<path d="M16.828 7.453l-.453.047c-1.703.328-2.797-.289-3.734-1.93-.563 1.078-2.322 1.93-3.766 1.93-.711 0-1.323-.146-1.936-.466" />
							</g>
						</svg>
					</div>
					<div id="current">
						Drive'n'Drop
					</div>
					<div className="headersections" id="messages">
						<svg className="icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
							<g stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" fill="none">
								<path d="M23.5 18c0 .828-.672 1.5-1.5 1.5h-20c-.828 0-1.5-.672-1.5-1.5v-12c0-.829.672-1.5 1.5-1.5h20c.828 0 1.5.671 1.5 1.5v12zM20.5 8.5l-8.5 5.5-8.5-5.5M3.5 16l3.5-2M20.5 16l-3.5-2" />
							</g>
						</svg>
					</div>
				</header>
				<div id="sidebar">
					<ul>
						<li className="myprofile"><a href="profile.html">My profile</a></li>
						<li className="wallet"><a href="#">Wallet</a></li>
						<li className="settings"><a href="#">Settings</a></li>
						<li className="invite"><a href="#">Invites Friends</a></li>
						<li className="help"><a href="#">Help</a></li>
					</ul>
				</div>
				<div className="options">
					<div className="button dndopt" id="optDrive">
						<a href='drive.html'>Offer a ride</a>
					</div>
					<div className="button dndopt" id="optDropped">
						<a href='drop.html'>Find a ride</a>
					</div>
				</div>
				<footer>footer</footer>
			</div>

		)
	};
}


export default Home;