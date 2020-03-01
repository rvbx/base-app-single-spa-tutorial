//
// This script copies over UMD bundles to the project's assets folder
// It's called by the npm script npx-build-plus:copy-assets
// If you call it manually, call it from your projects root
// > node projects/base-app//copy-bundles.js
//

const copy = require('copy');

// console.log('Copy UMD bundles ...');

// copy('node_modules/@angular/*/bundles/*.umd.js', 'projects/base-app/src/assets', {}, _ => {});
// copy('node_modules/rxjs/bundles/*.js', 'projects/base-app/src/assets/rxjs', {}, _ => {});
copy('node_modules/zone.js/dist/*.js', 'src/assets/zone.js', {}, _ => { });
copy('node_modules/core-js/client/*.js', 'src/assets/core-js', {}, _ => { });

