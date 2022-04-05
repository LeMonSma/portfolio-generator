const { resolveCaa } = require('dns');
const fs = require('fs');


const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                // return empty to end code if error
                return;
            }

            // if everything went will resolve the, promise
            resolve({
                ok: true,
                message: 'File created!'
            });
        })
    });
};

const copyFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/.style.css', err => {
            if (err) {
                reject(err);
                return
            }

            resolveCaa({
                ok: true,
                message: 'file copied!'
            });
        })

    });
};

module.exports = { writeFile, copyFile };