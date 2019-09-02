const express = require("express");
const app = express();
var path = require('path');
const { exec } = require('child_process');
var os = require('os');

var APP_VERSION = '1.0';
var HOSTNAME = os.hostname();

var count = 0;
function addResponse(response, fromRequest) {
	response.route = fromRequest.url;
	response.time = new Date();
	response.count = count++;
	response.version = APP_VERSION;
	response.hostname = HOSTNAME;
};

app.get("/", function (req, res) {
	console.log(req.url); 
	// return the headers with some extra fields with HTML Formattings
	addResponse(req.headers, req)
	var response = JSON.stringify(req.headers, undefined, 4);
	res.send("Formated headers:	<br> <pre> " + response + "</pre>");
});

app.get("/headers", function (req, res) {
	console.log(req.url); 
	// return the headers with some extra fields, response is base JSON
	var response = req.headers;
	addResponse(response, req)
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify(response, undefined, 4));
});

app.get("/test", function (req, res) { 
	var response = new Object();
	addResponse(response, req)
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify(response, undefined, 4));
});

app.get("/terminate-v1", function (req, res) { 
	var response = new Object();
	addResponse(response, req)
	response.terminated = "TRUE"; 
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify(response, undefined, 4));
	process.exit (0);
});


const port = process.env.PORT || 8080;
app.listen(port, function () {
	console.log("Hello world listening on port", port);
});

