import React from "react";
import { Link } from 'react-router';

class CreateAccount extends React.Component {
	checkpassword = (e) => {

	}
	render(){
		let step = this.props.params.step;
		let content;
		const questionstyle = Object.assign({fontSize: "1.5em", padding: "2em 0"});

		if (step == "1") {
			content = <div>
				<Link to='/login'>Back</Link>
				<div style={questionstyle}>
					What's your name?
				</div>
				<form>
					<input type="text" placeholder="FIRST NAME"/>
					<input type="text" placeholder="LAST NAME"/>
				</form>
				<Link to='/createaccount/2'>Next</Link>
			</div>

		} else if (step == "2") {

			content = <div >
				<Link to='/createaccount/1'>Back</Link>
				<div style={questionstyle}>
					What's your email ID?
				</div>
				<form>
					<input type="email" placeholder="EMAIL ADDRESS"/>
				</form>
				<Link to='/createaccount/3'>Next</Link>
			</div>

		} else if (step == "3") {

			content = <div>
				<Link to='/createaccount/2'>Back</Link>
					<div style={questionstyle}>
						When is your birthdate?
					</div>
					<div>You must be above 18 years old to be able to drive or travel using DND</div>
					<form>
						<input type="date" placeholder="DD/MM/YYYY"/>
					</form>
				<Link to='/createaccount/4'>Next</Link>
			</div>

		} else if (step == "4") {
			content = <div>
				<Link to='/createaccount/3'>Back</Link>
					<div style={questionstyle}>
							Create your password
				</div>
				<form>
					<input type="password" placeholder="PASSWORD" />
					<input type="password" placeholder="CONFIRM PASSWORD" onkeyup="checkpassword"/>
				</form>
				<Link to='/home'>Done</Link>
			</div>
		}
		return(<div className="createaccountpage" style={{color: "white", background:"#00c5d1", width: "100%", height: "100%"}}>
					{content}
			</div>
		)
	};
}
export default CreateAccount;