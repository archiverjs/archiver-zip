/**
 * archiver-zip
 *
 * Copyright (c) 2015 Chris Talkington.
 * Licensed under the MIT license.
 * https://github.com/archiverjs/archiver-zip/blob/master/LICENSE
 */
var zip = require('zip-stream');
var through = require('through2');

module.exports = function(opts) {
  opts = opts || {};

  return through.ctor({objectMode: true}, function(file, enc, cb) {
    cb(null, file);
    return;
  });
};