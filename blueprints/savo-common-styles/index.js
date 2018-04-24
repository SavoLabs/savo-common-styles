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
    // console.log('/options/', options);
    console.log('/options.addon/', options.addon);
    let baseDir = options.dummy ? 'tests/dummy/app/styles' : 'addon/styles';
    console.log('/baseDir/', baseDir);

    let appStylesFile = 'addon.scss';
    let text = "@import 'savo-common-styles/addon'";

    let appStylesPath = `${baseDir}/${appStylesFile}`;
    console.log('/appStylesPath/', appStylesPath);

    let contents = fs.readFileSync(appStylesPath, 'utf8');

    if (!contents.match(text)) {
      fs.writeFileSync(appStylesPath, `${text};\n\n${contents}`, 'utf8');
    }
    // The import isn't necessary for addons, as tailwind will automatically
    // be concatenated into vendor.css
    if (fs.existsSync(appStylesPath)) {
      console.log('/appStylesPath/ exists!');
    }

    // Couldn't get this to insert the text at the top of file
    // return this.insertIntoFile('app/styles/app.css', text);
  }
};
