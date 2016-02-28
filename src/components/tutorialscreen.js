import React from "react";

class Tutorialscreen extends React.Component {
	render(){
		return (
			<div className="stage" id="landing">
				<section className="topsection">
					<img className="logoimg" src="/_assets/images/zero-cab_1x.png" />
					</section>
				{this.props.headline}
				{this.props.footer}
			</div>
		)
	};
}
export default Tutorialscreen;