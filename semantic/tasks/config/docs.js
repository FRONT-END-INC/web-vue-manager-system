/*******************************
             Docs
*******************************/

/* Paths used for "serve-docs" and "build-docs" tasks */
module.exports = {
  base: '',
  globs: {
    eco: '**/*.html.eco'
  },
  paths: {
    clean: '../docs/out/semantic-ui/',
    source: {
      config      : 'src/theme.config',
      definitions : 'src/definitions/',
      site        : 'src/site/',
      themes      : 'src/themes/'
    },
    output: {
      examples     : '../docs/out/examples/',
      less         : '../docs/out/src/',
      metadata     : '../docs/out/',
      packaged     : '../docs/out/semantic-ui/',
      uncompressed : '../docs/out/semantic-ui/components/',
      compressed   : '../docs/out/semantic-ui/components/',
      themes       : '../docs/out/semantic-ui/themes/'
    },
    template: {
      eco: '../docs/server/documents/'
    },
  }
};
