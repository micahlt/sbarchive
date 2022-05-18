const fs = require('fs');
const https = require('https');

// File URL
const url = `https://projects.scratch.mit.edu/`;

// Set the project id to start at
const startId = 1
// Set the project id to stop at
const endId = 100

let i = startId

function checkNext() {

    if (i <= endId) {
        getProject()
    }

}

function getProject() {

    // Download the file
    https.get((url + i), (res) => {

        // Create the file
        const file = fs.createWriteStream(`projects/${i}.sb3`);

        // Write data into the file
        res.pipe(file);

        // Close the file
        file.on('finish', () => {
            file.close();
            console.log(`Project ${i} downloaded successfully!`);
            i++
            checkNext()
        });

    }).on("error", (err) => {
        console.log("ERROR: ", err.message);
    });

}

getProject();
