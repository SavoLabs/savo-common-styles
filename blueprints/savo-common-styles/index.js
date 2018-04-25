const fs = require('fs');

/* eslint-env node */
module.exports = {
  description: '',

  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us)
  },

  afterInstall(options) {
    return this._insertImportIntoAppCss(options);
  },

  _insertImportIntoAppCss(options) {
    let baseDir = options.project.isEmberCLIAddon() ? 'tests/dummy/app/styles' : 'app/styles';
    let appStylesFile = 'app.scss';
    let appStylesPath = `${baseDir}/${appStylesFile}`;
    
    if (fs.existsSync(appStylesPath)) {
      let text = "@import 'savo-common-styles/addon'";
      let contents = fs.readFileSync(appStylesPath, 'utf8');

      if (!contents.match(text)) {
        fs.writeFileSync(appStylesPath, `${text};\n\n${contents}`, 'utf8');
      }
    }
  }
};
