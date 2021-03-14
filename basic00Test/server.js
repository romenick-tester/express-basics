const path = require("path");
const fs = require("fs");

//console.log(path.sep);

const filePath = path.join("content", "subfolder", "test.txt");

//console.log(filePath); 

const base = path.basename(filePath);

//console.log(base); 

const absolute = path.resolve(__dirname, filePath);

//console.log(absolute);

const first = fs.readFileSync("./content/first.txt", "utf-8");
const second = fs.readFileSync("./content/second.txt", "utf-8");

//console.log(first, second);

//fs.writeFileSync("./content/third.txt", `${first} ${second} this is the third file.`);

/* fs.readFile("./content/first.txt", "utf-8", (err, result) => {
    if (err) {
        console.log(err);
        return;
    }

    const first = result;

    fs.readFile("./content/second.txt", "utf-8", (err, result) => {
        if (err) {
            console.log(err);
            return;
        }

        const second = result;

        fs.writeFile(
            "./content/fourth.txt",
            `${first} ${second} this is the third file. this is the fourth file.`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(result);
            }
        )
    })
});
*/

