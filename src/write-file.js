const fs = require('fs');

const writeHtml = function(fileContent){
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if(err){
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'HTML created'
            });
        });
    });
}

module.exports = writeHtml;