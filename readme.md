# gulp-[jsinspect](https://github.com/danielstjules/jsinspect)

> Gulp plugin for running jsinspect (detect copy-pasted and structurally similar code)

[![Dependency Status](https://david-dm.org/alexeyraspopov/gulp-jsinspect.svg)](https://david-dm.org/alexeyraspopov/gulp-jsinspect)

## Install

```sh
$ npm install --save-dev gulp-jsinspect
```

## Usage

```javascript
var gulp = require('gulp');
var jsinspect = require('gulp-jsinspect');

gulp.task('default', function () {
  return gulp.src('app.js')
    .pipe(jsinspect({
      'threshold':   10,
      'identifiers': true,
      'suppress':    0
    }));
});
```

### Options

#### threshold

Type: `Number`
Default value: `15`

Number of nodes.

#### suppress

Type: `Number`
Default value: `100`

length to suppress diffs (off: 0).

#### identifiers

Type: `Boolean`
Default value: `false`

Match identifiers.

#### noDiff

Type: `Boolean`
Default value: `false`

Disables 2-way diffs.

#### noColor

Type: `Boolean`
Default value: `false`

Disables colors.

#### failOnMatch

Type: `Boolean`
Default value: `true`

#### reporter

Type: `String`
Default value: `default`

Specify the reporter.
