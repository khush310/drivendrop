import React from "react";
import { Link } from 'react-router';

class Tutorialscreen extends React.Component {
	render(){
		let headline, footer;
		let step = this.props.params.step;

		if (step == "1") {
			headline = <section className="bottomsection">
				<div className="textline1">Welcome to</div>
				<div className="logotxt">Drive'n'Drop</div>
				<div className="desc">Save on your travel! Odd or even day, reach your destination for FREE</div></section>;
			footer = <footer className="howitworks"><Link to='/tutorial/2'>How does it work ></Link></footer>;

		} else if (step == "2") {
			headline = <section className="bottomsection">
				<div className="intro">Offer a ride..</div>
				<div className="desc">and earn DnD cash! You can use this cash next time you need a ride!</div></section>;
			footer = <footer className="howitworks"><Link to='/tutorial/3'>Continue ></Link></footer>;

		} else {
			headline = <section className="bottomsection">
				<div className="intro">or..Get a ride</div>
				<div className="desc">and use your DnD cash! You can also earn this cash by giving a ride next time you are travelling!</div></section>;
			footer = <footer className="howitworks"><Link to='/home'>Continue ></Link></footer>;

		}

		return (
			<div className="stage" id="landing">
				<section className="topsection">
					<img className="logoimg" src="/_assets/images/zero-cab_1x.png" />
					</section>
				{headline}
				{footer}
			</div>
		)
	};
}
export default Tutorialscreen;