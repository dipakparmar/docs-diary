var fs = require('fs');
var path = require('path');
var yaml = require('js-yaml');
var dir = path.join(__dirname, '../docs/');

console.log('Reading files from ' + dir);

convertToJson(dir, true);

/**
 * Recursively go through all files in the directory and its any sub-directory and convert .yaml or .yml files to .json
 * @param {string} directory - The directory to start from
 * @param {boolean} deleteOrignalFile - Whether to delete the original file or not
 *
 * @returns {void}
 */
function convertToJson(directory, deleteOrignalFile) {
  fs.readdir(directory, function (err, files) {
    if (err) {
      console.log('Error reading directory ' + directory);
      return;
    }

    files.forEach(function (file) {
      var filePath = path.join(directory, file);
      fs.stat(filePath, function (err, stat) {
        if (err) {
          console.log('Error reading file ' + filePath);
          return;
        }

        if (
          stat.isFile() &&
          (filePath.endsWith('.yaml') || filePath.endsWith('.yml'))
        ) {
          console.log('Converting file ' + filePath);
          var data = fs.readFileSync(filePath, 'utf8');
          var json = yaml.load(data);
          fs.writeFileSync(
            filePath.replace(/\.(yaml|yml)$/, '.json'),
            JSON.stringify(json, null, 2),
          );
          if (deleteOrignalFile) {
            fs.unlinkSync(filePath); // delete the original file
            console.log('Deleted the orignal file ' + filePath);
          }
          console.log(
            'Converted file ' + filePath.replace(/\.(yaml|yml)$/, '.json'),
          );
        } else if (stat.isDirectory()) {
          console.log('Reading directory ' + filePath);
          subdir = filePath;
          convertToJson(subdir, deleteOrignalFile);
        }
      });
    });
  });
}
