import React from "react";
import Header from "./header.js";
import {center} from "../stylesheets/center";

class Notifications extends React.Component {
	renderRequest(message){
		return(<div>
			{message.get("type")}
		</div>)
	};
	render(){
		const {store} = this.props;
		const messages = store.cursor(["messages", "list"]).deref();
		const centered = Object.assign(center, {flexDirection: "column"});
		return (<div style={{width:"100%", height: "100%"}}>
				<section style={centered}>
					{messages.map((message) =>{
						if (message.get("type") == "request"){
							return this.renderRequest(message);
						}
					})}
				</section>
			</div>
		)
	};
}
export default Notifications;