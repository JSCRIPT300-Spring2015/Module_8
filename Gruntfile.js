module.exports = function (grunt) {

	grunt.initConfig({
		jst: {
			namespace: 'TFT'
		},
		files: {
			'app/public/js/templates/templates.js': ['app/public/js/templates/**/*.html']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-jst');
};