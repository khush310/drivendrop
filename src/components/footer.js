import React from "react";
import { Link } from 'react-router';

class Footer extends React.Component {
	render() {
		return (<footer>
			<Link to='/offerride' id="drive">Drive</Link>
			<Link to='/findride' id="drop"> Get dropped </Link>
		</footer>)
	}
}

export default Footer;