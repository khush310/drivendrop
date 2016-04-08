import React from "react";
import { Link } from 'react-router';

class Tutorialscreen extends React.Component {
	render(){
		let headline, footer;
		let step = this.props.params.step;
		const footerStyle={height:"10%", background:"#00c5d1", display:"flex", alignItems:"center", fontSize:"1.5em"};
		const lastfooter = {height:"10%", background:"#fff", display:"flex", alignItems:"center", fontSize:"1.5em"};

		if (step == "1") {
			headline = <section style={{height:"100%", background:"#FFE03C", color:"#333333"}}>
				<div className="textline1" style={{width:"100%", marginTop:"2em", fontSize:"2.3em"}}>
					Welcome to
				</div>
				<img className="logoimg" src="/_assets/images/zero-cab_1x.png" />
				<div className="logotxt" style={{fontFamily:"Poiret One", fontSize:"3em", color:"#3ab0ba"}}>
					Drive'n'Drop
				</div>
				<div className="desc" style={{fontSize:"1.3em", padding:"0.8em"}}>
					Save on your travel! Odd or even day, reach your destination for FREE!
				</div>
			</section>;
			footer = <footer style={footerStyle} className="dndbutton"><Link to='/tutorial/2' style={{color:"#efefef"}}>How does it work ></Link></footer>;

		} else if (step == "2") {
			headline = <section style={{height:"100%", background:"#fff", color:"#333333"}}>
				<img className="logoimg" src="/_assets/images/zero-cab_1x.png" />
				<div className="intro" style={{fontSize:"3em", color:"#3ab0ba"}}>
					Offer a ride..
				</div>
				<div className="desc" style={{fontSize:"1.3em", padding:"0.8em"}}>
					and earn DnD cash! You can use this cash next time you need a ride!
				</div>
			</section>;
			footer = <footer style={footerStyle} className="dndbutton"><Link to='/tutorial/3'>Continue ></Link></footer>;

		} else {
			headline = <section style={{height:"100%", background:"#00c5d1", color:"#333333"}}>
				<img className="logoimg" src="/_assets/images/zero-cab_1x.png" />
				<div className="intro" style={{fontSize:"3em", color:"#fff"}}>
					or..Get a ride
				</div>
				<div className="desc" style={{fontSize:"1.3em", padding:"0.8em"}}>
					and use your D'n'D cash! You can also earn this cash by giving a ride next time you are travelling!
				</div>
			</section>;
			footer = <footer style={lastfooter} className="dndbutton"><Link to='/login' style={{color:"00c5d1"}}>Continue ></Link></footer>;
		}

		return (
			<div style={{height:"100%", display:"flex", flexDirection:"column"}}>
				{headline}
				{footer}
			</div>
		)
	};
}
export default Tutorialscreen;