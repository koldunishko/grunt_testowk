module.exports = function(grunt){
    const sass = require('node-sass'); 

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            js: {
                src: [
                    'buttonclick/*.js',
                    'onarea/*.js' // Все JS в папке 
                   
                ],
                dest: 'product/product.js',
            },
            css: {
                src: [
                    'buttonclick/*.css',
                    'onarea/*.css',
                    'test/*.css'
                    
                ],
                dest: 'product/prod.css'


            }
        },
        uglify: {
            buildJS: {
                src: 'product/product.js',
                dest: 'product/product.min.js'
            },buildCSS: {
                src: 'product/prod.css',
                dest: 'project/product.min.css'

            }

        },sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                    'test/mix.css': 'test/mixins.scss'
                }
            }
        }



    });

    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');
    

    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['concat', 'uglify','sass']);

};