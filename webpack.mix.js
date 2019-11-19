const mix = require('laravel-mix');

mix
    .js('resources/app.js', 'js')
    .js('resources/vue.js', 'js')
    .sass('resources/app.scss', 'css')
;
