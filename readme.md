# gulp-jsinspect

> Detect copy-pasted and structurally similar code with [JSInspect](https://github.com/danielstjules/jsinspect)

## Install

    npm install --save-dev gulp-jsinspect

## Usage

	var gulp = require('gulp'),
		jsinspect = require('gulp-jsinspect');

	gulp.task('default', function(){
		return gulp.src('*.js')
			.pipe(jsinspect({/* options */}));
	});

## Options

 * `threshold` - minimum size of nodes (default: 15)
 * `identifiers` - match identifiers (default: false)
 * `diff` - enable 2-way diffs (default: false)

## License

[MIT License](https://en.wikipedia.org/wiki/MIT_License) &copy; Alexey Raspopov
