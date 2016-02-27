import React from "react";
import {renderToString} from "react-dom/server";
import express from "express";
import Layout from "./src/components/layout.js";
import Home from "./src/components/home.js";

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
            </head>
            <body style="overflow: hidden;">
                <div role="main">
                    ${string}
                </div>
            </body>
        </html>
      `;
    return response;
}
app.get("/layout", function(req, res){
    const html = <Layout name="khushboo"></Layout>;
    res.status(200).send("<!DOCTYPE html>\n" + compileToHtml(html));

});
app.get("/home", function(req, res){
    const html = <Home name="khushboo"></Home>;
    res.status(200).send("<!DOCTYPE html>\n" + compileToHtml(html));

});

var port = process.env.PORT || 4000;
app.listen(port, function(){
    console.log("listing to " + port);
});

