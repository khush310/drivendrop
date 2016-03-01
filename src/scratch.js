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