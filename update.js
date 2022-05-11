const fs = require("fs");
const args = process.argv.slice(2);
const inputfolder = args[0];
const dir = `${__dirname}/${inputfolder}`;
const inputfiles = fs.readdirSync(dir).sort();

inputfiles.forEach(file => {
let id = file.split(".").shift();
let data = JSON.parse(fs.readFileSync(`${dir}/${file}`));
data.image =  `ipfs://YOUR CID/${id}.png`;
data.name = `NAME #${id}`;
data.description = `Your Description`
fs.writeFileSync(`${dir}/${file}`, JSON.stringify(data, null, 3));
});

