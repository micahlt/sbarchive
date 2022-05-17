import fetch from "node-fetch";
import { createWriteStream } from "node:fs";
let initialIndex = 10000,
  finalIndex = 20000;
console.log(`Downloading projects from ${initialIndex} to ${finalIndex}`);
const getProject = (id) => {
  fetch(`https://sb3.micahlindley.com/${id}`).then((res) => {
    const dest = createWriteStream(`./projects/${id}.sb3`);
    res.body.pipe(dest);
    dest.end();
    console.log(`Wrote project ${id}`);
  });
};

for (let i = initialIndex; i < finalIndex; i++) {
  getProject(i);
}
