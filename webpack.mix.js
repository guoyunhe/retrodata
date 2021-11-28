const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.ts("resources/ts/landing/index.tsx", "public/js/landing.js")
    .ts("resources/ts/academy/index.tsx", "public/js/academy.js")
    .ts("resources/ts/admin/index.tsx", "public/js/admin.js")
    .ts("resources/ts/supply/index.tsx", "public/js/supply.js")
    .react()
    .extract();

mix.browserSync("aalto.reagent.local");
