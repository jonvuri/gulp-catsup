# gulp-catsup

Gulp plugin to fix CSP errors by extracting inline scripts from HTML.


## Installation

```
$ npm install --save-dev gulp-catsup
```


## Usage

```js
var gulp = require('gulp');
var catsup = require('gulp-catsup');

gulp.task('default', function () {
	return gulp.src('src/index.html')
		.pipe(catsup())
		.pipe(gulp.dest('dist'));
});
```


## License

ISC © 2015 [jrajav](https://github.com/jrajav)
