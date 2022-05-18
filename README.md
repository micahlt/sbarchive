# Unofficial archive of old Scratch projects

Due to the Scratch Team planning to remove the ability to view unshared projects (https://github.com/LLK/scratch-www/pull/6773), I had the idea to archive as many old projects as possible with the purpose of preserving Scratch's community history.  

## Opening projects

The files all are automatically downloaded with the `.sb3` extension for compatibility, but some older projects may not import correctly.  If Scratch fails to import a project, then attempt to switch the file extension to either `.sb2` or `.sb`

## Contributing projects

Please, contribute!  First, clone this repo to your computer or a cloud machine with plenty of space.  Second, run `npm install`.  Third, see what the most recent project is (the largest filename in the `projects` folder), then edit the `index.js` file's `initialIndex` and `finalIndex` variables accordingly.  I recommend that you keep the `initialIndex` and `finalIndex` no more than 10000 apart - otherwise, you'll have some problems with RAM consumption.  Once you've downloaded a lot of files, make a commit with a message like this: 

```
[projects] to 36000
```

Make a PR and I'll merge it!

## Future-proofing

The projects are currently stored in this GitHub repository.  Once enough are downloaded that they exceed GitHub's limits, they will be compressed and uploaded to the [Internet Archive](https://archive.org).
