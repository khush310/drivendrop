app.get("/layout", function(req, res){
	const html = <Layout name="khushboo"></Layout>;
	res.status(200).send("<!DOCTYPE html>\n" + compileToHtml(html));

});

app.get("/home", function(req, res){
	const html = <Home name="khushboo"></Home>;
	res.status(200).send("<!DOCTYPE html>\n" + compileToHtml(html));
});

app.get("/tutorial/:step", function(req, res) {
	let headline, footer;
	let step = req.params.step || "1";
	if (step == "1") {
		headline = <section className="bottomsection">
			<div className="textline1">Welcome to</div>
			<div className="logotxt">Drive'n'Drop</div>
			<div className="desc">Save on your travel! Odd or even day, reach your destination for FREE</div></section>;
		footer = <footer className="howitworks">
			<a href='/tutorial/2'>How does it work ></a></footer>;
	} else if (step == "2") {
		headline = <section className="bottomsection">
			<div className="intro">Offer a ride..</div>
			<div className="desc">and earn DnD cash! You can use this cash next time you need a ride!</div></section>;
		footer = <footer className="howitworks">
			<a href='/tutorial/3'>Continue ></a></footer>;
	} else {
		headline = <section className="bottomsection">
			<div className="intro">or..Get a ride</div>
			<div className="desc">and use your DnD cash! You can also earn this cash by giving a ride next time you are travelling!</div></section>;
		footer = <footer className="howitworks"><a href='/home'>Continue ></a></footer>;
	}
	const element = <Tutorialscreen headline={headline} footer = {footer}></Tutorialscreen>;
	res.status(200).send("<!DOCTYPE html>\n" + compileToHtml(element));
});

app.get("/offerride", function(req, res){
	let footer;
	footer = <footer className="howitworks">
		<a href='drive2.html'>Publish ></a>
	</footer>;
	const element = <OfferRide footer={footer}></OfferRide>
	res.status(200).send("<!DOCTYPE html>\n" + compileToHtml(element));
});

app.get("/findride", function(req, res){
	let footer;
	footer = <footer className="howitworks">
		<a href='/home'>Publish ></a>
	</footer>;
	const element = <FindRide footer={footer}></FindRide>
	res.status(200).send("<!DOCTYPE html>\n" + compileToHtml(element));
});


/*<div
 onClick={this.handleClick}
 >click me</div>*/


<header className="homeheader">
	<div className="headersections left" id="back">
		<Link to="/home">
			<svg id="backicon" version="1.1" id="Outline_Icons" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24">
				<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="18.5,0.55.5,12 18.5,23.5 " />
			</svg>
		</Link>
	</div>
	<div className="destsrc center">Destination</div>
	<div className="headersections right" id="messages">
		<svg className="icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
			<g stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" fill="none">
				<path d="M23.5 18c0 .828-.672 1.5-1.5 1.5h-20c-.828 0-1.5-.672-1.5-1.5v-12c0-.829.672-1.5 1.5-1.5h20c.828 0 1.5.671 1.5 1.5v12zM20.5 8.5l-8.5 5.5-8.5-5.5M3.5 16l3.5-2M20.5 16l-3.5-2" />
			</g>
		</svg>
	</div>
</header>

/***FOOTER
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

export default Footer;**
this is header
 (<header className="homeheader" id={this.props.id}>
 <div className="headersections" id="profileicon" onClick={this.props.onToggleSidebar}>
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

 <section id="dropbgd"></section>
 */


<Header onToggleSidebar={this.onToggleSidebar}  id="homescreen"></Header>


footer
	<div className="headersections" id="profileicon" onClick={this.props.onToggleSidebar}>
		<svg className="icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" fill="none"><path d="M9.5 13.281v2.719l-5.009 1.789c-1.194.427-1.991 1.558-1.991 2.825v1.886h19v-1.886c0-1.268-.797-2.398-1.991-2.825l-5.009-1.789v-2.906" /><ellipse cx="11.875" cy="8" rx="5" ry="6" /><path d="M16.828 7.453l-.453.047c-1.703.328-2.797-.289-3.734-1.93-.563 1.078-2.322 1.93-3.766 1.93-.711 0-1.323-.146-1.936-.466" /></g></svg>
	</div>
	<div className="headersections" id="messages">
	<svg className="icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g stroke="#000" strokeLinecap="round" stroke-linejoin="round" stroke-miterlimit="10" fill="none"><path d="M23.5 18c0 .828-.672 1.5-1.5 1.5h-20c-.828 0-1.5-.672-1.5-1.5v-12c0-.829.672-1.5 1.5-1.5h20c.828 0 1.5.671 1.5 1.5v12zM20.5 8.5l-8.5 5.5-8.5-5.5M3.5 16l3.5-2M20.5 16l-3.5-2" /></g></svg>
	</div>
	<div className="headersections" id="wallet">
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g stroke="#000" strokeLinecap="round" stroke-linejoin="round" stroke-miterlimit="10" fill="none"><path d="M1.297 1.453l13.293 3.319c1.601.4 2.91 2.077 2.91 3.728v12c0 1.65-1.314 2.69-2.92 2.312l-11.16-2.624c-1.606-.379-2.92-2.038-2.92-3.688v-13c0-1.651 1.35-3 3-3h17c1.65 0 3 1.349 3 3v11c0 1.65-1.35 3-3 3h-3M9.5 3.5h10"/><circle cx="13" cy="13.5" r="2"/><path d="M17.5 8.5h2"/></g></svg>
	</div>
	<div className="headersections" id="favoriter">
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" fill="none"><path d="M20.991 9.437c.311-.917.489-1.841.489-2.756 0-7.017-9.411-8.386-10.49-1.369-1.08-7.017-10.49-6.188-10.49 1.369 0 6.096 6.825 11.854 9.465 13.853"/><circle cx="16.994" cy="16.906" r="6"/><path strokeLinecap="round" d="M14.268 16.906h5.454M16.994 19.634v-5.454"/></g></svg>
	</div>
	<div className="headersections" id="passage">
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" fill="none"><path strokeLinecap="round" d="M7.5 5.5v16M14.5 10.5v-10M11.497 18.645l-3.997 2.855-7-5v-16l7 5 7-5 7 5v7"/><circle cx="17.305" cy="17.307" r="3.805"/><path strokeLinecap="round" d="M20 20l3.5 3.5"/></g></svg>
	</div>

		findride.js
	<Footer onToggleSidebar={this.onToggleSidebar} type="passenger"></Footer>


offerride.js
	<Header title="Offer a Ride" onclick={onToggleSidebar}></Header>

		routes.js
handleSwitch= (e) => {
	this.setState({active: false})
};

offerride.js
<Sidebar currentpage="Switch to Finding" store={this.props.store} currentlink="/findride" previouslink="/offerride"></Sidebar>




	<Link to={this.props.currentlink}>{this.props.currentpage}</Link>


offerride2
<Sidebar currentpage="Switch to Finding" store={this.props.store} currentlink="/findride" previouslink="/offerride"></Sidebar>
	<Sidebar currentpage="Switch to Finding" currentlink="/findride"></Sidebar>

	routes.js		/*const activeSidebar = store.cursor(["temp", "ui", "activesidebar"]).deref();*/


findride
<Sidebar currentpage="Switch to Offering" store={this.props.store} currentlink="/offerride" previouslink="/findride"></Sidebar>



	<div style={{color:"#3ab0ba"}}>Kar bhala to ho bhala!</div>