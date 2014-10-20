var extend = require('util-extend'),
	through = require('through2'),
	jsinspect = require('jsinspect/lib/inspector');

module.exports = function(options){
	options = extend({
		threshold: 15,
		identifiers: false,
		diff: false
	}, options);

	return through.obj();
};
