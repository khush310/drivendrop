import React from "react";
import express from "express";
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from "./routes";
import {createStore} from "./store";
import loginAPI from "./api/login"

var app = express();
app.use("/_assets", express.static("./public"));

export function getBundleURL(){
  if (process.env.NODE_ENV == "production"){
    return "/_assets/bundle.js"
  } else {
    return "http://localhost:5000/static/bundle.js"
  }
}

export function compileToHtml(string){
    const response = `
        <html>
            <head>
                <meta charSet='utf-8' />
                <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                <title>drivendrop</title>
                <link href="/_assets/css/index.css" rel="stylesheet" type="text/css"> </link>
                <link href='https://fonts.googleapis.com/css?family=Handlee|Indie+Flower|Raleway+Dots|Just+Me+Again+Down+Here|Bubbler+One|Quicksand:400,700|Poiret+One|Short+Stack|Delius|Work+Sans:400,700|Swanky+and+Moo+Moo|Dekko' rel='stylesheet' type='text/css'>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
                <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCP-lTN2k3QEeRdmjz-GZqnlaiybpH5-0c&libraries=geometry,drawing,places"></script>
            </head>
            <body style="overflow: hidden;">
                <div id="wrapper" role="main" style="width: 100%; height: 100%;">${string}</div>
                <script src=${getBundleURL()} type="text/javascript" ></script>
                <script>
                  window.fbAsyncInit = function() {
                    FB.init({
                      appId      : '249616182050866',
                      xfbml      : true,
                      version    : 'v2.5'
                    });
                  };
                  (function(d, s, id){
                     var js, fjs = d.getElementsByTagName(s)[0];
                     if (d.getElementById(id)) {return;}
                     js = d.createElement(s); js.id = id;
                     js.src = "//connect.facebook.net/en_US/sdk.js";
                     fjs.parentNode.insertBefore(js, fjs);
                   }(document, 'script', 'facebook-jssdk'));

                  var swiper = new Swiper('.swiper-container', {
                      pagination: '.swiper-pagination',
                      paginationClickable: true,
                      direction: 'vertical'
                  });
                </script>
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
});

loginAPI(app);

var port = process.env.PORT || 4000;
app.listen(port, function(){
    console.log("listing to " + port);
});
