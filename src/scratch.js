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