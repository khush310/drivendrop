import React from "react";
import { Link } from 'react-router';
class Sidebar extends React.Component {
	constructor(props) {
		super(props);
	};
	toggleBack = (e) => {
		this.props.ontoggle();
	};
	render(){
		const {store} = this.props;
		const user = store.cursor(["profileUser"]).deref();
		const linkStyle = {display:"flex", justifyContent:"center", fontSize:"1.35em", height:"100%", alignItems:"center"};
		const listStyle = {height:"20%", display:"flex"};

		return (
			<div className="sidebar" style={{left:'-65%!important', display:"flex", justifyContent:"flex-start", flexDirection:"column", alignItems:"center"}}>
				<div style={{height:"22%", width:"60%", margin:"2em 0 0 0", borderRadius:"50%", overflow:"hidden"}}>
					<Link style={{width:"100%", height:"100%", display:"block"}}onClick={this.toggleBack} to={"/public/profile/" + user.get('id')} store={this.props.store}>
						<img style={{width:"100%"}}src={user.get("img")} />
					</Link>
				</div>
				<ul style={{height:"45%", width:"100%", padding:"0"}}>
					<li style={listStyle}>
						<Link style={linkStyle} onClick={this.toggleBack} to="/public/wallet">Wallet</Link>
					</li>
					<li style={listStyle} className="invite">
						<Link style={linkStyle} to="/home">Invites Friends</Link>
					</li>
					<li style={listStyle}>
						<Link style={linkStyle} to="/home">Log Out</Link>
					</li>
				</ul>
			</div>
		)
	};
}
export default Sidebar;