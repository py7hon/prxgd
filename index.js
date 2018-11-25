/*
* @Author: iqbal
* @Date:   2018-10-8 22:01:12
* @Last Modified by:   iqbal
* @Last Modified time: 2018-11-25 20:50:03
*/



'use strict';
require('dotenv').load();
var http = require('http')

// Create API Stream Video





//app.get('/videoplayback', require('./lib/videoplayback'))



module.exports = http.createServer((req, res) => {
    app(req, res, require('finalhandler')(req, res))
    // res.end()
})

module.exports.listen(process.env.PORT, function () {
    console.log(`Server running at http://${process.env.VIRTUAL_HOST}:${process.env.PORT}/`);
})
