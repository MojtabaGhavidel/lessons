'use strict';
const Hapi = require('hapi');
const Vision = require('../..');
const Inert = require('inert');
const Path = require('path')
const internals = {};

const rootHandler = function (request, reply) {
    reply.view('index', {
        title: 'examples/views/jade/index.js | Hapi ' + request.server.version,
        message: 'Index - Hello World!'
    });
};
internals.main = function () {
	console.log(__dirname);
    const server = new Hapi.Server();
    server.connection({ port: 8000 });
    server.register([Vision, Inert], (err) => {
        if (err) {
            throw err;
        }
        server.views({
            engines: { jade: require('jade') },
            path: __dirname + '/templates',
            compileOptions: {
                pretty: true
            }
        });
        server.route({
					 method: 'GET',
					 path: '/',
					 handler: rootHandler });
        //server.route({ method: 'GET', path: '/template', handler: templateHandler });
				server.route({ 
					method: 'GET',
					 path: '/templates/{params*}',
					 handler: {
						 directory: {
							 path:'templates'
							}
					 }
				 });
				server.route({ 
					method: 'GET',
					path: '/bower_components/{params*}',
					handler: {
						directory: {
							 path:'bower_components'
				}
			 }
	 });
				server.route({ 
					method: 'GET',
					path: '/public/{params*}',
					handler: {
						directory: {
							 path:'public'
				}
			 }
	 });
        server.start((err) => {
            if (err) {
                throw err;
            }
            console.log('Server is listening at ' + server.info.uri);
        });
    });
};
internals.main();
