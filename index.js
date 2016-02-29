import React from "react";
import express from "express";
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from "./src/routes";
import {createStore} from "./src/store";

var app = express();
app.use("/_assets", express.static("./public"));

export function compileToHtml(string){
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

app.get("/*", function(req, res) {
  const store = createStore();

  function createElement(Component, props) {
    return <Component {...props}  store={store}/>
  }

  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const string = renderToString(<RouterContext {...renderProps} createElement={createElement} />);
      res.status(200).send(compileToHtml(string))
    } else {
      res.status(404).send('Not found')
    }
  })
})

var port = process.env.PORT || 4000;
app.listen(port, function(){
    console.log("listing to " + port);
});
