'use strict';

var extend = require('util-extend'),
	through = require('through2'),
	gutil = require('gulp-util'),
	jsinspect = require('jsinspect/lib/inspector'),
	PluginError = gutil.PluginError;

module.exports = function(options){
	options = extend({
		threshold: 30,
		diff: true,
		identifiers: false,
		failOnMatch: true
	}, options);

	var files = [];

	return through.obj(function(file, enc, cb){
		if(file.isNull()){
			return cb(null, file);
		}

		if(file.isStream()){
			return cb(new PluginError('gulp-jsinspect', 'Streaming not supported'));
		}

		files.push(file);
		cb(null, file);
	}, function(cb){
		// inspect
		cb();
	});
};
