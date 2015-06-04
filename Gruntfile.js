module.exports = function (grunt) {

	grunt.initConfig({
		jst: {
			namespace: 'TFT'
		},
		files: {
			'app/public/js/templates/templates.js': ['**/**/*.tpl']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-jst');
	grunt.registerTask('default', ['jst']);
};