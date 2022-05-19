var http = require("https");
var fs = require("fs");
const API = "https://sb3.micahlindley.com";
const START = 100;
const END = 1000;

let i = START;
var download = function (method) {
  if (!method) method = "getsb3";
  var file = fs.createWriteStream(`projects/${i}.sb3`);
  console.log(`Downloading ${i}.sb3 [${method}]`);
  if (method == "getsb3") {
    http.get(API + "/" + i, function (response) {
      if (response.statusCode > 500) {
        download("scratchapi");
      } else if (response.statusCode == 200) {
        response.pipe(file);
        file.on("finish", function () {
          file.close(() => {
            i++;
            if (i < END) setTimeout(download, 150);
          });
        });
      } else {
        console.log("Error downloading:", response.statusCode);
      }
    });
  } else {
    http.get("https://projects.scratch.mit.edu/" + i, function (response) {
      if (response.statusCode > 500) {
      } else if (response.statusCode == 200) {
        response.pipe(file);
        file.on("finish", function () {
          file.close(() => {
            i++;
            if (i < END) setTimeout(download, 150);
          });
        });
      } else if (response.statusCode == 404) {
        console.log("Project not found.");
        file.close();
        fs.unlink(`projects/${i}.sb3`, () => {
          fs.writeFileSync(`projects/${i}-notfound.sb3`, "", () => {
            i++;
            if (i < END) setTimeout(download, 150);
          });
        });
      }
    });
  }
};

download();
