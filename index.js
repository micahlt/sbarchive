import fetch from "node-fetch";
import { createWriteStream } from "node:fs";
let initialIndex = 40000,
  finalIndex = 50000;
console.log(
  `Downloading projects from ${initialIndex} to ${finalIndex} (${
    finalIndex - initialIndex
  } files)`
);
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
