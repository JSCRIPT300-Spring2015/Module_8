module.exports = function (grunt) {

	grunt.initConfig({
		jst: {
	            compile: {
	                options: {
	                    namespace: 'TFT',
	                    processName: function (filepath) {
	                        return filepath.replace(/(app\/public\/js\/templates\/|\.tpl)/ig, '');
	                    }
	                },
	                files: {
	                    'app/public/js/templates/templates.js': 'app/public/js/templates/*.tpl'
	                }
	            }
	        },
	        browserify: {
	        	app: {
	        		src: 'app/public/js/main.js',
	        		dest: 'app/public/js/main.bundled.js'
	        	}
	        }
	});
	grunt.loadNpmTasks('grunt-contrib-jst');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.registerTask('default', ['jst', 'browserify']);
};
