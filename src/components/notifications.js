import React from "react";
import Header from "./header.js";
import {center} from "../stylesheets/center";

class Notifications extends React.Component {
	renderRequest(message){
		return(<div style={{width: "95%", height:"15%", border: "1px solid rgb(0, 197, 209)", borderRadius: "5px", marginTop: "0.8em", padding: "0.8em", textAlign: "left"}}>
			<div style={{width: "10%", height: "70%", float: "left", marginRight: "0.8em", marginTop:"0.4em"}}>
				<img src={message.get("userpic")} style={{width: "100%", float: "left"}} />
			</div>
			<div style={{fontWeight: "bold"}}>{message.get("from")}</div>
			<div>has sent you a request</div>
		</div>)
	};
	renderAccept(message){
		return(<div style={{width: "95%", height:"15%", border: "1px solid rgb(0, 197, 209)", borderRadius: "5px", marginTop: "0.8em", padding: "0.8em", textAlign: "left"}}>
			<div style={{width: "10%", height: "70%", float: "left", marginRight: "0.8em", marginTop:"0.4em"}}>
				<img src={message.get("userpic")} style={{width: "100%", float: "left"}} />
			</div>
			<div style={{fontWeight: "bold"}}>{message.get("from")}</div>
			<div>has accepted your request</div>
		</div>)
	}
	render(){
		const {store} = this.props;
		const messages = store.cursor(["messages", "list"]).deref();
		const centered = Object.assign(center, {flexDirection: "column"});
		return (<div style={{width:"100%", height: "100%"}}>
				<section style={centered}>
					{messages.map((message) =>{
						if (message.get("type") == "request"){
							return this.renderRequest(message);
						} else if (message.get("type") == "accept"){
							return this.renderAccept(message);
						}
					})}
				</section>
			</div>
		)
	};
}
export default Notifications;