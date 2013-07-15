var qr = require('./index')
  , fs = require('fs')
  , png = require('pngjs').PNG

fs.createReadStream('test-detect.png')
  .pipe(new png({filterType: 4}))
  .on('parsed', function() {
    var im = this

    qr.detect(im, function(err, data){
      console.log("!!", data);
    })
})
