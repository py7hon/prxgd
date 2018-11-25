/*
* @Author: iqbal
* @Date:   2018-10-8 22:01:12
* @Last Modified by:   iqbal
* @Last Modified time: 2018-11-25 20:50:03
*/

'use strict';

const qs = require('querystring')
const url = require('url')

module.exports = (req, res, next) => {
  req.query = qs.parse(
    url.parse(req.url).query
  )
  next()
}