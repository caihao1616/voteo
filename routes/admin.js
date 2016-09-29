var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var ip = req.connection.remoteAddress;
  console.log(`a user tried admin with ip: ${ip}`);
  if(ip && ip.replace(/:/g, '') === '1'){
    res.render('admin');
  }
  else{
    res.status(403);
    res.render('error', {
      message: 'You have no permission',
      error: {status: 403}
    });
  }
});

module.exports = router;
