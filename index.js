var qrcode = require('./src/qrcode')


module.exports = {
  encode : function(data, cb){

  }

, decode : function(im, cb){

  }

, detect : function(im, cb){
  console.log("Detect", im)
  qrcode.process(im, cb);


  }
}
