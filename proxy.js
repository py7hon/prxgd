/*
* @Author: iqbal
* @Date:   2018-10-8 22:01:12
* @Last Modified by:   iqbal
* @Last Modified time: 2018-11-25 20:50:03
*/

'use strict'

const base64 = require('base64url')

const createProxyVideo = (video, cookie) => {
  return Object.assign({}, video, {
    src: toProxyURL(video.originSrc, cookie)
  })
}

const toProxyURL = (url, cookie) => {
  const hash = base64(JSON.stringify({
    cookie,
    url
  }))
  return `http://${process.env.VIRTUAL_HOST}:${process.env.PORT}/googledrive/videoplayback?hash=${hash}`
}

module.exports = {
  createProxyVideo: createProxyVideo
}