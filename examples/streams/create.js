var AIO = require('../../index');

// create an instance
aio = AIO(process.env.AIO_KEY || 'xxxxxxxxxxxx');

// assumes you have already created 'Test'
aio.feeds('Test').create_stream(10, function(err, success) {

  if(err) {
    return console.error(err);
  }

  console.log(success ? 'created stream!' : 'creation failed :(');

});