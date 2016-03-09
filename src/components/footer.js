import React from "react";
import { Link } from 'react-router';

class Footer extends React.Component {
	render() {
		return (<footer>
			<div className="headersections" id="profileicon" onClick={this.props.onToggleSidebar}>
				<svg className="icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" fill="none"><path d="M9.5 13.281v2.719l-5.009 1.789c-1.194.427-1.991 1.558-1.991 2.825v1.886h19v-1.886c0-1.268-.797-2.398-1.991-2.825l-5.009-1.789v-2.906" /><ellipse cx="11.875" cy="8" rx="5" ry="6" /><path d="M16.828 7.453l-.453.047c-1.703.328-2.797-.289-3.734-1.93-.563 1.078-2.322 1.93-3.766 1.93-.711 0-1.323-.146-1.936-.466" /></g></svg>
			</div>
			<div className="headersections" id="messages">
				<svg className="icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" fill="none"><path d="M23.5 18c0 .828-.672 1.5-1.5 1.5h-20c-.828 0-1.5-.672-1.5-1.5v-12c0-.829.672-1.5 1.5-1.5h20c.828 0 1.5.671 1.5 1.5v12zM20.5 8.5l-8.5 5.5-8.5-5.5M3.5 16l3.5-2M20.5 16l-3.5-2" /></g></svg>
			</div>
			<div className="headersections" id="wallet">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" fill="none"><path d="M1.297 1.453l13.293 3.319c1.601.4 2.91 2.077 2.91 3.728v12c0 1.65-1.314 2.69-2.92 2.312l-11.16-2.624c-1.606-.379-2.92-2.038-2.92-3.688v-13c0-1.651 1.35-3 3-3h17c1.65 0 3 1.349 3 3v11c0 1.65-1.35 3-3 3h-3M9.5 3.5h10"/><circle cx="13" cy="13.5" r="2"/><path d="M17.5 8.5h2"/></g></svg>
			</div>
			<div className="headersections" id="favoriter">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" fill="none"><path d="M20.991 9.437c.311-.917.489-1.841.489-2.756 0-7.017-9.411-8.386-10.49-1.369-1.08-7.017-10.49-6.188-10.49 1.369 0 6.096 6.825 11.854 9.465 13.853"/><circle cx="16.994" cy="16.906" r="6"/><path stroke-linecap="round" d="M14.268 16.906h5.454M16.994 19.634v-5.454"/></g></svg>
			</div>
			<div className="headersections" id="passage">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" fill="none"><path stroke-linecap="round" d="M7.5 5.5v16M14.5 10.5v-10M11.497 18.645l-3.997 2.855-7-5v-16l7 5 7-5 7 5v7"/><circle cx="17.305" cy="17.307" r="3.805"/><path stroke-linecap="round" d="M20 20l3.5 3.5"/></g></svg>
			</div>
		</footer>
		)
	}
}

export default Footer;