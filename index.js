import React from "react";
import {renderToString} from "react-dom/server";
import express from "express";
import Layout from "./src/components/layout";
import Home from "./src/components/home";
import Tutorialscreen from "./src/components/tutorialscreen";
import OfferRide from "./src/components/offerride";
import FindRide from "./src/components/findride";

const html = <Home name="khushboo"></Home>;
var app = express();
app.use("/_assets", express.static("./public"));

export function compileToHtml(reactEl){
    var string = renderToString(reactEl);
    const response = `
        <html>
            <head>
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <title>drivendrop</title>
                <link href="/_assets/css/index.css" rel="stylesheet" type="text/css"> </link>
                <link href='https://fonts.googleapis.com/css?family=Handlee|Short+Stack|Work+Sans:400,700|Quicksand:400,700|Indie+Flower|Raleway+Dots|Just+Me+Again+Down+Here|Bubbler+One' rel='stylesheet' type='text/css'>
            </head>
            <body style="overflow: hidden;">
                <div id="wrapper" role="main" style="width: 100%; height: 100%;">
                    ${string}
                </div>
                <script src="http://localhost:5000/static/editor.js" type="text/javascript" ></script>
            </body>
        </html>
      `;
    return response;
};

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

var port = process.env.PORT || 4000;
app.listen(port, function(){
    console.log("listing to " + port);
});
