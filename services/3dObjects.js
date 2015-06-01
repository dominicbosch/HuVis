'use strict';

var router = require( 'express' ).Router();
var Sequelize = require( 'sequelize' );
var sequelize = new Sequelize( 'huvisdb', 'huvisuser', 'HuVi$',  {
	host: 'localhost',
	dialect: 'postgres'
});

var User = sequelize.define('User', {
	username: Sequelize.STRING,
	lastname: Sequelize.STRING,
	birthday: Sequelize.DATE
});
sequelize.sync({force: true})
	.then(function() {
		User.create({
			username: 'janedoe',
			birthday: new Date(1980, 6, 20)
		});
	})
	.then(function() {
		console.log(User.findAll({
			where: {
				username: 'janedoe'
			}
		}));
	})
// sequelize.sync()
// 	// .then(function() {
// 	// 	User.create({
// 	// 		username: 'janedoe',
// 	// 		birthday: new Date(1980, 6, 20)
// 	// 	});
// 	// })
// 	.then(function(jane) {
// 		console.log(jane.get({
// 			plain: true
// 		}))
// 	});

router.get( '/terrain/:id/get', function( req, res) {
	console.log( req.params );
	res.status( 501 ).send( 'Terrain needs to be implemented' );
});

router.get( '/building/:id/get', function( req, res) {
	console.log( req.params );
	res.status( 501 ).send( 'Building needs to be implemented' );
});

module.exports = router;