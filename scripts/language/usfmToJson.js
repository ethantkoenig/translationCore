const usfmParser = require('usfm-parser');
const fs = require(window.__base + 'node_modules/fs-extra');
const path = require('path');

const USFMtoJSON = {
    start: function (folderPath) {
        const files = fs.readdirSync(folderPath);
        for (var file in files) {
            const resultJSON = usfmParser.toJSON(fs.readFileSync(path.join(folderPath, files[file])).toString());
            fs.outputJsonSync(path.join(folderPath, resultJSON.book + ".json"), resultJSON);
        }
    },
}

module.exports = USFMtoJSON;