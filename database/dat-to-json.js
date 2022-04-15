const datfile = require("robloach-datfile");
const glob = require("glob");
const fse = require("fs-extra");

const files = glob.sync(__dirname + "/libretro-database/dat/*.dat");

files.forEach((file) => {
    datfile.parseFile(file).then(function (database) {
        const outfile = file
            .replace(".dat", ".json")
            .replace("libretro-database", "libretro-database-json");
        fse.outputJSON(outfile, database, { spaces: 2 });
    });
});
