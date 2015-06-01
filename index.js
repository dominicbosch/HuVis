#!/usr/bin/env node
'use strict';

var fileName, servicePath, arrServices,
	fs = require( 'fs' ),
	path = require( 'path' ),
	express = require( 'express' ),
	app = express(),
	port = 80;

app.use( '/', express.static( path.resolve( __dirname, 'www' ) ) );

// Dynamically load all services from the services folder
console.log( 'LOADING WEB SERVICES: ' );
arrServices = fs.readdirSync( __dirname + '/services' ).filter(function( d ) {
	return ( d.substring( d.length - 3 ) === '.js' );
});
for( var i = 0; i < arrServices.length; i++ ) {
	fileName = arrServices[ i ];
	console.log( '  -> ' + fileName );
	servicePath = '/services/' + fileName.substring( 0, fileName.length - 3 );
	app.use( servicePath, require( '.' + servicePath ) );
}


// server = 
app.listen( port, function( d ) {
	console.log( 'HuVis Server listening on port ' + port );
});
