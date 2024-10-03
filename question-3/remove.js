
const fs = require('fs');
const path = require('path');

// definding my path
const logsDir = path.join(__dirname, 'Logs');

// those it exist
if (fs.existsSync(logsDir)) {
    // read file directory
    fs.readdir(logsDir, (err, files) => {
        if (err) {
            return console.error(`Error reading the directory: ${err.message}`);
        }

        // delete each file directory
        files.forEach((mySuperfile) => {
            const filePath = path.join(logsDir, mySuperfile);
            fs.unlink(filePath, (err) => {
                if (err) {
                    return console.error(`Error deleting file ${mySuperfile}: ${err.message}`);
                }
                console.log(`File deleted: ${mySuperfile}`);
            });
        });

        // when file is deleted remove the directory
        fs.rmdir(logsDir, (err) => {
            if (err) {
                return console.error(`Error deleting Logs directory: ${err.message}`);
            }
            console.log('every log removed friend.');
        });
    });
} else {
    console.log('all this logs do not exist my friend.');
}

