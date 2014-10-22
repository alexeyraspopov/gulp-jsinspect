var extend = require('util-extend'),
	through = require('through2'),
	jsinspect = require('jsinspect/lib/inspector');

module.exports = function(options){
	options = extend({
		threshold: 15,
		identifiers: true,
		diff: true
	}, options);

	var files = [];

	return through.obj(function(file, enc, cb){
		if(file.isNull()){
			return cb(null, file);
		}

		if(file.isStream()){
			return cb(new PluginError('gulp-complexity', 'Streaming not supported'));
		}

		files.push(file);
		cb(null, file);
	}, function(cb){

		cb();
	});
};
