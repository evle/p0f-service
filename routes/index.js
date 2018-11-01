var express = require('express');
var router = express.Router();
var p0f = require('../p0f-client/')

const client = new p0f( '/Users/evle/Downloads/p0f-3.09b/p0f-socket' );



/* GET home page. */
router.get('/', function(req, res, next) {

  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  // console.log()
  ip = ip.slice(7, ip.length)

// ip = '111.7.130.101'
// console.log(ip)
  // console.log(ip)
  client.connect().then( () => {
    try {

      client.query( ip ).then( ( data ) => console.log( data ) );
    } catch ( err ) {
      console.log( err );
    }
  } );

  res.send('')

  // res.render('index', { title: 'Express' });


});

module.exports = router;
