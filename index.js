'use strict';

var extend    = require('util-extend');
var gutil     = require('gulp-util');
var through   = require('through2');
var chalk     = require('chalk');

var Inspector = require('jsinspect/lib/inspector');
var Reporter  = require('jsinspect/lib/reporters');

module.exports = function(options) {
	var paths = [];

	options = extend({
		threshold: 15,
		noDiff: false,
		identifiers: false,
		suppress: 100,
		noColor: false,
		failOnMatch: true,
		reporter: 'default',
		ignore: ''
	}, options);

	if (options.noColor) {
		chalk.enabled = false;
	}

	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		paths.push(file.path);
		cb(null, file);
	}, function (cb) {
		if (paths.length === 0) {
			cb();
			return;
		}
		
		var self = this;

		var inspector = new Inspector(paths, {
			ignore:      options.ignore,
			threshold:   options.threshold,
			diff:        !options.noDiff,
			identifiers: options.identifiers
		});

		var reporter = new Reporter[options.reporter](inspector, {
			diff:     !options.noDiff,
			suppress: options.suppress
		});

		if (options.failOnMatch) {
			inspector.on('match', function() {
				self.emit('error', new gutil.PluginError('jsinspect-gulp', 'jsinspect failed', {
					showStack: false
				}));
			});
		}

		inspector.on('end', function() {
			cb();
		});
		
		inspector.on('error', function(err){
			self.emit('error', new gutil.PluginError('jsinspect-gulp', err.message, {
				showStack: false
			}));
		});

		inspector.run();
	});
};
