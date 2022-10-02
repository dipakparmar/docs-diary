var fs = require('fs');
var path = require('path');
var yaml = require('js-yaml');
var dir = path.join(__dirname, '../docs/');

console.log('Reading files from ' + dir);

// go through all files in the directory and its any sub-directory and convert .yaml or .yml files to .json

convertToJson(dir);

// function convertToJson() {
//     fs.readdir(directory, function (err, files) {
//         if (err) {
//             console.log('Error reading directory ' + directory);
//             return;
//         }

//         files.forEach(function (file) {
//             var filePath = path.join(directory, file);
//             fs.stat(filePath, function (err, stat) {
//                 if (err) {
//                     console.log('Error reading file ' + filePath);
//                     return;
//                 }

//                 if (stat.isFile() && (filePath.endsWith('.yaml') || filePath.endsWith('.yml'))) {
//                     console.log('Converting file ' + filePath);
//                     var data = fs.readFileSync(filePath, 'utf8');
//                     var json = yaml.load(data);
//                     fs.writeFileSync(filePath.replace(/\.(yaml|yml)$/, '.json'), JSON.stringify(json, null, 2));
//                     // remove the original file
//                     fs.unlinkSync(filePath);
//                     console.log('Converted file ' + filePath);
//                 } else if (stat.isDirectory()) {
//                     console.log('Reading directory ' + filePath);
//                     fs.readdir(filePath, function (err, files) {
//                         if (err) {
//                             console.log('Error reading directory ' + filePath);
//                             return;
//                         }

//                         files.forEach(function (file) {
//                             var subFilePath = path.join(filePath, file);
//                             fs.stat(subFilePath, function (err, stat) {
//                                 if (err) {
//                                     console.log('Error reading file ' + subFilePath);
//                                     return;
//                                 }

//                                 if (stat.isFile() && (subFilePath.endsWith('.yaml') || subFilePath.endsWith('.yml'))) {
//                                     console.log('Converting file ' + subFilePath);
//                                     var data = fs.readFileSync(subFilePath, 'utf8');
//                                     var json = yaml.load(data);
//                                     fs.writeFileSync(subFilePath.replace(/\.(yaml|yml)$/, '.json'), JSON.stringify(json, null, 2));
//                                     // remove the original file
//                                     fs.unlinkSync(subFilePath);
//                                     console.log('Converted file ' + subFilePath);

//                                 }
//                             });
//                         });
//                     });
//                 }
//             });
//         });
//     });
// }

// optimize the above convertoToJson() function with recursion

function convertToJson(directory) {
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

                if (stat.isFile() && (filePath.endsWith('.yaml') || filePath.endsWith('.yml'))) {
                    console.log('Converting file ' + filePath);
                    var data = fs.readFileSync(filePath, 'utf8');
                    var json = yaml.load(data);
                    fs.writeFileSync(filePath.replace(/\.(yaml|yml)$/, '.json'), JSON.stringify(json, null, 2));
                    // remove the original file
                    fs.unlinkSync(filePath);
                    console.log('Converted file ' + filePath.replace(/\.(yaml|yml)$/, '.json'));
                } else if (stat.isDirectory()) {
                    console.log('Reading directory ' + filePath);
                    subdir = filePath;
                    convertToJson(subdir);
                }
            });
        });
    });
}



