module.exports  = {
  build   : 'dist',
  server  : 'server',
  app     : 'client/app',
  data    : 'client/assets/data',
  images  : 'client/assets/images',
  fonts   : 'client/assets/fonts',
  styles  : 'client/assets/styles',
  app_files: {

    // Source excluding test files
    js: [ 'client/app/**/*.js', '!client/app/**/*.spec.js'],

    // Entry page
    html: [ 'client/index.html' ],

    // Module styles
    scss: [ 'client/app/**/*.scss' ]
  },
  vendor_files  : {
    js: [
      'vendor/angular/angular.js',
      'vendor/lodash/dist/lodash.js'
    ],
    css: [
      'vendor/animate.css/animate.min.css'
    ]
  },
  sass_bootstrap_dir : 'vendor/bootstrap-sass-official/assets/stylesheets'
};
