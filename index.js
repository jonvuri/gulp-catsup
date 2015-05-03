var path = require('path')
var gutil = require('gulp-util')
var through = require('through2')
var catsup = require('catsup')

module.exports = function () {

	return through.obj(function (file, _, callback) {

		if (file.isNull()) {
			callback(null, file)
			return
		}

		if (file.isStream()) {
			callback(new gutil.PluginError('gulp-catsup', 'Streaming not supported'))
			return
		}

		var catsupResult = catsup({
			filename: path.basename(file.path),
			contents: file.contents.toString()
		})

		var that = this
		catsupResult.js.forEach(function (script) {
			var scriptFile = file.clone({ contents: false })
			scriptFile.path = path.join(path.dirname(file.path), script.filename)
			scriptFile.contents = new Buffer(script.contents)

			that.push(scriptFile)
		})

		file.contents = new Buffer(catsupResult.html.contents)
		this.push(file)

		callback()

	})

}
