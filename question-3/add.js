

const fs = require('fs');
const path = require('path');

// definding the log path
const logsDir = path.join(__dirname, 'Logs');

// logs directory creation if don't have
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
    console.log('Logs created friend.');
}

// changing derectory to new
process.chdir(logsDir);

//creating the 10 files in inside words
for (let i = 0; i <= 10; i++) {
    const mySuperFileName = `log${i}.txt`;
    const mySuperFileContent = `This is super cool beans ${i}.`;
    
    //writing text into my file 
    fs.writeFile(mySuperFileName, mySuperFileContent, (err) => {
        if (err) {
            return console.error(`Error creating file ${mySuperFileName}: ${err.message}`);
        }
        console.log(`File created: ${mySuperFileName}`);
    });
}
