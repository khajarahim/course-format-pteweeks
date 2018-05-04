
"use strict";
/**
 * npm install grunt grunt-load-gruntfile --save-dev grunt-contrib-uglify --save-dev grunt-contrib-jshint --save-dev grunt-contrib-less --save-dev grunt-contrib-watch --save-dev grunt-contrib-clean --save-dev
 * @param {type} grunt
 * @returns {undefined}
 */ 
module.exports = function (grunt) {
//    require("grunt-load-gruntfile")(grunt);
//    grunt.loadGruntfile("../../Gruntfile.js");
 
    // Load all grunt tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-clean");
    
    grunt.initConfig({
        jshint: {
            all: ['amd/src/*.js']
        },
        uglify:{
            development: {
                options: {
                    paths: ["amd/src/"],
                    compress: true
                },                                
                files: [{
                    expand: true,
                    cwd: 'amd/src/',
                    src: ['**/*.js'],
                    dest: 'amd/build/',
                    ext: '.min.js'
                }]
            }            
        },
        watch: {
            files: "less/*.less",
            tasks: ["less"]
        },
        less: {
            development: {
                options: {
                    paths: ["less/"],
                    compress: true
                },
                files: {   
                    "styles.css": "less/styles.less",
                    "styles_pteboost.css": "less/styles_pteboost.less"
                }
            }
        }        
    });
};