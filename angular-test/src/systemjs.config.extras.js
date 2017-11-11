/**
 * Add barrels and stuff
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    packages: {
    // barrels
    'app/model': {main:'index.js', defaultExtension:'js'},
    'app/model/testing': {main:'index.js', defaultExtension:'js'}
    }
  });
})(this);
