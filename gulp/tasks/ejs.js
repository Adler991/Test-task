

module.exports = function () {
	
	$.gulp.task('ejs', function () {
		return $.gulp.src('src/ejs/pages/*.ejs')
		.pipe($.gp.ejs({ msg: 'Hello Gulp!'}, {}, { ext: '.html' }))
		.pipe($.gulp.dest('build'))
		.on('end', $.browserSync.reload);
	});
}
