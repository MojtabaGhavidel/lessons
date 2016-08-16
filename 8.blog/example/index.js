'use strict';
const Hapi = require('hapi');
const Vision = require('vision');
const Inert = require('inert');
const Path = require('path')
const internals = {};
let uuid = 1;       // Use seq instead of proper unique identifiers for demo only
const rootHandler = function (request, reply) {
    reply.view('index', {
        title: 'examples/views/jade/index.js | Hapi ' + request.server.version,
        message: 'Index - Hello World!'
    });
};
const users = {
    geek: {
        id: 'john',
        password: 'password',
        name: 'John Doe'
    }
};
const login = function (request, reply) {
	if (request.auth.isAuthenticated) {
  	reply.view('index');
  }
  let message = '';
  let account = null;
  if (request.method === 'post') {
  	if (!request.payload.username || !request.payload.password) {
    	message = 'Missing username or password';
    }
    else {
    	account = users[request.payload.username];
    	if (!account || account.password !== request.payload.password) {
      	message = 'Invalid username or password';
				return console.log('wrong pass');
      }
    }
	}
  if (request.method === 'get' || message) {
  	return reply.view('login')
	};
  const sid = String(++uuid);
  request.server.app.cache.set(sid, { account: account }, 0, (err) => {
  	if (err) {
  		return reply(err);
	  }
  	request.cookieAuth.set({ sid: sid });
      
	let isLoggedin = true ;
  		return reply.view('index', { isLoggedin: true});
	});
};
const logout = function (request, reply) {
    request.cookieAuth.clear();
    return reply.redirect('/login');
};
const server = new Hapi.Server();
server.connection({ port: 8000 });
server.register(require('../'), (err) => {
	if (err) {
		throw err;
	}
	server.register(require('vision'), (err) => {
		if (err) {
  		console.log("Failed to load vision.");
 		}
	});
	server.register(Inert, () => {});
	server.views({
		engines: { jade: require('jade') },
		path: __dirname + '/templates',
		compileOptions: {
			pretty: true
  	}
	});
	const cache = server.cache({ segment: 'sessions', expiresIn: 3 * 24 * 60 * 60 * 1000 });
		server.app.cache = cache;
		server.auth.strategy('session', 'cookie', false, {
			password: 'password-should-be-32-characters',
			cookie: 'sid-example',
			redirectTo : '/login',
			isSecure: false,
			validateFunc: function (request, session, callback) {
				cache.get(session.sid, (err, cached) => {
					if (err) {
						return callback(err, false);
					}
					if (!cached) {
						return callback(null, false);
					}
						return callback(null, true, cached.account);
				});
			}
		});
	console.log(cache);
	server.route(
		{ method: 'GET',
			path: '/',
			config: {
				handler: rootHandler
			 } 
		});
	server.route({
		method: ['GET', 'POST'],
		path: '/login',
		config:{
			handler: login,
			//auth: { mode: 'try' }, 
			plugins: {
				'hapi-auth-cookie': { redirectTo: false }
			}
		}
	});
	server.route({
		method: 'GET',
		path: '/logout',
		config:	{
			handler: logout
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
