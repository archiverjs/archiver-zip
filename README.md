# archiver-zip v0.1.0 [![Build Status](https://travis-ci.org/archiverjs/archiver-zip.svg?branch=master)](https://travis-ci.org/archiverjs/archiver-zip)

> zip [archiver](https://github.com/archiverjs/node-archiver) plugin

## Install

```bash
$ npm install --save archiver-zip
```

## Usage

```js
var Archiver = require('archiver');
var ArchiverZip = require('archiver-zip');

new Archiver()
  .src('files/*.html')
  .pipe(archive.dest('dest/archive.zip'))
  .use(ArchiverZip())
  .run();
```

## API

### ArchiverZip(options)

#### TBA

## Things of Interest
- [Changelog](https://github.com/archiverjs/archiver-zip/releases)
- [Contributing](https://github.com/archiverjs/archiver-zip/blob/master/CONTRIBUTING.md)
- [MIT License](https://github.com/archiverjs/archiver-zip/blob/master/LICENSE)