# An Unofficial Archive of Scratch Projects

Due to the Scratch Team planning to remove the ability to view unshared projects (see [here](https://github.com/LLK/scratch-www/pull/6773)), I had the idea to archive as many old projects as possible with the purpose of preserving Scratch's community history.

## Progress

Shared Projects on Scratch: `100,000,000`  
Total Projects on Scratch: `?`  

Projects Archived So Far: `100,000`  

Progress: `<0.1%`

## Opening Project Files

All project files are uploaded to The Internet Archive and can be found [here](https://archive.org/details/scratch-projects).

The files all are automatically downloaded with the `.sb3` extension for compatibility, but some older projects may not import correctly.  If Scratch fails to import a project, then attempt to switch the file extension to either `.sb2` or `.sb`.

## Contributing

**This is outdated**

Please, contribute!  First, clone this repo to your computer or a cloud machine with plenty of space.  Second, run `npm install`.  Third, see what the most recent project is (the largest filename in the `projects` folder), then edit the `index.js` file's `initialIndex` and `finalIndex` variables accordingly.  I recommend that you keep the `initialIndex` and `finalIndex` no more than 10000 apart - otherwise, you'll have some problems with RAM consumption.  Once you've downloaded a lot of files, make a commit with a message like this: 

```
[projects] to 36000
```

Make a PR and I'll merge it!

## Licensing

This repository is licenced under the MIT License.

All Scratch project files are licenced under the [Attribution-ShareAlike 2.0 Generic (CC BY-SA 2.0)](https://creativecommons.org/licenses/by-sa/2.0/) licence.
