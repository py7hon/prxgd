/*
* @Author: iqbal
* @Date:   2018-10-8 22:01:12
* @Last Modified by:   iqbal
* @Last Modified time: 2018-11-25 20:50:03
*/

'use strict';

var got = require('got')

module.exports = (docId) => {
  return Promise.all([
    posiblePromise(getFromMailDomain(docId)),
    posiblePromise(getFromUseDrive(docId))
  ])
  .then(result => {
    var [resultFromMail, resultFromDrive] = result
    if (resultFromMail !== null) {
      return Promise.resolve(resultFromMail)
    }

    if (resultFromDrive !== null) {
      console.log(resultFromDrive);
      return Promise.resolve(resultFromDrive)
    }
    return Promise.resolve(null)
  })
}

// Get link from https://mail.google.com
const getFromMailDomain = (docId) => {
  return got(`https://drive.google.com/get_video_info?docid=${docId}`, {
    timeout: 5200,
    retries: 1,
    headers: {
      'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36",
      'cookie': ""
    }
  })
}

// Get link from https://drive.google.com
const getFromUseDrive = (docId) => {
  return got(`https://drive.google.com/get_video_info?docid=${docId}`, {
    timeout: 5200,
    retries: 1,
    headers: {
      'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36",
    }
  })
}

// Same it try catch
const posiblePromise = (p, defaultValue = null) => {
  return new Promise(resolve => {
    p.then(resolve).catch(err => {
      resolve(defaultValue)
    })
  })
}
