fs = require('fs');

let notFoundHtml

// choose at what id to start at
let startId = 100

// choose at what id to end at
let endId = 107

let i = startId

// Load the '404 Not Found' HTML from a dummy file
fs.readFile('dummy.sb3', 'utf8', function (err, data) {

    if (err) {
        return console.log(err);
    }

    notFoundHtml = data
    checkFile()

});

function checkNext() {

    if (i <= endId) {
        checkFile()
    }

}


// Check the file contetns against the dummy file
function checkFile() {

    fs.readFile(`${i}.sb3`, 'utf8', function (err, data) {

    if (err) {
        return console.log(err);
    }

    if (data == notFoundHtml) {

        console.log(`File ${i} is BAD.`)

        fs.truncate(`${i}.sb3`, 0, function() {
            console.log(`The contents of file ${i} have been erased.`)

            let rename = i + "-NotAvailable.txt"

            fs.rename(`${i}.sb3`, rename, function(err) {
            if (err) {
                console.log(err);
            }
            console.log(`Renamed '${i}.sb3' to '${i}-NotAvailable.txt'`)
            i++
            checkNext()
            });

        })

        } else {
            console.log(`File ${i} is OK.`)
            i++
            checkNext()
        }

});

}
