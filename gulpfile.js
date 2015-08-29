var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

var nodeDir = './node_modules/';

elixir(function(mix) {
    mix.sass('app.scss')
        .scripts([
            'jquery-2.1.4.min.js',
            '../../../' + nodeDir + 'bootstrap-sass/assets/javascripts/bootstrap.js',
            
            // VUE
            // Append to package.json: "vue": "0.12.10"
            // '../../../' + nodeDir + 'vue/dist/vue.js',
            
            'app.js'
        ])
        .copy(nodeDir + 'bootstrap-sass/assets/fonts', 'public/fonts')
});
