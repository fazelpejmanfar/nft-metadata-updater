const fs = require("fs");
const args = process.argv.slice(2);
const inputfolder = args[0];
const dir = `${__dirname}/${inputfolder}`;
const inputfiles = fs.readdirSync(dir).sort();

inputfiles.forEach(file => {
    fs.renameSync(`${dir}/${file}`, `${dir}/${file.split("_").pop()}`)
    console.log(file);
});

